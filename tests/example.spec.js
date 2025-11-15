import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await page.click('[data-test="item-1-title-link"]');
  await page.click('[data-test="add-to-cart"]');
  await page.click('[data-test="shopping-cart-link"]');

  await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Bolt T-Shirt');

  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.click('[data-test="logout-sidebar-link"]');
});

