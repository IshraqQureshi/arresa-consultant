// Renders <App/> to static markup and inlines it into the built index.html,
// so the browser paints real content immediately instead of waiting for the
// JS bundle to download/parse/execute before anything appears on screen.
// main.jsx then hydrates over this markup instead of mounting from empty.
//
// Then runs Beasties over the result to inline the above-the-fold ("critical")
// CSS directly into <head> and defer the rest of the stylesheet, so first
// paint doesn't wait on a render-blocking CSS request either.
import { fileURLToPath } from "node:url";
import { readFileSync, writeFileSync } from "node:fs";
import { renderToString } from "react-dom/server";
import Beasties from "beasties";
import App from "../src/App.jsx";

const distDir = fileURLToPath(new URL("../dist", import.meta.url));
const distIndexPath = `${distDir}/index.html`;

const html = renderToString(<App />);
const template = readFileSync(distIndexPath, "utf-8");

if (!template.includes('<div id="root"></div>')) {
  throw new Error("prerender: could not find the empty #root mount point in dist/index.html");
}

const withMarkup = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

const beasties = new Beasties({
  path: distDir,
  preload: "swap",
  compress: true,
  pruneSource: false,
});
const withCriticalCss = await beasties.process(withMarkup);

writeFileSync(distIndexPath, withCriticalCss);
console.log("Prerendered App markup + inlined critical CSS into dist/index.html");
