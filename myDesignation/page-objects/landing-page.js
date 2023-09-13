import Common from "./common-page.js";

class LandingPage extends Common {
  constructor() {
    super();
    this.$$navigationBar = () =>
      $$('//a[text()="MYDESIGNATION"]/ancestor::div//nav/ul/li');
    this.$menuItem = (name) =>
      $(
        `//a[text()="MYDESIGNATION"]/ancestor::div//nav/ul/li/a[text()="${name}"]`
      );
    this.$productSelected = () =>
      $(
        '//a[@href="https://www.mydesignation.com/product/gojo-co-ords-set-for-men/"]/ancestor::div[@class="owl-item cloned"]'
      );
  }
  /**
   * Method to select a product from landing page
   */
  async clickOnProduct() {
    await this.$productSelected().scrollIntoView();
    await this.$productSelected().waitForClickable({ timeout: 2000 });

    await this.$productSelected().click();
  }
}

export const landingPage = new LandingPage();
