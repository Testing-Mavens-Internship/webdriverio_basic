import { edeliveryHomePage } from "./home-page.js";

class Register {
  constructor() {
    this.$registerButton = () => $('//button[(text()="Continue")]');
    this.$input = (value) => $(`//input[@placeholder="${value}"]`);
    this.$verificationLoginButton = () => $('//a[@class="ng-binding"]');
  }
  /**method to fill the form of register popup */
  async fillForm(firstName, lastName, email, phoneNumber) {
    await this.$input("First Name").setValue(firstName);
    await this.$input("Last Name").setValue(lastName);
    await this.$input("Email").setValue(email);
    await this.$input("Phone Number").setValue(phoneNumber);
    await this.$registerButton().click();
    await this.$verificationLoginButton().waitForDisplayed({ timeout: 2000 });
    await this.$verificationLoginButton().click();
    await edeliveryHomePage.$userHeader().waitForDisplayed({ timeout: 2000 });
  }
}
export const register = new Register();
