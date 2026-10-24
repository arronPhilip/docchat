// Color themes + light/dark mode. Loaded in <head> so the page never flashes the wrong colors.
const THEMES = {
  ocean: {
    name: "DocChat blue", display: '"Montserrat", "Segoe UI", sans-serif', displayWeight: 700,
    light: { bg: "#eef4f9", "bg-glow-1": "#d4e7f6", "bg-glow-2": "#d2eff1", "panel-solid": "#fbfdff", text: "#15304f", muted: "#66809a", accent: "#2f73b5", "accent-2": "#22aab5", "accent-soft": "#dcebf7", "accent-text": "#ffffff" },
    dark: { bg: "#0b1622", "bg-glow-1": "#0f2c48", "bg-glow-2": "#0b3a3e", "panel-solid": "#13202e", text: "#e5eef7", muted: "#8aa0b6", accent: "#5ea6e6", "accent-2": "#33c4cc", "accent-soft": "#163450", "accent-text": "#0b1622" },
  },
  terracotta: {
    name: "Terracotta", display: '"Instrument Serif", Georgia, serif', displayWeight: 400,
    light: { bg: "#f4efe8", "bg-glow-1": "#f6d9c4", "bg-glow-2": "#e3e6f4", "panel-solid": "#fffcf8", text: "#2a2622", muted: "#8a8178", accent: "#c8643b", "accent-2": "#e6a067", "accent-soft": "#f3dccf", "accent-text": "#ffffff" },
    dark: { bg: "#161412", "bg-glow-1": "#3a2418", "bg-glow-2": "#1d2133", "panel-solid": "#201d1a", text: "#efe9e2", muted: "#9a9088", accent: "#e08159", "accent-2": "#eab07a", "accent-soft": "#3d2a20", "accent-text": "#1a1512" },
  },
  forest: {
    name: "Forest", display: '"Instrument Serif", Georgia, serif', displayWeight: 400,
    light: { bg: "#f1f4ee", "bg-glow-1": "#d6e6cc", "bg-glow-2": "#efe6cf", "panel-solid": "#fbfcf8", text: "#1e2a1f", muted: "#727e6c", accent: "#3f7d4e", "accent-2": "#9db556", "accent-soft": "#dde9d6", "accent-text": "#ffffff" },
    dark: { bg: "#101511", "bg-glow-1": "#1c3321", "bg-glow-2": "#2c2a16", "panel-solid": "#18201a", text: "#e7eee4", muted: "#94a08f", accent: "#7cc38c", "accent-2": "#c8d67a", "accent-soft": "#213b28", "accent-text": "#101511" },
  },
  twilight: {
    name: "Twilight", display: '"Instrument Serif", Georgia, serif', displayWeight: 400,
    light: { bg: "#f3f1f8", "bg-glow-1": "#e0d6f6", "bg-glow-2": "#f6d8e8", "panel-solid": "#fdfcff", text: "#231d33", muted: "#7b748e", accent: "#6b4fd8", "accent-2": "#d55ca8", "accent-soft": "#e6dff9", "accent-text": "#ffffff" },
    dark: { bg: "#13111c", "bg-glow-1": "#2a1f4d", "bg-glow-2": "#3d1a35", "panel-solid": "#1c1929", text: "#ece8f6", muted: "#9d96b0", accent: "#a48cff", "accent-2": "#f07cc0", "accent-soft": "#2e2650", "accent-text": "#13111c" },
  },
  ink: {
    name: "Ink", display: '"Instrument Serif", Georgia, serif', displayWeight: 400,
    light: { bg: "#f4f4f3", "bg-glow-1": "#e6e6e4", "bg-glow-2": "#ededeb", "panel-solid": "#ffffff", text: "#111111", muted: "#707070", accent: "#111111", "accent-2": "#5a5a5a", "accent-soft": "#e8e8e6", "accent-text": "#ffffff" },
    dark: { bg: "#0b0b0b", "bg-glow-1": "#1b1b1b", "bg-glow-2": "#141414", "panel-solid": "#161616", text: "#f2f2f2", muted: "#9a9a9a", accent: "#f2f2f2", "accent-2": "#b5b5b5", "accent-soft": "#272727", "accent-text": "#0b0b0b" },
  },
};

function readPref(key, fallback) {
  try { return localStorage.getItem(key) || fallback; } catch (e) { return fallback; }
}

function applyAppearance() {
  let theme = readPref("docchat-theme-v2", "ocean");
  if (!THEMES[theme]) theme = "ocean";
  const mode = readPref("docchat-mode", "auto");
  const dark = mode === "dark" || (mode === "auto" && matchMedia("(prefers-color-scheme: dark)").matches);
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.dataset.mode = dark ? "dark" : "light";
  root.dataset.modePref = mode;
  const t = THEMES[theme];
  for (const [k, v] of Object.entries(t[dark ? "dark" : "light"])) root.style.setProperty("--" + k, v);
  root.style.setProperty("--display", t.display);
  root.style.setProperty("--display-weight", t.displayWeight);
}

applyAppearance();
matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyAppearance);
