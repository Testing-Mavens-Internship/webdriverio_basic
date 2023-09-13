class RadioButtonPage {
  constructor() {
    this.$header = () => $('//div[@class = "main-header"]');
    this.$radioButtons = () => $('//span[text()="Radio Button"]');
    this.$radioButtonsName = (names) =>
      $(`//label[contains(text(),"${names}")]`);
  }
  /**
   * Click on the radio button side nav
   */
  async clickOnRadioButtons() {
    await this.$radioButtons().click();
    await this.$radioButtons().waitForDisplayed({ timeout: 2000 });
  }
  /**
   * Click on the yes radio button
   */
  async clickOnYes() {
    await this.$radioButtonsName("Yes").click();
    await this.$radioButtonsName("Yes").waitForDisplayed({ timeout: 2000 });
    await browser.pause(2000);
  }
  /**
   * Click on the impressive radio button
   */
  async clickOnImpressive() {
    await this.$radioButtonsName("Impressive").click();
    await this.$radioButtonsName("Impressive").waitForDisplayed({
      timeout: 2000,
    });
    await browser.pause(2000);
  }
}
export const radioButtonPage = new RadioButtonPage();
