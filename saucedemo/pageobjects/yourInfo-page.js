class YourInfo {
  constructor() {
    this.$header = () => $('//span[text()="Checkout: Your Information"]');
    this.$yourInfo = (value) =>
      $(`//div[@class="form_group"]//input[@name="${value}"]`);
    this.$continueButton = () =>
      $('//div[@class="checkout_buttons"]//input[@type="submit"]');
  }
  /**
   *
   * @param {string} fname
   * @param {string} lname
   * @param {number} zip
   */
  async yourInfoForm(fname, lname, zip) {
    await this.$yourInfo("firstName").setValue(fname);
    await this.$yourInfo("lastName").setValue(lname);
    await this.$yourInfo("postalCode").setValue(zip);
    await this.$continueButton().click();
  }
}
export const yourInfo = new YourInfo();
