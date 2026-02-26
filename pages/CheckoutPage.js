const { expect } = require('@playwright/test');

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueBtn = page.locator('#continue');
    this.finishBtn = page.locator('#finish');
    this.successMessage = page.locator('.complete-header');
  }

  async enterDetails(fname, lname, zip) {
    await this.firstName.fill(fname);
    await this.lastName.fill(lname);
    await this.postalCode.fill(zip);
    await this.continueBtn.click();
  }

  async finishOrder() {
    await this.finishBtn.click();
  }

  async validateOrderSuccess() {
    await expect(this.successMessage).toHaveText('Thank you for your order!');
  }
}

module.exports = CheckoutPage;