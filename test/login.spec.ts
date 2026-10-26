import { test as base, expect } from '@playwright/test';
import { Logger } from '@/logger/logger';
import { AllureReporter } from '@/reporting/allure-reporter';
import { LoginPage } from '@/pages/login.page';
import { DashboardPage } from '@/pages/dashboard.page';

base.describe('Login Functionality', () => {
  let logger: Logger;
  let allureReporter: AllureReporter;
  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;

  base.beforeEach(async ({ page }) => {
    logger = new Logger();
    allureReporter = new AllureReporter();
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    logger.info('Starting test: Login Functionality');
    allureReporter.addStep('Test started: Login Functionality');
  });

  base('should login successfully with valid credentials', async ({ page }) => {
    await loginPage.navigateTo('https://new.freecrm.com/');
    await loginPage.enterEmail(process.env.TEST_LOGIN_EMAIL);
    await loginPage.enterPassword(process.env.TEST_LOGIN_PASSWORD);
    await loginPage.clickLoginButton();
    await dashboardPage.verifyWelcomeMessage();
  });
});
