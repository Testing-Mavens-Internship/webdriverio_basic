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
   * Method to fill form and click on SEND button
   */
  async fillForm(name, email, phoneNumber, message) {
    await this.$fields(fullName).setValue(name);
    await this.$fields(email1).setValue(email);
    await this.$fields(number).setValue(phoneNumber);
    await this.$fields(message1).setValue(message);

    await this.$sendButton().click();
    await browser.acceptAlert();
  }
}
export const contactUs = new ContactUs();
