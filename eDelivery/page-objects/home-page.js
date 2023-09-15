import Common from "./common.js";
class HomePage extends Common {
  constructor() {
    super();
    this.$inputField = (fieldName) => $(`//input[@placeholder="${fieldName}"]`);
    this.$registerPopUp = () => $(`//div[@class="Register_popup"]`);
    this.$registeredSuccessfully = () =>
      $(`//div[text()="Registered Successfully"]`);
    this.$userName = (userFirstName) =>
      $(`//span[contains(text(),"${userFirstName}")]`);
    this.$locationField = () => $(`//input[@id="searchlocation"]`);
    this.$chennai = () => $(`//span[text()="nnai"]`);
    this.$outlet = (outletName) => $(`//h3[text()="${outletName}"]`);
    this.$product = (productName) =>
      $(
        `//div//h2[text()="Recommended"]/../..//div//span[@class="item_description"]//h2[text()="${productName}"]`
      );
  }
  /**
   * Method to enter details
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} eMail
   * @param {number} phoneNumber
   */
  async enterDetails(firstName, lastName, eMail, phoneNumber) {
    await this.$button("Login ").click();
    await this.$button2("Signup").waitForDisplayed({ timeout: 20000 });
    await this.$button2("Signup").click();
    await this.$registerPopUp().waitForDisplayed({ timeout: 20000 });
    await this.$inputField("First Name").setValue(firstName);
    await this.$inputField("Last Name").setValue(lastName);
    await this.$inputField("Email").setValue(eMail);
    await this.$inputField("Phone Number").setValue(phoneNumber);
    await this.$button("Continue").click();
    await this.$button2("Log In").waitForDisplayed({ timeout: 20000 });
  }
  /**
   * Method to click login and verify username
   * @param {string} firstName
   */
  async VerifyUserName(firstName) {
    await this.$button2("Log In").click();
    await this.$registeredSuccessfully().waitForDisplayed({ timeout: 20000 });
    await this.$userName(firstName).waitForDisplayed({ timeout: 20000 });
  }
  /**
   * Method to choose grocery and select location as chennai
   */
  async selectChennai() {
    await this.$locationField().setValue("che");
    await this.$chennai().waitForDisplayed({ timeout: 10000 });
    await this.$chennai().click();
    await this.$outlet("MAX FASHIONS").waitForDisplayed({ timeout: 20000 });
  }
  /**
   * Method to choose Max Fashions
   */
  async chooseOutlet() {
    await this.$outlet("MAX FASHIONS").click();
    await this.$product("White shirt").waitForDisplayed({ timeout: 20000 });
  }
}
export const homePage = new HomePage();
