import { test, expect } from '@playwright/test';

test('Demo login form fill and click', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');

  // ✅ click login
  await page.click('button[type="submit"]');

  // ✅ assertion after click
  await expect(page.locator('.flash.success')).toBeVisible();

  await page.waitForTimeout(4000);

});
