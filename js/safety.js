/* Shared safety helpers for the static JessiPreps SPA.
   Keep this file dependency-free so it can load before app.js on GitHub Pages. */
(function registerSafetyHelpers(global) {
  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function safeContentUrl(value) {
    const url = String(value || "").trim();
    if (!url) return "";
    if (/^(https?:\/\/|#\/|\.\/|\/|output\/|video-lessons\/)/i.test(url)) return url;
    return "";
  }

  global.JessiPrepsSafety = { escapeHtml, safeContentUrl };
  global.escapeHtml = escapeHtml;
  global.safeContentUrl = safeContentUrl;
})(typeof window !== "undefined" ? window : globalThis);
