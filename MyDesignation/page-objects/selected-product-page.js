import Common from "./common-page.js";

class SelectedProduct extends Common {
  constructor() {
    super();
    this.$selectedProductHeader = () =>
      $(`//h1[text()="Gojo Co-Ords Set for Men"]`); //selected product name as heading in selected product page
    this.$productSize1 = (shirtSize) => $(`//span[text()="${shirtSize}"]`); //size of the selected product(jacket)
    this.$productSize2 = (shortSize) => $(`//span[text()="${shortSize}"]`); //size of the selected product(shorts)
    this.$addToCartButton = () => $(`//button[text()=" Add to cart "]`); //Add to cart button
    this.$cartIcon = () => $(`//a[@class="cart-contents"]`); //cart icon
    this.$productAddConformation = () =>
      $(
        `//div[contains(text(),' “Gojo Co-Ords Set for Men” has been added to your cart.')]`
      ); // product add conformation title
  }
  /**
   *
   * @param {String} shirtSize
   * @param {String} shortSize
   */
  async clickOnProductSize(shirtSize, shortSize) {
    await this.$productSize1(shirtSize).click();
    await this.$productSize2(shortSize).click();
    await this.$addToCartButton().scrollIntoView({ block: "center" });
    await this.$addToCartButton().click();
    await this.$productAddConformation().scrollIntoView({ block: "center" });
    await this.$cartIcon().click();
  }
}
export const selectedProduct = new SelectedProduct();
