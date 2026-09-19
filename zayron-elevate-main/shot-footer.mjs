import { chromium } from "playwright";

const base = "http://localhost:8080";
const browser = await chromium.launch();

// ── About page full screenshot ──
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on("pageerror", (e) => console.log("PAGEERROR:", e.message));
await page.goto(base + "/about", { waitUntil: "networkidle" });
await page.waitForTimeout(2500);
await page.evaluate(async () => {
  const step = window.innerHeight / 2;
  for (let y = 0; y <= document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 120));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(1500);
await page.screenshot({ path: "screenshots/about-desktop.png", fullPage: true });
console.log("saved screenshots/about-desktop.png");
await page.close();

// ── Footer captures ──
for (const [name, viewport] of [
  ["footer-desktop", { width: 1440, height: 900 }],
  ["footer-mobile", { width: 390, height: 844 }],
]) {
  const p = await browser.newPage({ viewport });
  await p.goto(base, { waitUntil: "networkidle" });
  await p.addStyleTag({ content: "header, .fixed.top-0 { display: none !important; }" });
  await p.waitForTimeout(2500);
  const footer = p.locator("footer");
  await footer.scrollIntoViewIfNeeded();
  await p.waitForTimeout(1000);
  await footer.screenshot({ path: `screenshots/${name}.png` });
  await p.close();
  console.log(`saved screenshots/${name}.png`);
}

await browser.close();
