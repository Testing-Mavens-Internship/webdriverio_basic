import Common from "./common.js";

class Home extends Common {
  constructor() {
    super();
    this.$product = (value) =>
      $(
        `//a[contains(text(),"${value}")]/..//ancestor::div[@class="owl-item cloned"]`
      );
  }
  /**  selecting the product*/
  async productSelect(product) {
    await this.$product(product).scrollIntoView();
    await this.$product(product).waitForDisplayed(4000);
    await this.$product(product).click();
  }
}
export const home = new Home();
