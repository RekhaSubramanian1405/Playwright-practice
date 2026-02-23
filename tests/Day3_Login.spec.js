// @ts-check
import { test, expect } from '@playwright/test';

test('Login Flow Automation - Sauce Demo', async ({ page }) => {
  // 1. Go to the demo login page
  await page.goto('https://www.saucedemo.com/');

  // 2. Fill username and password
  await page.fill('#user-name', 'standard_user'); // demo username
  await page.fill('#password', 'secret_sauce');   // demo password

  // 3. Click login button
  await page.click('#login-button');

  // 4. Verify successful login indicator
  // Playwright automatically waits for this element
  await expect(page.locator('.inventory_list')).toBeVisible();
});
