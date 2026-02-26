import { test, expect } from '@playwright/test';

test('Login - Valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  await page.click('#login-button');

  await page.waitForURL('**/inventory.html');

  await expect(page.locator('.inventory_list')).toBeVisible();
});

test('Positive Scenario - Products visible after login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  await page.click('#login-button');

  await expect(page.locator('.inventory_list')).toBeVisible();
});

test('Negative Scenario - Invalid login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'wrongUser');
  await page.fill('#password', 'wrongPass');

  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});