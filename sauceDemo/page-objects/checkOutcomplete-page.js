import Common from "./commonFIle-page.js";

class CheckoutCompletePage extends Common {
  constructor() {
    super();
    this.$backHomeButton = () => $('//button[text()="Back Home"]');
  }
  /**
   * click on the Back Home button
   */
  async clickBackHome() {
    await this.$backHomeButton().scrollIntoView();
    await this.$backHomeButton().click();
    expect(await checkoutCompletePage.$header().isDisplayed())
    .withContext("Header is displayed")
    .toBe(true);
  }
}
export const checkoutCompletePage = new CheckoutCompletePage();