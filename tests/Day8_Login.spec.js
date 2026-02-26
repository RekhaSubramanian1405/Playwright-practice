const { test } = require('@playwright/test');
const LoginPage = require('../pages/Day8_Login.js');

test.describe('Login Scenarios', () => {

  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Login - Valid credentials', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.assertInventoryVisible();
  });

  test('Positive Scenario - Products visible after login', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.assertInventoryVisible();
  });

  test('Negative Scenario - Invalid login', async () => {
    await loginPage.login('wrongUser', 'wrongPass');
    await loginPage.assertErrorVisible();
  });

});