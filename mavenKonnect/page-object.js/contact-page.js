import Common from "./common.js";

class ContactPage extends Common {
  constructor() {
    super();
    this.$inputValues = (value) =>
      $(`//input[contains(@placeholder,"${value}")]`);
    this.$thankYouText = () => $('//h1[contains(text(),"THANK YOU!")]');
  }
  /**
   * Method to fill the contact form fields
   * @param {string} fullName
   * @param {string} email
   * @param {string} mobileNumber
   */
  async fillForm(fullName, email, mobileNumber) {
    await this.$inputValues("Full Name").setValue(fullName);
    await this.$inputValues("Email").setValue(email);
    await this.$inputValues("Phone number").setValue(mobileNumber);
    await this.$inputValues("Message").setValue("This is my new contact number");
    await this.$button("SEND").scrollIntoView({ block: "center" });
    await this.$button("SEND").click();
  }
}
export const contactPage = new ContactPage();
