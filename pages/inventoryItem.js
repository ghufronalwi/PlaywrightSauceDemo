const { expect } = require('@playwright/test');

exports.PageInventoryItem = class PageInventoryItem {
  /**
  * @param {import('@playwright/test').Page} page
  */
  constructor(page) {
    this.page = page;
    this.buttonAddToCart = page.locator('[data-test="add-to-cart"]');
  }
  
  // async goto(itemId) {
  //   await this.page.goto(`/inventory-item.html?id=${itemId}`);
  // }
  
  async addItemToCart() {
    await this.buttonAddToCart.click();
  }
};