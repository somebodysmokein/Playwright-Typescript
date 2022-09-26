import { test } from '../fixtures'
import { expect } from '@playwright/test';
test.describe('feature foo', () => {
  test('test 1', async ({ page }) => {
    // Assertions use the expect API.
    await page.goto('https://www.duckduckgo.com');
    const element = await page.$('[name="q"]');
    await element.click();
    await element.type('BrowserStack');
    await element.press('Enter');
    await expect(page).toHaveTitle('BrowserStack at DuckDuckGo');
    console.log(page.title);
    //const title = await page.title('');
    //console.log(title);
    //expect(title).toEqual( 'BrowserStack at DuckDuckGo', 'Expected page title is incorrect!');
  });
});
