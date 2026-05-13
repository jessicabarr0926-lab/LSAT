/* ============================================================
   JessiPreps — video-lesson-map.js

   Bridges the Sora-rendered MP4 outputs to the in-browser lesson
   players (both the SPA at index.html and the static
   lesson-player.html). At runtime:

   1. Fetches `video-lessons/download-map.json` once (cached) to
      build a lesson-id -> MP4 path lookup.
   2. Exposes `window.JESSI_LESSON_VIDEOS.mountLessonVideo(container,
      lessonId, options)`. The helper does a HEAD probe against the
      MP4 path; if the file is present it injects a <video> element
      into the container. If absent (e.g. video not yet rendered),
      it no-ops so the existing animated lesson UI remains.

   Idempotent: a second mount call against the same container is a
   no-op when a video child already exists.
   ============================================================ */

(function () {
  "use strict";

  var DOWNLOAD_MAP_URL = "video-lessons/download-map.json";
  var mapPromise = null;
  var headProbeCache = Object.create(null);

  function loadMap() {
    if (mapPromise) return mapPromise;
    mapPromise = fetch(DOWNLOAD_MAP_URL, { cache: "force-cache" })
      .then(function (r) {
        return r && r.ok ? r.json() : [];
      })
      .then(function (list) {
        var byId = Object.create(null);
        if (!Array.isArray(list)) return byId;
        for (var i = 0; i < list.length; i++) {
          var entry = list[i];
          if (entry && entry.id && entry.outFile) {
            byId[entry.id] = entry.outFile;
          }
        }
        return byId;
      })
      .catch(function () {
        return Object.create(null);
      });
    return mapPromise;
  }

  function probe(src) {
    if (window.location && window.location.protocol === "file:") {
      headProbeCache[src] = true;
      return Promise.resolve(true);
    }
    if (headProbeCache[src] !== undefined) {
      return Promise.resolve(headProbeCache[src]);
    }
    return fetch(src, { method: "HEAD" })
      .then(function (r) {
        var ok = !!(r && r.ok);
        headProbeCache[src] = ok;
        return ok;
      })
      .catch(function () {
        headProbeCache[src] = false;
        return false;
      });
  }

  function findLessonVideo(lessonId) {
    return loadMap().then(function (map) {
      return map[lessonId] || null;
    });
  }

  function mountLessonVideo(container, lessonId, options) {
    if (!container || !lessonId) return Promise.resolve(null);
    options = options || {};
    if (container.querySelector("video.lesson-mp4")) {
      return Promise.resolve(container.querySelector("video.lesson-mp4"));
    }
    return loadMap().then(function (map) {
      var src = map[lessonId];
      if (!src) return null;
      return probe(src).then(function (exists) {
        if (!exists) return null;
        // Avoid a race: another mount call may have populated the slot
        // while we were probing.
        if (container.querySelector("video.lesson-mp4")) {
          return container.querySelector("video.lesson-mp4");
        }
        var video = document.createElement("video");
        video.className = "lesson-mp4";
        video.controls = true;
        video.preload = "metadata";
        video.setAttribute("playsinline", "");
        if (options.poster) video.poster = options.poster;
        video.style.cssText = [
          "width:100%",
          "aspect-ratio:16/9",
          "border-radius:18px",
          "background:#000",
          "display:block",
          "margin:0 0 18px",
          "box-shadow:0 18px 48px rgba(40,30,80,0.18)"
        ].join(";");
        video.src = src;
        video.addEventListener(
          "error",
          function () {
            // File vanished or transient network failure: bail quietly
            // so the animated lesson UI is the visible state.
            if (video.parentNode) video.parentNode.removeChild(video);
          },
          { once: true }
        );
        if (options.prepend && container.firstChild) {
          container.insertBefore(video, container.firstChild);
        } else {
          container.appendChild(video);
        }
        return video;
      });
    });
  }

  window.JESSI_LESSON_VIDEOS = {
    findLessonVideo: findLessonVideo,
    mountLessonVideo: mountLessonVideo
  };
})();
