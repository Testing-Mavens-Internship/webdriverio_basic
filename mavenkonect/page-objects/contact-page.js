import Common from "./common.js";

class Contact extends Common {
  constructor() {
    super();
    this.$header = () => $('//h2[contains(text(),"Contact Us")]');
    this.$input = (details) => $(`//input[@placeholder ="${details}"]`);
    this.$submitButton = () =>
      $('//button[@type ="submit"][text()="       SEND "]');
    this.$thanksText = () => $('//h1[text() = "THANK YOU!"]');
  }
  /**
   * Method tp enter the details and clicking on the send button
   * @param {string} fullName
   * @param {string} email
   * @param {string} phoneNumber
   * @param {string} message
   */
  async enterDetails(fullName, email, phoneNumber, message) {
    await this.$input("Full Name ").setValue(fullName);
    await this.$input("Email").setValue(email);
    await this.$input("Phone number").setValue(phoneNumber);
    await this.$input("Message").setValue(message);
    await this.$submitButton().click();
  }
}
export const contact = new Contact();
