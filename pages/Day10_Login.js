const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;

    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.submitBtn = page.locator('#submit');

    this.successMessage = page.locator('.post-title');
    this.errorMessage = page.locator('#error');
  }

  async goto() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    await expect(this.username).toBeVisible();
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.submitBtn.click();
  }

  async assertLoginSuccess() {
    await expect(this.page).toHaveURL(/logged-in-successfully/);
    await expect(this.successMessage).toHaveText('Logged In Successfully');
  }

  async assertLoginFailure() {
    await expect(this.errorMessage).toBeVisible();
  }
}

module.exports = LoginPage;