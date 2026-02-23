import { test, expect } from '@playwright/test';

test('Facebook Login Fill Demo', async ({ page }) => {

  await page.goto('https://www.facebook.com/');

  await page.waitForSelector('#email');

  await page.fill('#email', 'testuser');
  await page.fill('#pass', 'testpass');

  await expect(page.locator('#email')).toHaveValue('testuser');

  // click login button
  await page.click('button[name="login"]');

  await page.waitForTimeout(5000);

});
