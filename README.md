# DocChat

Upload PDFs, Word files, notes or images and chat with them. Answers stream in live.

## Features

- **AI overview** of every upload: document type, summary, key topics and suggested questions
- **Smart follow-ups**: three suggested next questions after every answer
- **Quick actions**: Summarize, Key facts, Action items, Explain simply, Quiz me, Find risks, Compare documents
- **Answer styles**: Concise, Balanced, Detailed, Simple
- **Saved chats** (SQLite, `docchat.db`) with search, rename, delete and Markdown export
- Copy, read aloud, regenerate, and stop buttons on answers
- Drag and drop files anywhere; PDF, Word (.docx), text, Markdown, CSV and images
- Five color themes (DocChat blue by default) plus light / dark / system mode
- Works on desktop (3 panels) and phones (slide-out drawers)
- Keyboard: `Ctrl+K` new chat, `/` focus the question box, `Esc` stop an answer

Works with three AI providers. Pick one with the `PROVIDER` setting:

| Provider | Cost | Key needed | Notes |
|---|---|---|---|
| `gemini` | Free tier | Yes, free | Reads PDFs natively (incl. tables/images). Daily request limits. |
| `ollama` | Free | No | Runs on your PC, fully private and offline. Slower, weaker answers, text PDFs only. |
| `claude` | Paid | Yes | Best answers, exact clickable citations with page numbers. |

If `PROVIDER` isn't set, DocChat uses Gemini if a Gemini key is set, then Claude if a Claude key is set, otherwise Ollama.

## Install (once)

```
python -m venv .venv
.venv\Scripts\pip install -r requirements.txt
```

## Option A: Gemini (free, recommended)

1. Get a free key at https://aistudio.google.com/apikey (sign in with Google -> Create API key).
2. Run (PowerShell):
   ```
   $env:GEMINI_API_KEY = "your-key"
   .venv\Scripts\python app.py
   ```
3. Open http://127.0.0.1:5000

Default model: `gemini-3.5-flash-lite` (more free requests per day). For smarter answers with a smaller
daily limit: `$env:GEMINI_MODEL = "gemini-3.8-flash"`. Note: on the free tier Google may use your
prompts and documents to improve its products, so don't upload anything private.

## Option B: Ollama (free, offline, private)

1. Install Ollama from https://ollama.com and start it.
2. Download a model (~2 GB): `ollama pull llama3.2:3b`
3. Run:
   ```
   $env:PROVIDER = "ollama"
   .venv\Scripts\python app.py
   ```

Settings: `OLLAMA_MODEL` (default `llama3.2:3b`; try `gemma3:4b` or `qwen3:4b` for better answers)
and `OLLAMA_CONTEXT` (default 16384 tokens, about 40 pages of text; raise it if you have more RAM).

## Option C: Claude (paid)

```
$env:PROVIDER = "claude"
$env:ANTHROPIC_API_KEY = "sk-ant-..."
.venv\Scripts\python app.py
```

## Deploy as a free website (Render)

1. Push this folder to a GitHub repository (`.env` and the databases are git-ignored, so your key stays private).
2. On https://render.com sign in with GitHub, then **New + > Blueprint** and pick the repository.
   Render reads `render.yaml` and asks for `GEMINI_API_KEY`; paste your key there.
3. You get a link like `https://docchat-xxxx.onrender.com`.

In public mode (`DOCCHAT_PUBLIC=1`) every browser only sees its own chats, uploads are capped at 10 MB,
and visitors see a "free demo" notice. Questions are unlimited by default; to protect your Gemini quota,
set `DAILY_LIMIT` (per visitor) and/or `GLOBAL_DAILY_LIMIT` (whole site) in Render's Environment tab.
On Render's free plan the site sleeps after ~15 minutes idle and saved chats reset on restart.

## Sign in with Google

Set `GOOGLE_CLIENT_ID` and DocChat requires a Google sign-in before anyone can upload or ask; each
account only sees its own chats, on any device. Without it, there are no accounts (good for local use).

1. https://console.cloud.google.com > create or pick a project.
2. **Google Auth Platform > Branding**: app name DocChat, your email; **Audience**: External, then **Publish app**.
3. **Clients > Create client > Web application**. Authorized JavaScript origins:
   `https://docchat-006c.onrender.com`, `http://localhost:5000` and `http://localhost`.
4. Copy the **Client ID** (it's public, not a secret) into `render.yaml` (`GOOGLE_CLIENT_ID`) and/or `.env`.

Logins are signed with `SECRET_KEY` (Render generates it; locally it's stored in `.secret_key`).

## Testing the UI without any AI

`.venv\Scripts\python mock_server.py` runs the app on http://127.0.0.1:5001 with a fake AI that
streams a sample answer. It uses its own `mock.db`, so it never touches your real chats.

## How it works

- Files: `app.py` (server), `static/index.html` (layout), `static/style.css`, `static/app.js`
  (page logic) and `static/theme.js` (color themes).
- Chats, documents and messages live in SQLite (`docchat.db`). Delete that file to start fresh.
- `POST /api/chats/<id>/upload` stores files; PDFs and Word files also get their text extracted
  (with `--- Page N ---` markers) for word counts and the local model.
- `POST /api/chats/<id>/insights` asks the AI for a JSON overview (title, type, summary, topics, questions).
- `POST /api/chats/<id>/ask` rebuilds the conversation from the database and streams the answer as
  server-sent events. The model ends each answer with `[[FOLLOWUPS]]` and three questions; the server
  strips that part out and sends the questions separately.
- Each provider is two functions in `app.py` (`*_stream` for answers, `*_json` for overviews).

## Ideas to extend it

- A dropdown in the page to switch providers live
- For huge documents: split into chunks and retrieve only the relevant ones (RAG)
- Highlight the cited passage inside a PDF viewer
