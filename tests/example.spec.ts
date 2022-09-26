import { test } from '../fixtures';
import { expect } from '@playwright/test';
import { chromium } from 'playwright'; 

test.describe('feature foo', () => {
test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {

  console.log("Page in test file => "+page);
  //const page = await vBrowser.newPage();
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.locator('text=Get Started');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
});
