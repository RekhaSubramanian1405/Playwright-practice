const { test } = require('@playwright/test');
const LoginPage = require('../pages/Day8_Login.js');

test.describe('Login Test Scenarios', () => {

  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test.describe('Valid Login Tests', () => {

    test('Valid user should login successfully', async () => {
      await loginPage.login('standard_user', 'secret_sauce');
      await loginPage.assertInventoryVisible();
    });

  });

  test.describe('Invalid Login Tests', () => {

    test('Invalid username and password', async () => {
      await loginPage.login('wrongUser', 'wrongPass');
      await loginPage.assertErrorVisible();
    });

  });

  test.describe('Boundary Login Tests', () => {

    test('Empty username', async () => {
      await loginPage.login('', 'secret_sauce');
      await loginPage.assertErrorVisible();
    });

    test('Empty password', async () => {
      await loginPage.login('standard_user', '');
      await loginPage.assertErrorVisible();
    });

    test('Empty username and password', async () => {
      await loginPage.login('', '');
      await loginPage.assertErrorVisible();
    });

  });

});