const { expect } = require('@playwright/test');

exports.PageInventory = class PageInventory {
  /**
  * @param {import('@playwright/test').Page} page
  */
  constructor(page) {
    this.page = page;
    this.listInventory = page.locator('[data-test="inventory-list"]');
    this.listInventoryItem = page.locator('[data-test="inventory-item"]');
    this.linkShoppingCart = page.locator('[data-test="shopping-cart-link"]');
  }
  
  async clickItem(itemTitle) {
    await this.page.locator(`[data-test="${itemTitle}"]`).click();
  }
  
  async goToCart() {
    await this.linkShoppingCart.click();
  }
};