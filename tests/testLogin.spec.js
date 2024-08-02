const { test, expect } = require('@playwright/test');
const { PageLogin } = require('../pages/login');
const { PageInventory } = require('../pages/inventory');
const data = require('../data/data');

test('Test Login', async ({ page }) => {
  const pageLogin = new PageLogin(page);
  const pageInventory = new PageInventory(page);

  await pageLogin.goto();
  await pageLogin.login(data.user.username, data.user.password);
  
  await expect(pageInventory.listInventory, "> Expect list of items to be visible")
    .toBeVisible();
  await expect(pageInventory.listInventoryItem, "> Expect list of items to have count of "+data.items.length)
    .toHaveCount(data.items.length);
  await expect(pageInventory.linkShoppingCart,"> Expect cart link to be visible")
    .toBeVisible();
});