const { test, expect } = require('@playwright/test');
const { PageLogin } = require('../pages/login');
const { PageInventory } = require('../pages/inventory');
const { PageInventoryItem } = require('../pages/inventoryItem');
const { PageCart } = require('../pages/cart');
const { PageCheckout } = require('../pages/checkout');
const data = require('../data/data');

const getRandomItems = (numItems) => {
  return data.items.sort(() => 0.5 - Math.random()).slice(0, numItems);
};

test('Test Full Flow', async ({ page }) => {
  const pageLogin = new PageLogin(page);
  const pageInventory = new PageInventory(page);
  const pageInventoryItem = new PageInventoryItem(page);
  const pageCart = new PageCart(page);
  const pageCheckout = new PageCheckout(page);
  var itemToBuy = 3;
  var itemToCheckout = itemToBuy - 1;

  // login
  await pageLogin.goto();
  await pageLogin.login(data.user.username, data.user.password);
  
  // select items using random function
  const itemsToSelect = getRandomItems(itemToBuy);
  for (let item of itemsToSelect) {
    await pageInventory.clickItem(item.title);
    await pageInventoryItem.addItemToCart();
    await page.goBack();
  }

  // go to "cart"
  await pageInventory.goToCart();
  
  // remove an item
  await pageCart.removeRandomItemFromCart();
  await expect(pageCart.listCartItem, "> Expect total items in cart after 1 removal to have count of "+itemToCheckout)
    .toHaveCount(itemToBuy-1);

  // checkout
  await pageCart.checkout();
  
  // fill the form
  await pageCheckout.fillForm(data.user.firstName, data.user.lastName, data.user.postalCode);

  // click the "Continue" button
  await pageCheckout.continueCheckout();

  // click the "Finish" button
  await pageCheckout.finishCheckout();
  
  // Here is my assertion
  await expect(pageCheckout.textOrderComplete, "> Expect checkout page to have order complete message")
    .toHaveText('Thank you for your order!');
  await expect(pageCheckout.buttonBackHome, "> Expect back to home button to be visible")
    .toBeVisible();
});