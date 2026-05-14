# JessiPreps AI Teacher Backend

This tiny backend creates secure OpenAI Realtime sessions for the floating Professor Maya teacher widget.

The frontend must not contain `OPENAI_API_KEY`. Deploy this folder to Vercel and set the key as an environment variable.

## Deploy

1. Create a new Vercel project from this `ai-teacher-backend` folder.
2. Add environment variables:
   - `OPENAI_API_KEY`
   - `ALLOWED_ORIGIN=https://jessicabarr0926-lab.github.io`
   - optional: `OPENAI_REALTIME_MODEL=gpt-realtime`
   - optional: `OPENAI_REALTIME_VOICE=marin`
3. Deploy.
4. Open JessiPreps, click `Ask Maya`, paste the deployed backend URL, then click `Connect voice`.

## Endpoints

- `GET /api/health`
- `POST /api/realtime-session`

The session endpoint returns a temporary Realtime client secret for the browser.
