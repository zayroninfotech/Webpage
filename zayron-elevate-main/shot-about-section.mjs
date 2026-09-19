import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));

await page.goto("http://localhost:8080/about", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await page.evaluate(async () => {
  const step = window.innerHeight / 2;
  for (let y = 0; y <= document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 100));
  }
});
await page.waitForTimeout(1500);

const report = await page.evaluate(() => {
  const out = {};
  const text = document.body.innerText;

  // copy checks
  const checks = [
    "Building Technology",
    "Creating",
    "Business Value",
    "What We Do",
    "Technology Built Around Your Business",
    "Explore Our Products",
    "Explore Our Services",
    "How We Work",
    "From Requirements to Reliable Solutions",
    "Understand",
    "Design",
    "Develop",
    "Validate",
    "Deliver & Support",
    "Our Core Values",
    "Let's Build a Smarter Tomorrow Together",
  ];
  out.missingCopy = checks.filter((c) => !text.toLowerCase().includes(c.toLowerCase()));

  // stepper rows: the 5 step titles should share one row on desktop
  const stepTitles = ["Understand", "Design", "Develop", "Validate", "Deliver & Support"];
  out.stepper = stepTitles.map((t) => {
    const h3 = [...document.querySelectorAll("h3")].find((el) => el.textContent.trim() === t);
    if (!h3) return { title: t, found: false };
    const r = h3.getBoundingClientRect();
    return { title: t, found: true, top: Math.round(r.top), left: Math.round(r.left) };
  });

  // images inside the approach section
  const section = [...document.querySelectorAll("section")].find((s) =>
    s.innerText.includes("From Requirements to Reliable Solutions")
  );
  const imgs = section ? [...section.querySelectorAll("img")] : [];
  out.approachImages = imgs.map((i) => ({
    src: i.getAttribute("src").split("/").pop(),
    natural: i.naturalWidth,
    w: Math.round(i.getBoundingClientRect().width),
    h: Math.round(i.getBoundingClientRect().height),
  }));

  // badge position sanity
  const badge = section ? [...section.querySelectorAll("p")].find((p) => p.textContent.trim() === "Collaboration") : null;
  out.badgeFound = !!badge;

  out.pageHeight = document.body.scrollHeight;
  out.horizontalOverflow = document.documentElement.scrollWidth > window.innerWidth;
  out.scrollWidth = document.documentElement.scrollWidth;
  return out;
});

console.log(JSON.stringify(report, null, 2));
console.log("pageErrors:", errors.length ? errors : "none");

// mobile check: no horizontal overflow
const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto("http://localhost:8080/about", { waitUntil: "networkidle" });
await mobile.waitForTimeout(1500);
const m = await mobile.evaluate(() => ({
  scrollWidth: document.documentElement.scrollWidth,
  innerWidth: window.innerWidth,
  overflows: document.documentElement.scrollWidth > window.innerWidth,
}));
console.log("mobile:", JSON.stringify(m));
await mobile.close();
await browser.close();