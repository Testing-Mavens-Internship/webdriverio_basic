import Common from "./Common.js";
let fullName = "Full Name ";
let email1 = "Email";
let number = "Phone number";
let message1 = "Message";
class ContactUs extends Common {
  constructor() {
    super();
    this.$fields = (name) =>
      $(
        `//h2[contains(text(),"Contact Us")]/ancestor::div//input[@placeholder="${name}"]`
      );
    this.$sendButton = () => $('//button[contains(text(),"SEND")]');
  }

  /**
   * 
   * @param {String} name 
   * @param {String} email 
   * @param {String} phoneNumber 
   * @param {String} message 
   */
  async fillForm(name, email, phoneNumber, message) {
    await this.$fields(fullName).setValue(name);
    await this.$fields(email1).setValue(email);
    await this.$fields(number).setValue(phoneNumber);
    await this.$fields(message1).setValue(message);
    await this.$sendButton().click();
    if(await browser.isAlertOpen()){
      await browser.acceptAlert();
      }
      await this.$validationMessage().waitForDisplayed({timeout:1000})
  }
}
export const contactUs = new ContactUs();
