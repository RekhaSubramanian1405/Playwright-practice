// @ts-check
import { test, expect } from '@playwright/test';

test('Login Flow Automation - Refactored Locators', async ({ page }) => {
  // 1 Go to the demo login page
  await page.goto('https://www.saucedemo.com/');

  // 2 Fill username and password using stable locators (IDs are very stable)
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // 3️ Click login button using stable locator
  await page.click('#login-button');

  // 4️ Assertions - verify multiple things to improve test quality

  //  Assertion 1: Inventory page container is visible
  const inventoryContainer = page.locator('.inventory_list');
  await expect(inventoryContainer).toBeVisible();

  // Assertion 2: First product has the correct name (verifying content)
  const firstProduct = inventoryContainer.locator('.inventory_item_name').first();
  await expect(firstProduct).toHaveText('Sauce Labs Backpack');

  // Optional Assertion 3: URL contains /inventory (verifying navigation)
  await expect(page).toHaveURL(/.*inventory/);
});
