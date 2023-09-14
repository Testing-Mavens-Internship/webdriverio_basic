import Common from "./common.js";
class ContactPage extends Common {
  constructor() {
    super();
    this.$enterFields = (text) => $(`//input[contains(@placeholder,"${text}")]`);
    this.$messageBox = () => $(`//input[@placeholder="Message"]`);
    this.$sendButton = () =>$(`//button[contains(text(),"SEND")]`)
    this.$thankYouMessage = () =>$(`//h1[contains(text(),"THANK YOU!")]`)
  }
  /**
   * Method for entering the details in contact us page and click on send button
   * @param {string} firstName 
   * @param {string} email 
   * @param {string} phoneNumber 
   * @param {string} message 
   */
  async enterDetails(firstName,email,phoneNumber,message) {
    await this.$enterFields('Full Name').setValue(firstName)
    await this.$enterFields('Email').setValue(email)
    await this.$enterFields('Phone number').setValue(phoneNumber)
    await this.$messageBox('Message').setValue(message)
    await this.$sendButton().scrollIntoView({block:'center'})
    await this.$sendButton().click()

 }
}
export const contactPage = new ContactPage();