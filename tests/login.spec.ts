import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';

/**
 * Test suite for login functionality.
 */
test.describe('Login Functionality', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.enterEmail(process.env.TEST_LOGIN_EMAIL);
    await loginPage.enterPassword(process.env.TEST_LOGIN_PASSWORD);
    await loginPage.clickLogin();
    await loginPage.verifyLoginSuccess();
  });
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateTo('https://new.freecrm.com/');
  });

  /**
   * Test case for successful login.
   */
  test('should login successfully with valid credentials', async ({ page }) => {
    // Enter username
    await loginPage.enterEmail(process.env.TEST_LOGIN_EMAIL);

    // Enter password
    await loginPage.enterPassword(process.env.TEST_LOGIN_PASSWORD);

    // Click on login
    await loginPage.clickLogin();

    // Verify that logged in
    await loginPage.verifyLoginSuccess();
  });
});
