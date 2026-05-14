export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", process.env.ALLOWED_ORIGIN || "https://jessicabarr0926-lab.github.io");
  res.statusCode = 200;
  res.json({
    ok: true,
    service: "JessiPreps Professor Maya backend",
    realtimeModel: process.env.OPENAI_REALTIME_MODEL || "gpt-realtime",
  });
}
