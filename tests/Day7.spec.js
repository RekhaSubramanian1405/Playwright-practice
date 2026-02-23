import { test, expect } from '@playwright/test';

test('Login - Valid credentials', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.fill('#username', 'validUser');
  await page.fill('#password', 'validPass');
  await page.click('#loginBtn');

  await expect(page).toHaveURL(/dashboard/);
});

test('Positive Scenario - Dashboard visible', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.fill('#username', 'validUser');
  await page.fill('#password', 'validPass');
  await page.click('#loginBtn');

  await expect(page.locator('h1')).toHaveText('Dashboard');
});

test('Negative Scenario - Invalid login', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.fill('#username', 'wrongUser');
  await page.fill('#password', 'wrongPass');
  await page.click('#loginBtn');

  await expect(page.locator('.error-message'))
    .toHaveText('Invalid credentials');
});