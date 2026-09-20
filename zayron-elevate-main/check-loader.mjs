import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", (e) => errors.push("PAGEERROR: " + e.message));
page.on("console", (m) => { if (m.type() === "error") errors.push("CONSOLE: " + m.text()); });

const t0 = Date.now();
await page.goto("http://localhost:8080/", { waitUntil: "domcontentloaded" });

const samples = [];
for (let i = 0; i < 40; i++) {
  const s = await page.evaluate(() => {
    const loader = [...document.querySelectorAll("div")].find((el) => {
      const st = getComputedStyle(el);
      return st.position === "fixed" && st.zIndex === "9999";
    });
    if (!loader) return { present: false };

    // first scaleX div in document order = the top progress fill (3px track)
    const fill = loader.querySelector("div[style*='scaleX']");
    const tf = fill ? getComputedStyle(fill).transform : null;
    const scaleX = tf && tf.startsWith("matrix") ? parseFloat(tf.slice(7).split(",")[0]) : null;

    const img = loader.querySelector("img");
    const spans = [...loader.querySelectorAll("span")];
    const visibleLetters = spans.filter((sp) => {
      const st = getComputedStyle(sp);
      return parseFloat(st.opacity) > 0.5 && sp.textContent.trim().length === 1;
    }).length;

    const bg = getComputedStyle(loader).backgroundColor;

    return {
      present: true,
      barScaleX: scaleX === null ? null : Math.round(scaleX * 100),
      logoComplete: img ? img.complete : "no-img",
      lettersVisible: visibleLetters,
      darkTheme: bg === "rgb(5, 5, 6)",
    };
  });
  samples.push({ t: Date.now() - t0, ...s });
  if (!s.present) break;
  await page.waitForTimeout(150);
}

console.log("t(ms) | bar% | logo | letters | darkBG");
samples.forEach((s) => {
  if (!s.present) return console.log(`${String(s.t).padStart(5)} | loader GONE`);
  console.log(
    `${String(s.t).padStart(5)} | ${String(s.barScaleX).padStart(4)} | ${String(s.logoComplete).padStart(5)} | ${String(s.lettersVisible).padStart(7)} | ${s.darkTheme}`
  );
});

const last = samples[samples.length - 1];
console.log("\ntotal loader time (ms):", last.t);
console.log("dark theme applied:", last.darkTheme);
console.log("pageErrors:", errors.length ? errors : "none");
await browser.close();
