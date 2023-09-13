import Common from "./common.js";

class LandingPage extends Common {
  constructor() {
    super();
    this.$contact = () => $('//a[text()="Contact Us"]');
    this.$contactUs = () => $('//h2[contains(.,"Contact Us")]');
    this.$text = (value) => $(`//input[@placeholder="${value}"]`);
    this.$send = () => $('//button[contains(text()," SEND ")]');
  }
  /**
   * Method to click on Contact Us
   */
  async clickOnContact() {
    await this.$contact().click();
  }
  /**
   * Method to enter text to the given fields
   * @param {string} fullName
   * @param {string} email
   * @param {string} phoneNumer
   * @param {string} message
   */
  async enterText(fullName, email, phoneNumer, message) {
    await this.$text("Full Name ").setValue(fullName);
    await this.$text("Email").setValue(email);
    await this.$text("Phone number").setValue(phoneNumer);
    await this.$text("Message").setValue(message);
    await this.$send().click();
  }
}
export const landingPage = new LandingPage();
