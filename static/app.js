// DocChat front end: chats, documents, streaming answers, insights and quick actions.

// ------------------------------------------------------------------ icons
const ICONS = {
  plus: '<path d="M12 5v14M5 12h14"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6"/>',
  copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  refresh: '<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>',
  volume: '<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/>',
  stop: '<rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor"/>',
  arrowUp: '<path d="M12 19V5M5 12l7-7 7 7"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  panel: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18"/>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',
  paperclip: '<path d="m21 11-9 9a5 5 0 0 1-7-7l9-9a3.5 3.5 0 0 1 5 5l-9 9a2 2 0 0 1-3-3l8-8"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
  message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  sparkles: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  hash: '<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',
  checklist: '<path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
  bulb: '<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>',
  quiz: '<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>',
  alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',
  columns: '<path d="M12 3v18M3 6h6M3 12h6M3 18h6M15 6h6M15 12h6M15 18h6"/>',
  file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>',
  quote: '<path d="M3 21c3 0 7-1 7-8V5H3v7h4c0 3-1 5-4 5zM14 21c3 0 7-1 7-8V5h-7v7h4c0 3-1 5-4 5z"/>',
  sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
  layers: '<path d="M12 2 2 7l10 5 10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',
  arrowRight: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
};
const icon = name => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ""}</svg>`;
const BOT_ICON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 4c5 0 9 3.1 9 7s-4 7-9 7c-1 0-2-.1-2.9-.4L5 19.5l1.2-3.6C4.2 14.6 3 12.9 3 11c0-3.9 4-7 9-7z"/><circle cx="8.3" cy="11" r="1.3" fill="var(--accent)"/><circle cx="12" cy="11" r="1.3" fill="var(--accent)"/><circle cx="15.7" cy="11" r="1.3" fill="var(--accent)"/></svg>';

// ------------------------------------------------------------------ content
const QUICK_ACTIONS = [
  { icon: "list", label: "Summarize", prompt: "Summarize the documents in 5-7 clear bullet points, then give the overall takeaway in one sentence." },
  { icon: "hash", label: "Key facts", prompt: "List the most important facts, figures, names and dates in the documents." },
  { icon: "checklist", label: "Action items", prompt: "Extract every action item, deadline, obligation or next step from the documents, as a checklist. If there are none, say so." },
  { icon: "bulb", label: "Explain simply", prompt: "Explain what these documents are about in simple language, as if to someone with no background in the topic." },
  { icon: "quiz", label: "Quiz me", prompt: "Write 5 multiple-choice questions (options A-D) that test my understanding of the documents. List the correct answers with a one-line explanation each at the very end, under a line that says Answers." },
  { icon: "alert", label: "Find risks", prompt: "Point out anything unclear, risky, unusual or contradictory in the documents, and explain why each point matters." },
];
const COMPARE_ACTION = { icon: "columns", label: "Compare documents", prompt: "Compare the documents: the main similarities, the key differences, and anything that conflicts between them.", wide: true };
const FALLBACK_QUESTIONS = ["Summarize this in 5 bullet points", "What are the key dates and deadlines?", "What are the most important numbers?", "What should I pay attention to?"];
const FEATURES = [
  ["sparkles", "Instant overview", "An AI summary, key topics and suggested questions the moment you upload."],
  ["quote", "Answers with sources", "Answers point back to the document and page they came from."],
  ["list", "One-click actions", "Summaries, key facts, action items, quizzes and risk checks."],
  ["sliders", "Answer styles", "Switch between concise, detailed or explain-it-simply answers."],
  ["message", "Smart follow-ups", "Suggested next questions after every answer keep you moving."],
  ["layers", "Saved history", "Chats and files are saved, so you can pick up where you left off."],
];
const STEPS = [["Upload", "Drop in PDFs, Word files, notes or images."], ["Converse", "Ask a question or tap a suggestion."], ["Know", "Get clear answers with sources, then dig deeper."]];

// ------------------------------------------------------------------ state + helpers
const $ = (sel, el = document) => el.querySelector(sel);
const state = {
  config: {}, chats: [], chatId: null, chat: null, busy: false, controller: null,
  insightsLoading: false, insightsError: null, style: readPref("docchat-style", "balanced"), search: "",
};
const log = $("#log"), q = $("#q"), send = $("#send");

function escapeHtml(s) { return String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function savePref(key, value) { try { localStorage.setItem(key, value); } catch (e) {} }
function plural(n, word) { return `${n} ${word}${n === 1 ? "" : "s"}`; }
function fmtNum(n) { return n >= 10000 ? (n / 1000).toFixed(0) + "k" : n >= 1000 ? (n / 1000).toFixed(1) + "k" : String(n); }
function fmtSize(n) { return n > 1e6 ? (n / 1e6).toFixed(1) + " MB" : Math.max(1, Math.round(n / 1e3)) + " KB"; }
function timeAgo(ts) {
  const s = Date.now() / 1000 - ts;
  if (s < 60) return "just now";
  if (s < 3600) return `${Math.floor(s / 60)} min ago`;
  if (s < 86400) return `${Math.floor(s / 3600)} h ago`;
  if (s < 172800) return "yesterday";
  return new Date(ts * 1000).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

let toastTimer;
function toast(msg, ms = 2600) {
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), ms);
}

async function api(path, opts = {}) {
  if (opts.json !== undefined) {
    opts = { ...opts, headers: { "Content-Type": "application/json" }, body: JSON.stringify(opts.json) };
    delete opts.json;
  }
  let r;
  try { r = await fetch(path, opts); }
  catch (e) { throw new Error("Can't reach the DocChat server. Make sure it's running, then reload the page."); }
  const data = await r.json().catch(() => ({}));
  if (r.status === 401 && data.auth) { signedOut(); throw new Error(data.error); }
  if (!r.ok) throw new Error(data.error || `Request failed (${r.status})`);
  return data;
}

// ------------------------------------------------------------------ markdown (safe subset)
// \u0001N\u0001 marks a Claude citation; \u0002 marks where the typing caret goes.
function inlineMd(s) {
  const codes = [];
  s = s.replace(/`([^`\n]+)`/g, (_, c) => { codes.push(c); return `\u0003${codes.length - 1}\u0003`; });
  s = s.replace(/\*\*([^*\n]+?)\*\*/g, "<strong>$1</strong>").replace(/__([^_\n]+?)__/g, "<strong>$1</strong>");
  s = s.replace(/(^|[^*\w])\*([^*\s][^*\n]*?)\*(?!\w)/g, "$1<em>$2</em>").replace(/(^|[^_\w])_([^_\s][^_\n]*?)_(?!\w)/g, "$1<em>$2</em>");
  s = s.replace(/\[([^\[\]\n]{1,80}?\.[A-Za-z0-9]{2,4}(?:,\s*(?:pp?\.|page)\s*[\d\s,–-]+)?)\]/g, '<span class="src-tag">$1</span>');
  s = s.replace(/\u0001(\d+)\u0001/g, "<sup>$1</sup>");
  s = s.replace(/\u0003(\d+)\u0003/g, (_, i) => `<code>${codes[+i]}</code>`);
  return s.replace(/\u0002/g, '<span class="caret"></span>');
}
function renderMd(text) {
  const lines = escapeHtml(text).split("\n");
  let html = "", list = null, para = [];
  const flushPara = () => { if (para.length) { html += `<p>${inlineMd(para.join("<br>"))}</p>`; para = []; } };
  const closeList = () => { if (list) { html += `</${list}>`; list = null; } };
  for (const line of lines) {
    let m;
    if ((m = line.match(/^\s*[-*•]\s+(.*)$/)) || (m = line.match(/^\s*\d+[.)]\s+(.*)$/))) {
      const type = /^\s*\d/.test(line) ? "ol" : "ul";
      flushPara();
      if (list !== type) { closeList(); html += `<${type}>`; list = type; }
      html += `<li>${inlineMd(m[1])}</li>`;
    } else if ((m = line.match(/^\s*&gt;\s?(.*)$/))) {
      flushPara(); closeList();
      if (html.endsWith("</blockquote>")) html = html.slice(0, -13) + `<br>${inlineMd(m[1])}</blockquote>`;
      else html += `<blockquote>${inlineMd(m[1])}</blockquote>`;
    } else if ((m = line.match(/^\s*#{1,6}\s+(.*)$/))) {
      flushPara(); closeList(); html += `<span class="h">${inlineMd(m[1])}</span>`;
    } else if (!line.trim()) {
      flushPara(); closeList();
    } else {
      if (list && /^\s{2,}/.test(line)) { html = html.replace(/<\/li>$/, ` ${inlineMd(line.trim())}</li>`); continue; }
      closeList(); para.push(line);
    }
  }
  flushPara(); closeList();
  return html;
}

// ------------------------------------------------------------------ chats
async function loadChats() {
  try { state.chats = await api("/api/chats"); } catch (e) { state.chats = []; }
  renderChatList();
}

function renderChatList() {
  const ul = $("#chatList"); ul.innerHTML = "";
  if (needsSignIn()) { ul.innerHTML = `<li class="chats-empty">Sign in to see your chats.</li>`; return; }
  const term = state.search.trim().toLowerCase();
  const chats = state.chats.filter(c => !term || c.title.toLowerCase().includes(term));
  if (!chats.length) {
    ul.innerHTML = `<li class="chats-empty">${term ? "No chats match your search." : "Your chats will show up here. Upload a document to start the first one."}</li>`;
    return;
  }
  for (const c of chats) {
    const li = document.createElement("li");
    li.className = "chat-item" + (c.id === state.chatId ? " active" : "");
    li.tabIndex = 0;
    li.innerHTML = `<span class="ci-icon">${icon("message")}</span>
      <span class="ci-text"><div class="ci-title"></div><div class="ci-sub">${timeAgo(c.updated)} · ${plural(c.docs, "doc")}</div></span>
      <button class="icon-btn ci-del" title="Delete chat" aria-label="Delete chat">${icon("trash")}</button>`;
    $(".ci-title", li).textContent = c.title;
    li.onclick = e => { if (!e.target.closest(".ci-del")) { openChat(c.id); closeDrawers(); } };
    li.onkeydown = e => { if (e.key === "Enter") li.click(); };
    $(".ci-del", li).onclick = () => deleteChat(c.id, c.title);
    ul.appendChild(li);
  }
}

async function openChat(id) {
  if (state.busy) stopAnswer();
  try {
    const chat = await api(`/api/chats/${id}`);
    state.chatId = id; state.chat = chat; state.insightsError = null; state.insightsLoading = false;
    renderAll();
    if (chat.docs.length && !chat.insights) generateInsights();
  } catch (e) { toast(e.message); }
}

function newChat() {
  if (state.busy) stopAnswer();
  if (needsSignIn()) { renderAll(); return; }
  state.chatId = null;
  state.chat = { title: "New chat", docs: [], messages: [], insights: null };
  state.insightsError = null; state.insightsLoading = false;
  renderAll();
  q.focus();
}

async function ensureChat() {
  if (state.chatId) return state.chatId;
  const c = await api("/api/chats", { method: "POST" });
  state.chatId = c.id;
  state.chat = { ...c, docs: [], messages: [], insights: null };
  return c.id;
}

// In-page confirm box (the browser's own confirm() pop-up can be blocked, which silently cancels).
function confirmDialog(title, text, okLabel = "Delete") {
  const modal = $("#modal"), ok = $("#modalOk"), cancel = $("#modalCancel");
  $("#modalTitle").textContent = title;
  $("#modalText").textContent = text;
  ok.textContent = okLabel;
  modal.hidden = false;
  ok.focus();
  return new Promise(resolve => {
    const done = result => {
      modal.hidden = true;
      ok.onclick = cancel.onclick = modal.onclick = document.onkeydown = null;
      resolve(result);
    };
    ok.onclick = () => done(true);
    cancel.onclick = () => done(false);
    modal.onclick = e => { if (e.target === modal) done(false); };
    document.onkeydown = e => { if (e.key === "Escape") { e.stopPropagation(); done(false); } };
  });
}

async function deleteChat(id, title) {
  if (!await confirmDialog("Delete this chat?", `"${title}" and its files will be removed. This can't be undone.`)) return;
  try {
    await api(`/api/chats/${id}`, { method: "DELETE" });
    await loadChats();
    if (id === state.chatId) state.chats.length ? openChat(state.chats[0].id) : newChat();
    toast("Chat deleted");
  } catch (e) { toast(e.message); }
}

async function refreshChatMeta() {
  if (!state.chatId) return;
  try {
    const fresh = await api(`/api/chats/${state.chatId}`);
    state.chat.title = fresh.title; state.chat.questions = fresh.questions;
  } catch (e) {}
  renderHeader(); loadChats();
}

// ------------------------------------------------------------------ documents
async function uploadFiles(files) {
  files = [...files];
  if (!files.length) return;
  if (needsSignIn()) { toast("Sign in with Google first"); return; }
  try {
    const cid = await ensureChat();
    toast(`Uploading ${plural(files.length, "file")}…`, 10000);
    const fd = new FormData();
    files.forEach(f => fd.append("files", f));
    const r = await api(`/api/chats/${cid}/upload`, { method: "POST", body: fd });
    if (cid !== state.chatId) return;
    state.chat.docs = r.docs;
    const msg = [r.added.length ? `Added ${plural(r.added.length, "file")}` : "", ...r.errors].filter(Boolean).join(" · ");
    toast(msg || "Nothing was added", r.errors.length ? 6000 : 2600);
    renderAll(); loadChats();
    if (r.added.length) generateInsights();
  } catch (e) {
    toast(e.message.includes("413") ? `That file is too large (${state.config.max_mb || 30} MB max per chat).` : e.message, 5000);
  }
}

async function removeDoc(id) {
  try {
    const r = await api(`/api/chats/${state.chatId}/docs/${id}`, { method: "DELETE" });
    state.chat.docs = r.docs;
    state.chat.insights = null;
    renderAll(); loadChats();
    toast("Document removed");
    if (r.docs.length) generateInsights();
  } catch (e) { toast(e.message, 5000); }
}

async function generateInsights() {
  const cid = state.chatId;
  if (!cid || !state.chat.docs.length) return;
  state.insightsLoading = true; state.insightsError = null;
  renderPanel(); if (!state.chat.messages.length) renderLog();
  try {
    const data = await api(`/api/chats/${cid}/insights`, { method: "POST" });
    if (cid !== state.chatId) return;
    state.chat.insights = data;
  } catch (e) {
    if (cid === state.chatId) state.insightsError = e.message;
  } finally {
    if (cid === state.chatId) {
      state.insightsLoading = false;
      renderPanel(); if (!state.chat.messages.length) renderLog();
      refreshChatMeta();
    }
    refreshQuota();
  }
}

// ------------------------------------------------------------------ rendering
function renderAll() { renderHeader(); renderLog(); renderPanel(); renderChatList(); updateComposer(); }

function renderHeader() {
  const c = state.chat, title = $("#chatTitle");
  if (document.activeElement !== title) title.textContent = c.title || "New chat";
  title.contentEditable = state.chatId ? "true" : "false";
  title.title = state.chatId ? "Click to rename" : "";
  const qs = c.messages ? c.messages.filter(m => m.role === "user").length : 0;
  $("#chatMeta").textContent = c.docs.length ? `${plural(c.docs.length, "document")} · ${plural(qs, "question")}` : "Upload a document to get started";
  $("#exportBtn").style.visibility = qs ? "visible" : "hidden";
  $("#deleteBtn").style.visibility = state.chatId ? "visible" : "hidden";
}

function renderLog() {
  log.innerHTML = "";
  const c = state.chat;
  if (needsSignIn()) return renderSignIn();
  if (!c.docs.length && !c.messages.length) return renderWelcome();
  if (!c.messages.length) return renderReady();
  c.messages.forEach((m, i) => {
    if (m.role === "user") addUser(m.display);
    else finishBot(addBot(), m.display, m.meta || {}, i === c.messages.length - 1);
  });
  log.scrollTop = log.scrollHeight;
}

function renderWelcome() {
  const formats = state.config.images ? "PDF · Word · TXT · Markdown · CSV · Images" : "PDF · Word · TXT · Markdown · CSV";
  log.innerHTML = `<div class="welcome">
    <div class="hero">
      <svg class="logo" aria-hidden="true"><use href="#logo"/></svg>
      <h2>Chat with any document,<br><em>get answers you can trust.</em></h2>
      <p>Upload a file and DocChat reads it, gives you an instant overview, and answers your questions with sources.</p>
      <button class="btn primary" data-act="upload">${icon("upload")}Upload a document</button>
      <span class="formats">${formats} · or drop files anywhere</span>
      ${state.config.public ? `<span class="demo-note">${icon("shield")}<span>Free demo: your chats are private to this browser but may reset. Please don't upload confidential documents.</span></span>` : ""}
    </div>
    <p class="label section-label">How it works</p>
    <div class="steps">${STEPS.map(([t, d], i) => `<div class="step"><span class="num">${i + 1}</span><div><b>${t}</b><span>${d}</span></div></div>`).join("")}</div>
    <p class="label section-label">What you can do</p>
    <div class="features">${FEATURES.map(([ic, t, d]) => `<div class="feature"><span class="f-icon">${icon(ic)}</span><b>${t}</b><span>${d}</span></div>`).join("")}</div>
  </div>`;
  $("[data-act=upload]", log).onclick = () => $("#file").click();
}

function renderSignIn() {
  log.innerHTML = `<div class="welcome">
    <div class="hero">
      <svg class="logo" aria-hidden="true"><use href="#logo"/></svg>
      <h2>Chat with any document,<br><em>get answers you can trust.</em></h2>
      <p>Sign in with your Google account to upload documents and ask questions. Your chats are private to your account.</p>
      <div class="gsi-slot" id="gsiButton"></div>
      <span class="signin-note">We only use your name, email and profile picture.</span>
    </div>
    <p class="label section-label">How it works</p>
    <div class="steps">${STEPS.map(([t, d], i) => `<div class="step"><span class="num">${i + 1}</span><div><b>${t}</b><span>${d}</span></div></div>`).join("")}</div>
    <p class="label section-label">What you can do</p>
    <div class="features">${FEATURES.map(([ic, t, d]) => `<div class="feature"><span class="f-icon">${icon(ic)}</span><b>${t}</b><span>${d}</span></div>`).join("")}</div>
  </div>`;
  mountGoogleButton();
}

let gsiLoading = null;
function loadGoogleScript() {
  if (window.google?.accounts?.id) return Promise.resolve();
  if (!gsiLoading) gsiLoading = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = "https://accounts.google.com/gsi/client"; s.async = true;
    s.onload = resolve; s.onerror = () => { gsiLoading = null; reject(new Error("Couldn't load Google sign-in")); };
    document.head.appendChild(s);
  });
  return gsiLoading;
}

let gsiReady = false;
async function mountGoogleButton() {
  const slot = $("#gsiButton");
  if (!slot) return;
  try { await loadGoogleScript(); }
  catch (e) { slot.innerHTML = `<p class="error">Couldn't load Google sign-in. Check your connection and reload.</p>`; return; }
  if (!gsiReady) {
    google.accounts.id.initialize({ client_id: state.config.google_client_id, callback: onGoogleCredential, ux_mode: "popup", auto_select: false });
    gsiReady = true;
  }
  google.accounts.id.renderButton(slot, {
    theme: document.documentElement.dataset.mode === "dark" ? "filled_black" : "outline",
    size: "large", shape: "pill", text: "continue_with", logo_alignment: "left", width: 280,
  });
}

async function onGoogleCredential(resp) {
  try {
    const r = await api("/api/auth/google", { method: "POST", json: { credential: resp.credential } });
    state.config.user = r.user;
    renderUser();
    toast(`Signed in as ${r.user.name}`);
    await loadChats();
    if (state.chats.length) await openChat(state.chats[0].id); else newChat();
  } catch (e) { toast(e.message, 5000); }
}

function needsSignIn() { return !!state.config.auth && !state.config.user; }

function signedOut() {
  if (!state.config.auth) return;
  state.config.user = null; state.chats = []; state.chatId = null;
  state.chat = { title: "New chat", docs: [], messages: [], insights: null };
  renderUser(); renderAll();
}

async function signOut() {
  try { await api("/api/auth/logout", { method: "POST" }); } catch (e) {}
  try { window.google?.accounts?.id.disableAutoSelect(); } catch (e) {}
  signedOut();
  toast("Signed out");
}

function renderUser() {
  const u = state.config.user, card = $("#userCard");
  card.hidden = !u;
  if (!u) return;
  const pic = $("#userPic"), initial = $("#userInitial");
  pic.hidden = !u.picture; initial.hidden = !!u.picture;
  if (u.picture) { pic.src = u.picture; pic.onerror = () => { pic.hidden = true; initial.hidden = false; }; }
  initial.textContent = (u.name || u.email || "?").trim().charAt(0).toUpperCase();
  $("#userName").textContent = u.name;
  $("#userEmail").textContent = u.email;
}

function renderReady() {
  const c = state.chat, ins = c.insights;
  const loading = state.insightsLoading && !ins;
  const title = ins?.title || (c.docs.length === 1 ? c.docs[0].name : `${c.docs.length} documents ready`);
  const questions = ins?.questions?.length ? ins.questions : FALLBACK_QUESTIONS;
  const actions = c.docs.length > 1 ? [COMPARE_ACTION, ...QUICK_ACTIONS.slice(0, 5)] : QUICK_ACTIONS;
  log.innerHTML = `<div class="welcome">
    <div class="ready-head">
      <span class="doc-type">${icon("file")}<span></span></span>
      <h2></h2>
      <p></p>
    </div>
    <p class="label section-label">${ins ? "Suggested questions" : "Try asking"}</p>
    <div class="suggest-grid">${loading
      ? Array(4).fill(`<div class="suggest"><div class="skeleton" style="flex:1"><span style="width:90%"></span><span style="width:60%"></span></div></div>`).join("")
      : questions.map(qq => `<button class="suggest" data-q="${escapeHtml(qq)}">${icon("sparkles")}<span>${escapeHtml(qq)}</span></button>`).join("")}</div>
    <p class="label section-label">Or start with a quick action</p>
    <div class="features">${actions.map((a, i) => `<button class="feature" style="text-align:left" data-qa="${i}"><span class="f-icon">${icon(a.icon)}</span><b>${a.label}</b><span>${escapeHtml(a.prompt.split(":")[0].split(",")[0])}.</span></button>`).join("")}</div>
  </div>`;
  $(".doc-type span", log).textContent = loading ? "Reading your documents…" : (ins?.type || "Ready");
  $(".ready-head h2", log).textContent = title;
  $(".ready-head p", log).textContent = loading ? "Writing a quick overview and some questions worth asking." : (ins?.summary || "Ask anything about your documents, or try a suggestion below.");
  log.querySelectorAll("[data-q]").forEach(b => b.onclick = () => ask(b.dataset.q));
  log.querySelectorAll("[data-qa]").forEach(b => b.onclick = () => { const a = actions[+b.dataset.qa]; ask(a.prompt, a.label); });
}

function addUser(text) {
  const w = document.createElement("div"); w.className = "msg user";
  const b = document.createElement("div"); b.className = "bubble"; b.textContent = text;
  w.appendChild(b); log.appendChild(w);
  return w;
}

function addBot() {
  const w = document.createElement("div"); w.className = "msg bot";
  w.innerHTML = `<div class="avatar">${BOT_ICON}</div><div class="bubble typing"></div>`;
  log.appendChild(w);
  return w;
}

function finishBot(w, text, meta, isLast) {
  const bubble = $(".bubble", w);
  bubble.classList.remove("typing");
  bubble.innerHTML = renderMd(text || "");
  if (meta.citations?.length) {
    const box = document.createElement("div"); box.className = "cites";
    box.innerHTML = `<div class="cites-title">Sources</div>`;
    meta.citations.forEach((c, n) => {
      const d = document.createElement("div"); d.className = "cite";
      d.innerHTML = `<span class="src"><b>${n + 1}</b><span></span></span><q></q>`;
      $(".src span", d).textContent = `${c.title}${c.where ? " · " + c.where : ""}`;
      $("q", d).textContent = (c.text || "").trim().slice(0, 300);
      box.appendChild(d);
    });
    w.appendChild(box);
  }
  if (!text) return;
  const actions = document.createElement("div"); actions.className = "msg-actions";
  actions.innerHTML = `<button class="icon-btn" data-a="copy" title="Copy answer" aria-label="Copy answer">${icon("copy")}</button>`
    + ("speechSynthesis" in window ? `<button class="icon-btn" data-a="speak" title="Read aloud" aria-label="Read aloud">${icon("volume")}</button>` : "")
    + (isLast ? `<button class="icon-btn" data-a="retry" title="Regenerate answer" aria-label="Regenerate answer">${icon("refresh")}</button>` : "");
  w.appendChild(actions);
  $("[data-a=copy]", actions).onclick = async e => {
    try { await navigator.clipboard.writeText(bubble.innerText); toast("Answer copied"); } catch (err) { toast("Couldn't copy"); }
    const btn = e.currentTarget; btn.innerHTML = icon("check"); setTimeout(() => btn.innerHTML = icon("copy"), 1500);
  };
  const sp = $("[data-a=speak]", actions);
  if (sp) sp.onclick = () => speak(bubble.innerText, sp);
  const rt = $("[data-a=retry]", actions);
  if (rt) rt.onclick = retry;
  if (isLast && meta.followups?.length) {
    const f = document.createElement("div"); f.className = "followups";
    f.innerHTML = `<div class="fu-title">${icon("sparkles")}Ask next</div>`;
    meta.followups.forEach(t => {
      const c = document.createElement("button"); c.className = "chip"; c.innerHTML = icon("arrowRight") + "<span></span>";
      $("span", c).textContent = t; c.onclick = () => ask(t); f.appendChild(c);
    });
    w.appendChild(f);
  }
}

function renderPanel() {
  const c = state.chat, docs = c.docs;
  $("#docCount").textContent = docs.length ? plural(docs.length, "file") : "";
  $("#formats").textContent = (state.config.images ? "PDF, Word, text or images" : "PDF, Word or text files")
    + (state.config.max_mb ? ` · up to ${state.config.max_mb} MB` : "");

  const ul = $("#docs"); ul.innerHTML = "";
  if (!docs.length) ul.innerHTML = `<li style="border:0;background:none;padding:0"><p class="docs-empty">No documents in this chat yet.</p></li>`;
  for (const d of docs) {
    const ext = (d.name.split(".").pop() || "doc").slice(0, 4).toUpperCase();
    const meta = d.kind === "image" ? `Image · ${fmtSize(d.size)}`
      : [d.pages ? plural(d.pages, "page") : "", d.words != null ? `${fmtNum(d.words)} words` : fmtSize(d.size)].filter(Boolean).join(" · ");
    const li = document.createElement("li");
    li.innerHTML = `<span class="badge">${escapeHtml(ext)}</span><span class="d-text"><div class="d-name"></div><div class="d-meta">${meta}</div></span>
      <button class="icon-btn" title="Remove" aria-label="Remove document">${icon("x")}</button>`;
    $(".d-name", li).textContent = d.name; $(".d-name", li).title = d.name;
    $("button", li).onclick = () => removeDoc(d.id);
    ul.appendChild(li);
  }

  const box = $("#insight"), ins = c.insights;
  const head = (extra = "") => `<div class="insight-head"><span class="label">${icon("sparkles")}AI overview</span>${extra}</div>`;
  if (!docs.length) {
    box.innerHTML = head() + `<p class="insight-empty">Upload a document and DocChat will write a quick overview here: what it is, its key topics, and questions worth asking.</p>`;
  } else if (state.insightsLoading) {
    box.innerHTML = head() + `<div class="skeleton"><span style="width:40%"></span><span style="width:85%"></span><span style="width:95%"></span><span style="width:70%"></span><span style="width:55%"></span></div>`;
  } else if (ins) {
    box.innerHTML = head(`<button class="icon-btn" data-a="regen" title="Refresh overview" aria-label="Refresh overview" style="width:28px;height:28px">${icon("refresh")}</button>`)
      + `${ins.type ? `<span class="i-type"></span>` : ""}<p class="i-title"></p><p class="i-summary"></p><div class="topics"></div>`;
    if (ins.type) $(".i-type", box).textContent = ins.type;
    $(".i-title", box).textContent = ins.title;
    $(".i-summary", box).textContent = ins.summary;
    for (const t of ins.topics || []) {
      const b = document.createElement("button"); b.className = "topic"; b.textContent = t; b.title = `Ask about ${t}`;
      b.onclick = () => ask(`Tell me about "${t}" in these documents.`, `Tell me about ${t}`);
      $(".topics", box).appendChild(b);
    }
    $("[data-a=regen]", box).onclick = generateInsights;
  } else {
    box.innerHTML = head() + `<p class="insight-empty"></p><button class="btn" data-a="regen" style="margin-top:10px">${icon("sparkles")}${state.insightsError ? "Try again" : "Generate overview"}</button>`;
    $(".insight-empty", box).textContent = state.insightsError || "Get a quick summary, key topics and suggested questions.";
    $("[data-a=regen]", box).onclick = generateInsights;
  }

  const actions = docs.length > 1 ? [COMPARE_ACTION, ...QUICK_ACTIONS] : QUICK_ACTIONS;
  const grid = $("#actions"); grid.innerHTML = "";
  actions.forEach(a => {
    const b = document.createElement("button");
    b.className = "qa" + (a.wide ? " wide" : ""); b.disabled = !docs.length || state.busy;
    b.innerHTML = `<span class="q-icon">${icon(a.icon)}</span><span>${a.label}</span>`;
    b.title = docs.length ? a.prompt : "Add a document first";
    b.onclick = () => { ask(a.prompt, a.label); closeDrawers(); };
    grid.appendChild(b);
  });

  const words = docs.reduce((s, d) => s + (d.words || 0), 0);
  $("#stats").innerHTML = [[docs.length, "Files"], [words ? fmtNum(words) : "–", "Words"], [words ? Math.max(1, Math.round(words / 230)) : "–", "Min read"]]
    .map(([v, l]) => `<div class="stat"><b>${v}</b><span>${l}</span></div>`).join("");
}

function updateComposer() {
  const hasDocs = state.chat.docs.length > 0;
  const narrow = innerWidth < 560;
  if (needsSignIn()) { q.placeholder = "Sign in to start chatting"; q.disabled = true; send.disabled = true; return; }
  q.disabled = false;
  q.placeholder = hasDocs ? (narrow ? "Ask anything…" : "Ask anything about your documents…") : (narrow ? "Add a document first…" : "Upload a document, then ask anything…");
  if (state.busy) {
    send.disabled = false; send.classList.add("stop"); send.innerHTML = icon("stop"); send.setAttribute("aria-label", "Stop");
  } else {
    send.classList.remove("stop"); send.innerHTML = icon("arrowUp"); send.setAttribute("aria-label", "Send");
    send.disabled = !hasDocs || !q.value.trim();
  }
  document.querySelectorAll("#styles button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.style === state.style)));
}

// ------------------------------------------------------------------ asking
async function ask(question, display = question, style = state.style) {
  if (state.busy) return;
  if (needsSignIn()) { toast("Sign in with Google first"); return; }
  if (!state.chat.docs.length) { toast("Add a document first"); $("#file").click(); return; }
  const cid = state.chatId;
  if (!state.chat.messages.length) log.innerHTML = "";
  log.querySelectorAll(".followups, [data-a=retry]").forEach(el => el.remove());
  addUser(display);
  const bot = addBot(), bubble = $(".bubble", bot);
  log.scrollTop = log.scrollHeight;

  state.busy = true; state.controller = new AbortController();
  updateComposer(); renderPanel();
  let raw = "", meta = { citations: [], followups: [] }, failed = null, frame = 0;
  const paint = () => { bubble.classList.toggle("typing", !raw); bubble.innerHTML = raw ? renderMd(raw + "\u0002") : ""; };
  const schedule = () => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      const nearBottom = log.scrollHeight - log.scrollTop - log.clientHeight < 120;
      paint(); if (nearBottom) log.scrollTop = log.scrollHeight;
    });
  };
  try {
    const r = await fetch(`/api/chats/${cid}/ask`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, display, style }), signal: state.controller.signal,
    });
    if (!r.ok || !r.body) { const d = await r.json().catch(() => ({})); throw new Error(d.error || "Request failed"); }
    const reader = r.body.getReader(), dec = new TextDecoder();
    let buf = "";
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true });
      let i;
      while ((i = buf.indexOf("\n\n")) >= 0) {
        const line = buf.slice(0, i); buf = buf.slice(i + 2);
        if (!line.startsWith("data: ")) continue;
        const ev = JSON.parse(line.slice(6));
        if (ev.type === "text") { raw += ev.text; schedule(); }
        else if (ev.type === "cite") { raw += `\u0001${ev.n}\u0001`; schedule(); }
        else if (ev.type === "error") failed = ev.text;
        else if (ev.type === "done") meta = { citations: ev.citations || [], followups: ev.followups || [] };
      }
    }
  } catch (e) {
    if (e.name === "AbortError") { if (raw) raw += "\n\n_(Stopped.)_"; }
    else failed = e instanceof TypeError ? "Can't reach the DocChat server. Make sure it's running, then reload the page." : e.message;
  } finally {
    if (frame) cancelAnimationFrame(frame);
    state.busy = false; state.controller = null;
    if (cid === state.chatId) {
      finishBot(bot, raw, meta, true);
      if (failed) {
        const e = document.createElement("div"); e.className = "error"; e.textContent = failed; bot.appendChild(e);
        if (!raw && !q.value && display === question) q.value = question;  // let them resend a typed question
      } else if (raw) {
        state.chat.messages.push({ role: "user", display }, { role: "assistant", display: raw, meta });
      }
      updateComposer(); renderPanel(); refreshChatMeta(); refreshQuota();
    }
  }
}

function stopAnswer() { if (state.controller) state.controller.abort(); }

async function retry() {
  if (state.busy || !state.chatId) return;
  try {
    const r = await api(`/api/chats/${state.chatId}/undo`, { method: "POST" });
    state.chat.messages.splice(-2);
    const msgs = log.querySelectorAll(".msg");
    msgs[msgs.length - 1]?.remove(); msgs[msgs.length - 2]?.remove();
    ask(r.question, r.display, r.style);
  } catch (e) { toast(e.message); }
}

let speakingBtn = null;
function speak(text, btn) {
  const wasMe = speakingBtn === btn;
  speechSynthesis.cancel();
  if (speakingBtn) speakingBtn.classList.remove("on");
  speakingBtn = null;
  if (wasMe) return;
  const u = new SpeechSynthesisUtterance(text);
  u.onend = u.onerror = () => { btn.classList.remove("on"); if (speakingBtn === btn) speakingBtn = null; };
  btn.classList.add("on"); speakingBtn = btn;
  speechSynthesis.speak(u);
}

// ------------------------------------------------------------------ daily free-question counter (public site)
function renderQuota() {
  const { limit, remaining } = state.config;
  const box = $("#quota");
  box.hidden = !limit;
  if (!limit) return;
  $("#quotaText").innerHTML = `<b>${remaining}</b> of ${limit} free questions left today`;
  $("#quotaBar").style.width = `${Math.round((remaining / limit) * 100)}%`;
  box.classList.toggle("low", remaining <= Math.ceil(limit / 5));
}

async function refreshQuota() {
  if (!state.config.limit) return;
  try { state.config = await api("/api/config"); renderQuota(); } catch (e) {}
}

// ------------------------------------------------------------------ drawers (narrow screens)
function openDrawer(el) { el.classList.add("open"); $("#scrim").classList.add("show"); }
function closeDrawers() { $("#sidebar").classList.remove("open"); $("#panel").classList.remove("open"); $("#scrim").classList.remove("show"); }

// ------------------------------------------------------------------ wiring
function setTheme(name) { savePref("docchat-theme-v2", name); applyAppearance(); syncAppearanceControls(); }
function setMode(mode) { savePref("docchat-mode", mode); applyAppearance(); syncAppearanceControls(); }
function syncAppearanceControls() {
  const root = document.documentElement;
  document.querySelectorAll(".swatch").forEach(s => s.setAttribute("aria-checked", String(s.dataset.theme === root.dataset.theme)));
  document.querySelectorAll("#modeToggle button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.mode === root.dataset.modePref)));
}

function wire() {
  document.querySelectorAll("[data-icon]").forEach(el => el.outerHTML = icon(el.dataset.icon));
  document.querySelectorAll(".swatch").forEach(s => s.onclick = () => setTheme(s.dataset.theme));
  document.querySelectorAll("#modeToggle button").forEach(b => b.onclick = () => setMode(b.dataset.mode));
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", syncAppearanceControls);
  syncAppearanceControls();
  document.querySelectorAll("#styles button").forEach(b => b.onclick = () => { state.style = b.dataset.style; savePref("docchat-style", state.style); updateComposer(); });

  $("#newChat").onclick = () => { newChat(); closeDrawers(); };
  $("#signOut").onclick = signOut;
  $("#search").oninput = e => { state.search = e.target.value; renderChatList(); };
  $("#openSidebar").onclick = () => openDrawer($("#sidebar"));
  $("#openPanel").onclick = () => openDrawer($("#panel"));
  $("#closePanel").onclick = closeDrawers;
  $("#scrim").onclick = closeDrawers;
  $("#attachBtn").onclick = () => $("#file").click();
  $("#exportBtn").onclick = () => { if (state.chatId) { const a = document.createElement("a"); a.href = `/api/chats/${state.chatId}/export`; a.download = ""; a.click(); toast("Chat exported"); } };
  $("#deleteBtn").onclick = () => state.chatId && deleteChat(state.chatId, state.chat.title);

  const title = $("#chatTitle");
  title.onkeydown = e => { if (e.key === "Enter") { e.preventDefault(); title.blur(); } if (e.key === "Escape") { title.textContent = state.chat.title; title.blur(); } };
  title.onblur = async () => {
    const t = title.textContent.trim();
    if (!state.chatId || !t || t === state.chat.title) { title.textContent = state.chat.title || "New chat"; return; }
    try { await api(`/api/chats/${state.chatId}`, { method: "PATCH", json: { title: t } }); state.chat.title = t; loadChats(); toast("Chat renamed"); } catch (e) { toast(e.message); }
  };

  $("#file").onchange = e => { uploadFiles(e.target.files); e.target.value = ""; };
  const drop = $("#drop");
  ["dragenter", "dragover"].forEach(t => drop.addEventListener(t, e => { e.preventDefault(); drop.classList.add("over"); }));
  ["dragleave", "drop"].forEach(t => drop.addEventListener(t, () => drop.classList.remove("over")));

  // Drop files anywhere on the page
  let depth = 0;
  const overlay = $("#dropOverlay");
  const hasFiles = e => [...(e.dataTransfer?.types || [])].includes("Files");
  window.addEventListener("dragenter", e => { if (hasFiles(e)) { depth++; overlay.classList.add("show"); } });
  window.addEventListener("dragleave", e => { if (hasFiles(e) && --depth <= 0) { depth = 0; overlay.classList.remove("show"); } });
  window.addEventListener("dragover", e => { if (hasFiles(e)) e.preventDefault(); });
  window.addEventListener("drop", e => { if (!hasFiles(e)) return; e.preventDefault(); depth = 0; overlay.classList.remove("show"); uploadFiles(e.dataTransfer.files); });

  $("#form").addEventListener("submit", e => {
    e.preventDefault();
    if (state.busy) return stopAnswer();
    const text = q.value.trim();
    if (!text) return;
    q.value = ""; q.style.height = "";
    ask(text);
  });
  q.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); $("#form").requestSubmit(); } });
  q.addEventListener("input", () => { q.style.height = "auto"; q.style.height = q.scrollHeight + "px"; updateComposer(); });

  document.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); newChat(); }
    else if (e.key === "Escape") { closeDrawers(); if (state.busy) stopAnswer(); }
    else if (e.key === "/" && !/INPUT|TEXTAREA/.test(document.activeElement.tagName) && !document.activeElement.isContentEditable) { e.preventDefault(); q.focus(); }
  });
}

async function init() {
  wire();
  state.chat = { title: "New chat", docs: [], messages: [], insights: null };  // rendered once we know which chat to show
  try {
    state.config = await api("/api/config");
    renderQuota(); renderUser();
    $("#providerName").textContent = state.config.label;
    $("#providerName").title = state.config.label;
  } catch (e) { $("#providerName").textContent = "Server not reachable"; }
  if (needsSignIn()) { renderAll(); addEventListener("resize", () => updateComposer()); return; }
  await loadChats();
  if (state.chats.length) await openChat(state.chats[0].id);
  else renderAll();
  addEventListener("resize", () => updateComposer());
}

init();
