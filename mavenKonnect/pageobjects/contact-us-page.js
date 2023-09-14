import Common from "./common.js";

class ContactUs extends Common {
  constructor() {
    /**elements */
    super();
    this.$header = () => $('//h2[contains(text(),"Contact Us")]');
    this.$inputField = (value) =>
      $(`//form[@name="myForm"]//input[@placeholder="${value}"]`);
    this.$sendButton = () => $('//button[contains(text(),"SEND")]');
    this.$thankYouHeader = () => $('//h1[@class="site-header__title"]');
  }
  /**
   * Method to fill the form on contact us
   * @param {string} fullName
   * @param {string} email
   * @param {number} phoneNumber
   */
  async fillForm(fullName, email, phoneNumber) {
    await this.$inputField("Full Name ").setValue(fullName);
    await this.$inputField("Email").setValue(email);
    await this.$inputField("Phone number").setValue(phoneNumber);
    await this.$sendButton().waitForDisplayed({ timeout: 2000 });
  }
  async submit() {
    await this.$sendButton().click();
  }
}
export const contactUs = new ContactUs();
