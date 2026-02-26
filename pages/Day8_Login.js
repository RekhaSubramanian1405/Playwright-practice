const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;

    this.username = '#user-name';
    this.password = '#password';
    this.loginButton = '#login-button';
    this.inventoryList = '.inventory_list';
    this.errorMessage = '[data-test="error"]';
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.page.fill(this.username, username);
    await this.page.fill(this.password, password);
    await this.page.click(this.loginButton);
  }

  async assertInventoryVisible() {
    await expect(this.page.locator(this.inventoryList)).toBeVisible();
  }

  async assertErrorVisible() {
    await expect(this.page.locator(this.errorMessage)).toBeVisible();
  }
}

module.exports = LoginPage;