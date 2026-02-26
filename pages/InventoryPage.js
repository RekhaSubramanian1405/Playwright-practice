const { expect } = require('@playwright/test');

class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryContainer = page.locator('.inventory_list');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.menuBtn = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  async validateInventoryPage() {
    await expect(this.inventoryContainer).toBeVisible();
  }

  async addFirstItem() {
    await this.page.locator('.inventory_item button').nth(0).click();
  }

  async addSecondItem() {
    await this.page.locator('.inventory_item button').nth(1).click();
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async logout() {
    await this.menuBtn.click();
    await this.logoutLink.click();
  }

  async validateCartCount(expectedCount) {
    const badge = this.page.locator('.shopping_cart_badge');
    await expect(badge).toHaveText(expectedCount.toString());
  }
}

module.exports = InventoryPage;