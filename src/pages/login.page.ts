import { Page, Locator } from '@playwright/test';
import { Logger } from '@/logger/logger';
import { AllureReporter } from '@/reporting/allure-reporter';
import { BasePage } from './base.page';

/**
 * Page object for the Login page.
 */
class LoginPage extends BasePage {
  private logger: Logger;
  private allureReporter: AllureReporter;

  constructor(page: Page) {
    super(page);
    this.logger = new Logger();
    this.allureReporter = new AllureReporter();
  }

  /**
   * Get the locator for the email input field.
   */
  private get emailTextbox(): Locator {
    return this.page.getByRole('textbox', { name: 'Email' });
  }

  /**
   * Get the locator for the password input field.
   */
  private get passwordTextbox(): Locator {
    return this.page.getByRole('textbox', { name: 'Password' });
  }

  /**
   * Get the locator for the login button.
   */
  private get loginButton(): Locator {
    return this.page.getByRole('button', { name: 'Login' });
  }

  /**
   * Get the locator for the success heading after login.
   */
  private get successHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Good morning, Nandini' });
  }

  /**
   * Navigate to the login page.
   */
  async navigateToLoginPage(): Promise<void> {
    this.logger.info('Navigating to login page.');
    this.allureReporter.addStep('Navigating to login page.');
    await this.page.goto('https://new.freecrm.com/');
  }

  /**
   * Fill the email field with the provided email.
   * @param email - The email to enter.
   */
  async enterEmail(email: string): Promise<void> {
    this.logger.info('Entering email.');
    this.allureReporter.addStep('Entering email.');
    await this.page.fill(this.emailTextbox, email);
  }

  /**
   * Fill the password field with the provided password.
   * @param password - The password to enter.
   */
  async enterPassword(password: string): Promise<void> {
    this.logger.info('Entering password.');
    this.allureReporter.addStep('Entering password.');
    await this.page.fill(this.passwordTextbox, password);
  }

  /**
   * Click the login button.
   */
  async clickLogin(): Promise<void> {
    this.logger.info('Clicking login button.');
    this.allureReporter.addStep('Clicking login button.');
    await this.page.click(this.loginButton);
  }

  /**
   * Verify that the login was successful by checking the visibility of the success heading.
   */
  async verifyLoginSuccess(): Promise<void> {
    this.logger.info('Verifying login success.');
    this.allureReporter.addStep('Verifying login success.');
    await this.page.expect(this.successHeading).toBeVisible();
  }
}

export { LoginPage };