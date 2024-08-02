const { expect } = require('@playwright/test');

exports.PageCheckout = class PageCheckout {
  /**
  * @param {import('@playwright/test').Page} page
  */
  constructor(page) {
    this.page = page;
    this.inputFirstName = page.locator('[data-test="firstName"]');
    this.inputLastName = page.locator('[data-test="lastName"]');
    this.inputPostalCode = page.locator('[data-test="postalCode"]');
    this.buttonContinue = page.locator('[data-test="continue"]');
    this.buttonFinish = page.locator('[data-test="finish"]');
    this.textOrderComplete = page.locator('[data-test="complete-header"]')
    this.buttonBackHome = page.locator('[data-test="back-to-products"]');
  }
  
  async fillForm(firstName, lastName, postalCode) {
    await this.inputFirstName.fill(firstName);
    await this.inputLastName.fill(lastName);
    await this.inputPostalCode.fill(postalCode);
  }
  
  async continueCheckout() {
    await this.buttonContinue.click();
  }
  
  async finishCheckout() {
    await this.buttonFinish.click();
  }
};