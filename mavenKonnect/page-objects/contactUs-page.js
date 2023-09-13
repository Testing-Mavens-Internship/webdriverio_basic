import CommonPage from "./common-page.js";

class ContactPage extends CommonPage {
  constructor() {
    super();
    this.$inputField = (value) => $(`//input[contains(@placeholder,"${value}")]`);
  }
  /**
   * Method for Fill up Contact form
   * @param {string} fullName 
   * @param {string} email 
   * @param {number} phone 
   * @param {string} message 
   */
  async fillContactForm(fullName, email, phone, message){
    await this.$inputField('Full Name').setValue(fullName);
    await this.$inputField('Email').setValue(email);
    await this.$inputField('Phone number').setValue(phone);
    await this.$inputField('Message').setValue(message);
    await this.$button('SEND').scrollIntoView({ block : 'center'});
    await this.$button('SEND').click();
  }
}

export const contactPage = new ContactPage();
