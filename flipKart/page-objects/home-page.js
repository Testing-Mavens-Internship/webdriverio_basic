import data from "../testdata/data.json" assert { type: "json" };

class HomePage {
  constructor() {
    this.$header = () => $(`//img[@alt="Flipkart"]`);
    this.$travelHead = (value) => $(`//img[@alt="${value}"]`);
    this.$travelPageHeader = () => $('//div[@class="lAXZRO"]');
    this.$closeIcon = () => $(`//*[text()="✕"]`);
  }

  /**
   * Load flipakart webpage
   */
  async loadUrl() {
    await browser.url("https://www.flipkart.com/");
    await browser.maximizeWindow();
    await this.$closeIcon().click();
  }

  /**
   *
   * click on travel image
   */
  async clickOnTravelButton() {
    await this.$travelHead(data.category).click();
    await this.$travelPageHeader().waitForDisplayed(10000);
  }
}

export const homePage = new HomePage();
