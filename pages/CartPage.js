const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.checkoutBtn = page.locator('#checkout');
  }

  async validateCartItemCount(count) {
    await expect(this.cartItems).toHaveCount(count);
  }

  async removeFirstItem() {
    await this.page.locator('.cart_button').first().click();
  }

  async clickCheckout() {
    await this.checkoutBtn.click();
  }
}

module.exports = CartPage;