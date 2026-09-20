import { chromium } from "playwright";

const base = "http://localhost:8080";
const browser = await chromium.launch();
const errors = [];

const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on("pageerror", (e) => errors.push("PAGEERROR: " + e.message));
page.on("console", (m) => { if (m.type() === "error") errors.push("CONSOLE: " + m.text()); });

await page.goto(base + "/services", { waitUntil: "networkidle" });
await page.waitForTimeout(2000);

// scroll through for whileInView animations
await page.evaluate(async () => {
  const step = window.innerHeight / 2;
  for (let y = 0; y <= document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 90));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(1500);

const report = await page.evaluate(() => {
  const out = {};
  const text = document.body.innerText;
  out.missingCopy = [
    "Our", "Services",
    "Technology Solutions Built for Business",
    "Application Development",
    "Testing & Quality Assurance",
    "CSV & Compliance",
    "AI Products &",
    "Business Value",
    "Digital &",
  ].filter((c) => !text.includes(c));

  // every service section present
  out.sections = document.querySelectorAll("#services-list > div > div").length;

  // feature cards visible (have non-zero size)
  const cards = [...document.querySelectorAll("#services-list .group")];
  out.featureCards = cards.length;
  out.featureCardsSized = cards.filter((c) => {
    const r = c.getBoundingClientRect();
    return r.width > 50 && r.height > 20;
  }).length;

  // photo cards
  const photos = [...document.querySelectorAll("#services-list img")];
  out.photoCount = photos.length;
  out.photosLoaded = photos.filter((i) => i.complete && i.naturalWidth > 0).length;

  // heading sizes
  const h2s = [...document.querySelectorAll("#services-list h2")];
  out.h2Count = h2s.length;
  out.h2Sizes = h2s.map((h) => parseFloat(getComputedStyle(h).fontSize)).filter((s, i) => i % 2 === 0).slice(0, 5);

  // icon tiles: gradient square 64px
  const tiles = [...document.querySelectorAll("#services-list div")].filter((d) => {
    const r = d.getBoundingClientRect();
    return Math.abs(r.width - 64) < 2 && Math.abs(r.height - 64) < 2;
  });
  out.iconTiles = tiles.length;

  // no horizontal overflow
  out.overflow = document.documentElement.scrollWidth > window.innerWidth;
  out.pageHeight = document.body.scrollHeight;
  return out;
});

console.log(JSON.stringify(report, null, 1));
console.log("errors:", errors.length ? errors : "none");
await browser.close();