import CommonPage from "./common-page.js";

class OrderConfirmPage extends CommonPage {
  constructor() {
    super();
    this.$confirmMessage = () => $(`//h2[contains(text(),'Thank you')]`);
  }

  /**
   * click back to home button
   */
  async clickOnBackToHome() {
    await this.$button("Back Home").click();
  }
}

export const orderConfirm = new OrderConfirmPage();
