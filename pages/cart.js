const { expect } = require('@playwright/test');

exports.PageCart = class PageCart {
  /**
  * @param {import('@playwright/test').Page} page
  */
  
  constructor(page) {
    this.page = page;
    this.listCartItem = page.locator('[data-test="inventory-item"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    // this.removeButton = page.locator('.cart_button');
  }
  
  async removeRandomItemFromCart() {
    const items = await this.listCartItem.all();
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];
    const removeButton =  randomItem.locator('.btn.cart_button');
    await removeButton.click();
  }
  
  async checkout() {
    await this.checkoutButton.click();
  }
};