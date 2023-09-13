class TextPage {
  constructor() {
    this.$header = (header) => $(`//div[text()="${header}"]`);
    this.$input = (value) => $(`//label[text()="${value}"]/../../div//input`);
    this.$current = (address) =>
      $(`//label[text()="${address}"]/../../div//textarea`);
    this.$submit = () => $('//button[text()="Submit"]');
    this.$validate = (name) =>
      $(`//div[@class="border col-md-12 col-sm-12"]//p[@id="${name}"]`);
  }

  /**

     * Enter full name

     * @param {string} inputValue

     */

  async enterName(inputValue, fullName) {
    await this.$input(inputValue).setValue(fullName);
    await this.$input("Email").waitForDisplayed({ timeout: 20000 });
  }

  /**
   * Enter email
   * @param {string} inputValue
   */
  async enterEmail(inputValue) {
    await this.$input(inputValue).setValue("anisha@gmail.com");
    await this.$current("Current Address").waitForDisplayed({ timeout: 20000 });
  }

  /**
   * enter current address
   * @param {string} address
   */
  async enterCurrentAddress(address) {
    await this.$current(address).setValue("asdfghjkl");
    await this.$current("Permanent Address").waitForDisplayed({
      timeout: 20000,
    });
  }

  /**
   * enter permenant address
   * @param {string} address
   */
  async enterPermenantAddress(address) {
    await this.$current(address).setValue("zxcvbnm");

    await this.$submit().waitForDisplayed({ timeout: 20000 });
  }

  /**
   * click submit button
   */
  async submitButton() {
    await this.$submit().scrollIntoView({ block: "center" });

    await this.$submit().click();

    await this.$validate("name").waitForDisplayed({ timeout: 20000 });
  }
  /**validate name field */
  async validateDetails(name) {
    await this.$validate(name).scrollIntoView({ block: "center" });
  }
}

export const textBoxPage = new TextPage();
