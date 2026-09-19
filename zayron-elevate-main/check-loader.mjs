import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
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

    // progress bar = the red gradient div inside the 3px track
    const track = loader.querySelector(":scope > div");
    const fill = track ? track.querySelector("div") : null;
    const fillTf = fill ? getComputedStyle(fill).transform : null;
    const scaleX = fillTf && fillTf.startsWith("matrix") ? parseFloat(fillTf.slice(7).split(",")[0]) : null;

    const img = loader.querySelector("img");
    const spans = [...loader.querySelectorAll("span")];
    const visibleLetters = spans.filter((sp) => {
      const st = getComputedStyle(sp);
      return parseFloat(st.opacity) > 0.5 && sp.textContent.trim().length === 1;
    }).length;

    return {
      present: true,
      barScaleX: scaleX === null ? null : Math.round(scaleX * 100),
      logoComplete: img ? img.complete : "no-img",
      logoNatural: img ? img.naturalWidth : null,
      lettersVisible: visibleLetters,
    };
  });
  samples.push({ t: Date.now() - t0, ...s });
  if (!s.present) break;
  await page.waitForTimeout(150);
}

console.log("t(ms) | bar% | logoLoaded | lettersShown");
samples.forEach((s) => {
  if (!s.present) return console.log(`${String(s.t).padStart(5)} | loader GONE`);
  console.log(
    `${String(s.t).padStart(5)} | ${String(s.barScaleX).padStart(4)} | ${String(s.logoComplete).padStart(10)} (${s.logoNatural}) | ${s.lettersVisible}`
  );
});

await browser.close();