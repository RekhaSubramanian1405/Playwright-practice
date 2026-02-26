const { test } = require('@playwright/test');
const LoginPage = require('../pages/Day8_Login');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

test.describe('Day 12 - Mini Project (Client Level)', () => {

  test('Flow 1 - Complete Purchase Flow', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');

    await inventory.validateInventoryPage();
    await inventory.addFirstItem();
    await inventory.openCart();

    await cart.validateCartItemCount(1);
    await cart.clickCheckout();

    await checkout.enterDetails('Rekha', 'S', '600001');
    await checkout.finishOrder();
    await checkout.validateOrderSuccess();
  });

  test('Flow 2 - Cart Modification & Validation Flow', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');

    await inventory.validateInventoryPage();

    await inventory.addFirstItem();
    await inventory.addSecondItem();
    await inventory.validateCartCount(2);

    await inventory.openCart();
    await cart.validateCartItemCount(2);

    await cart.removeFirstItem();
    await cart.validateCartItemCount(1);

    await inventory.logout();
  });

});