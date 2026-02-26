const { test } = require('@playwright/test');
const LoginPage = require('../pages/Day10_Login');

test.describe('Day 10 - Stability Check (Practice Test Automation)', () => {

  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Valid login should succeed', async () => {
    await loginPage.login('student', 'Password123');
    await loginPage.assertLoginSuccess();
  });

  test('Invalid password should fail', async () => {
    await loginPage.login('student', 'wrongPass');
    await loginPage.assertLoginFailure();
  });

  test('Invalid username should fail', async () => {
    await loginPage.login('wrongUser', 'Password123');
    await loginPage.assertLoginFailure();
  });

  test('Empty fields should fail', async () => {
    await loginPage.login('', '');
    await loginPage.assertLoginFailure();
  });

});