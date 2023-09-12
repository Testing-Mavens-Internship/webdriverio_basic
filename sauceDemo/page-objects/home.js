import Common from "./common-page.js";
class Home extends Common {
  constructor() {
    super();
    this.$homeHeader = () => $('//div[@class ="login_logo"]');
    this.$header = () => $('//div[@class ="app_logo"]');
    this.$clickOnFilterHiLo = () =>
      $('//select[@class ="product_sort_container"]//option[@value = "hilo"]');
    this.$clickOnAddToCarts = () =>
      $('//button[@id = "add-to-cart-sauce-labs-fleece-jacket"]');
    this.$removeFromCart = () =>
      $('//button [@id = "remove-sauce-labs-fleece-jacket"]');
    this.$clickOnCart = () => $('//a[@class ="shopping_cart_link" ]');
    this.$$getPrice = () => $$(`//div[@class ="inventory_item_price"]`);
    this.$price = (item) => $(`//div[contains(text(),'${item}')]/../../following-sibling::div//div`)
    this.$priceOfItem = (product) =>$(`//div[text()="${product}"]/../../..//div[@class="inventory_item_price"]`);
  }
  /**
   * Click on the add to cart button
   */
  async clickOnAddToCart() {
    await this.$clickOnAddToCarts().click();
  }
  /**
   * retrives price of the oroduct
   * @param {String} p
   * @returns price of the chosen product
   */
  async price(p) {
    let priceOfProduct = await this.$priceOfItem(p).getText();
    priceOfProduct = await priceOfProduct.replace("$", "");
    priceOfProduct = await Number(priceOfProduct);
    return priceOfProduct;
  }

  /**
   * Click on the filter to high to low and getting the price
   */
  async sortCheck() {
    await this.$clickOnFilterHiLo().click();
    let array = [];
    array = await this.$$getPrice().map((item) => item.getText());
    let arrayNew = array.map((item) => item.replace("$", ""));
    let price = [];
    for (let j of array) {
      price.push(parseInt(arrayNew[j]));
    }
    for (let i of price) {
      if (price[i] > price[i + 1]) {
        return true;
      } else {
        return false;
      }
    }
  }
  /**
   * Click on the cart icon present in the top right corner
   */
  async clickOnCartIcon() {
    await this.$clickOnCart().click();
    await browser.pause(1000);
  }
}
export const home = new Home();
