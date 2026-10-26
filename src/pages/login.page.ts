import { Page } from 'playwright';

/**
 * LoginPage class encapsulates the interactions with the login page.
 */
export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Enters the email into the email textbox.
   * @param email - The email to enter.
   */
  async enterEmail(email: string): Promise<void> {
    await this.page.getByRole('textbox', { name: 'Email' }).fill(email);
  }

  /**
   * Enters the password into the password textbox.
   * @param password - The password to enter.
   */
  async enterPassword(password: string): Promise<void> {
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
  }

  /**
   * Clicks the login button.
   */
  async clickLoginButton(): Promise<void> {
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}
