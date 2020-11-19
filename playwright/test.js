const playwright = require("playwright");

(async () => {
  const browser = await playwright["chromium"].launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // intercept call to data.json
  await page.route("http://localhost:8000/data.json", async (route) => {
    await route.fulfill({
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: "playwright caught ya!" }),
    });
  });

  // load dummy website
  await page.goto("http://localhost:8000/");
})();
