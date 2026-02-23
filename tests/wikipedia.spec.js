import { test, expect } from '@playwright/test';

test('Wikipedia search demo', async ({ page }) => {

  await page.goto('https://www.wikipedia.org/');

  await page.fill('input[name="search"]', 'automation testing');

  await page.keyboard.press('Enter');

  await expect(page.locator('#firstHeading')).toBeVisible();

  await page.waitForTimeout(4000);

});
