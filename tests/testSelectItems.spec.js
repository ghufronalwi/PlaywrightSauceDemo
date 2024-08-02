const { test, expect } = require('@playwright/test');
const { PageLogin } = require('../pages/login');
const { PageInventory } = require('../pages/inventory');
const { PageInventoryItem } = require('../pages/inventoryItem');
const { PageCart } = require('../pages/cart');
const data = require('../data/data');

const selectItems = async (page, numberOfItems) => {
  const pageLogin = new PageLogin(page);
  const pageInventory = new PageInventory(page);
  const pageInventoryItem = new PageInventoryItem(page);
  const pageCart = new PageCart(page);

  await pageLogin.goto();
  await pageLogin.login(data.user.username, data.user.password);
  
  // click item and add to cart then go back based on number of items to be selected
  for (let i = 0; i < numberOfItems; i++) {
    await pageInventory.clickItem(data.items[i].title);
    await pageInventoryItem.addItemToCart();
    await page.goBack();
  }
  
  await pageInventory.goToCart();
  
  await expect(pageCart.listCartItem, "> Expect total item in cart to be "+numberOfItems)
    .toHaveCount(numberOfItems);
};

test('Test Select 2 Items', async ({ page }) => {
  await selectItems(page, 2);
});

test('Test Select 3 Items', async ({ page }) => {
  await selectItems(page, 3);
});

test('Test Select 4 Items', async ({ page }) => {
  await selectItems(page, 4);
});