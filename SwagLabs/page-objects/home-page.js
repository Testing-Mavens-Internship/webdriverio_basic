import Common from "../page-objects/common.js";

class launch extends Common {
  constructor() {
    super();
    //   this.$filter=()=>$(`//select[@class="product_sort_container"]`) //filter Icon
    this.$filterSelect = (filterValue) =>
      $(`//option[text()="${filterValue}"]`); //filter options
    //this.$$priceOfItems=(price)=>$(`//div[@id="inventory_container"]//div[text()="${price}"]`)
    this.$$priceOfItems = () =>
      $$(
        `//div[@id="inventory_container"]//div[@class="inventory_item_price"]`
      );
    //  this.$addToCart=(finalPrice)=>$(`//button[text()="Add to cart"]/../div[text()="${finalPrice}"]`)
    this.$addToCart = () =>
      $(`//div[text()="49.99"]/../button[text()="Add to cart"]`);
    this.$remove = () => $(`//div[text()="49.99"]/../button[text()="Remove"]`);
    this.$cartIcon = () => $(`//span[@class="shopping_cart_badge"]`);
    this.$selectedCartItemName = () =>
      $(`//div[text()="Sauce Labs Fleece Jacket"]`);
    this.$thankYouTitle = () => $(`//h2[text()="Thank you for your order!"]`);
  }
  //selecting the filter
  /**
   *
   * @param {String} hightoLow
   */
  async sort(hightoLow) {
    //await this.$filter().click()
    await this.$filterSelect(hightoLow).click();
  }
  // function for getting the highest price product
  async sortValidation() {
    let priceArray = [];
    priceArray = await this.$$priceOfItems().map((item) => item.getText());
    let price = priceArray.map((item) => item.replace("$", ""));
    price.sort((a, b) => b - a);
    let priceArr = price.map((str) => parseInt(str, 10));
    for (let i = 0; i <= priceArr.length; i++) {
      if (priceArr[i] > priceArr[i + 1]) {
        return true;
      } else {
        return false;
      }
    }
    console.log(priceArr);
  }
  //function for click add to cart
  async clickOnAddToCart() {
    await this.$addToCart().click();
  }
  //function for clicking cart icon
  async clickOnCartIcon() {
    await this.$cartIcon().click();
  }
}
export const homePage = new launch();