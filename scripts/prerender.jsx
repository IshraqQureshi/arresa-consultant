// Renders <App/> to static markup and inlines it into the built index.html,
// so the browser paints real content immediately instead of waiting for the
// JS bundle to download/parse/execute before anything appears on screen.
// main.jsx then hydrates over this markup instead of mounting from empty.
import { readFileSync, writeFileSync } from "node:fs";
import { renderToString } from "react-dom/server";
import App from "../src/App.jsx";

const distIndexPath = new URL("../dist/index.html", import.meta.url);
const html = renderToString(<App />);
const template = readFileSync(distIndexPath, "utf-8");

if (!template.includes('<div id="root"></div>')) {
  throw new Error("prerender: could not find the empty #root mount point in dist/index.html");
}

const result = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
writeFileSync(distIndexPath, result);
console.log("Prerendered App markup into dist/index.html");
