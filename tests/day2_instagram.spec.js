import { test, expect } from '@playwright/test';

test('Instagram homepage login button verification', async ({ page }) => {

  await page.goto('https://www.instagram.com/');

  await expect(
    page.getByRole('button', { name: 'Log in', exact: true })
  ).toBeVisible();

  await page.waitForTimeout(3000);

});
