import Common from "./common.js";
import { homePage } from "./home-page.js";
class ContactPage extends Common {
  constructor() {
    super();
    this.$sideHeader = () => $(`//h2[contains(text(),"Contact Us")]`);
    this.$inputField = (fieldName) => $(`//input[@placeholder="${fieldName}"]`);
    this.$sendButton = () => $(`//button[contains(text(),"SEND")]`);
    this.$homeMenu = () => $(`//a[text()="Home "]`);
  }
  /**
   * Method to enter details
   * @param {string} fullName
   * @param {string} eMail
   * @param {string} phoneNumber
   * @param {string} message
   */
  async enterDetails(fullName, eMail, phoneNumber, message) {
    await this.$inputField("Full Name ").setValue(fullName);
    await this.$inputField("Email").setValue(eMail);
    await this.$inputField("Phone number").setValue(phoneNumber);
    await this.$inputField("Message").setValue(message);
    await this.$sendButton().click();
    await browser.acceptAlert();
    await this.$thankYou().waitForDisplayed({ timeout: 20000 });
    await this.$homeMenu().waitForDisplayed({ timeout: 20000 });
  }
  /**
   * Method to click on home menu
   */
  async clickOnHomeMenu() {
    await this.$homeMenu().click();
    await browser.closeWindow();
    let windowHandle = await browser.getWindowHandles();
    await browser.switchToWindow(windowHandle[0]);
    await homePage.$header().waitForDisplayed({ timeout: 20000 });
  }
}
export const contactPage = new ContactPage();
