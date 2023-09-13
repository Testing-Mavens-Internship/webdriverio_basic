class BillingPage {
  constructor() {
    /**elements */
    this.$billingHeader = () => $('//h3[text()="Billing Details"]');
    this.$placeOrderButton = () => $('//button[@value="Place order"]');

    this.$errorMessageBox = (content) =>
      $(`//div[@class="box-content"]/ul/li[contains(.,'${content}')]`);
    this.$billingField = (id) => $(`//input[@id="${id}"]`);
    this.$stateField = () =>
      $(
        `//select[@id="billing_state"]/following-sibling::span//span[@class="selection"]`
      );
    this.$setState = (state) => $(`//li[text()='${state}']`);
  }
  /**  clicking on placing order button */
  async clickOnPlaceOrder() {
    await this.$placeOrderButton().scrollIntoView();
    await this.$placeOrderButton().click();
    await browser.pause(3000);
  }
  /**
   * fill up billing fields
   * @param {string} id
   * @param {string} value
   */
  async fillBillingField(id, value) {
    await this.$billingField(id).scrollIntoView({ block: "center" });
    await this.$billingField(id).setValue(value);
  }

  /**
   * select state
   * @param {string} state
   */
  async selectState(state) {
    await this.$stateField().scrollIntoView({ block: "center" });
    await this.$stateField().click();
    await this.$setState(state).scrollIntoView({ block: "center" });
    await this.$setState(state).click();
  }
}
export const billingPage = new BillingPage();
