const DEFAULT_ALLOWED_ORIGIN = "https://jessicabarr0926-lab.github.io";

function setCors(req, res) {
  const configured = process.env.ALLOWED_ORIGIN || DEFAULT_ALLOWED_ORIGIN;
  const allowed = configured.split(",").map((origin) => origin.trim()).filter(Boolean);
  const origin = req.headers.origin;
  const responseOrigin = allowed.includes(origin) ? origin : allowed[0];
  res.setHeader("Access-Control-Allow-Origin", responseOrigin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 120_000) {
        reject(new Error("Request body too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        resolve({});
      }
    });
    req.on("error", reject);
  });
}

export default async function handler(req, res) {
  setCors(req, res);
  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.json({ error: "Method not allowed" });
    return;
  }
  if (!process.env.OPENAI_API_KEY) {
    res.statusCode = 500;
    res.json({ error: "Missing OPENAI_API_KEY" });
    return;
  }

  try {
    const body = await readBody(req);
    const extraInstructions = String(body.instructions || "").slice(0, 12000);
    const lesson = body.lesson || {};
    const instructions = `
You are Professor Maya Brooks, JessiPreps' live LSAT teacher.
Speak warmly and directly, like a focused tutor sitting next to Jessica.
Use short explanations, ask check-for-understanding questions, and turn mistakes into one reusable rule.
Current lesson: ${lesson.title || "JessiPreps lesson"}.
Current family: ${lesson.family || "LSAT reasoning"}.
Lesson context: ${lesson.summary || "Use JessiPreps LSAT methods."}
Never reproduce official LSAT, book, or paid-platform question text. Use original examples only.

${extraInstructions}
    `.trim();

    const response = await fetch("https://api.openai.com/v1/realtime/client_secrets", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        session: {
          type: "realtime",
          model: process.env.OPENAI_REALTIME_MODEL || "gpt-realtime",
          instructions,
          audio: {
            output: {
              voice: process.env.OPENAI_REALTIME_VOICE || "marin",
            },
          },
        },
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      res.statusCode = response.status;
      res.json({ error: "OpenAI Realtime session failed", details: data });
      return;
    }
    res.statusCode = 200;
    res.json(data);
  } catch (error) {
    res.statusCode = 500;
    res.json({ error: error.message || "Realtime session error" });
  }
}
