const { expect } = require('@playwright/test');

exports.PageLogin = class PageLogin {
  /**
  * @param {import('@playwright/test').Page} page
  */
  constructor(page) {
    this.page = page;
    this.inputUsername = page.locator('[data-test="username"]');
    this.inputPassword = page.locator('[data-test="password"]');
    this.buttonLogin = page.locator('[data-test="login-button"]');
  }
  
  async goto() {
    await this.page.goto('/');
  }
  
  async login(username, password) {
    await this.inputUsername.fill(username);
    await this.inputPassword.fill(password);
    await this.buttonLogin.click();
  }
};