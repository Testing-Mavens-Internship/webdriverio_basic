import Common from "./Common.js";
let rate;
let itemPrice;
class OutletPage extends Common {
  constructor() {
    super();
    this.$outletName = (name) => $(`//h3[text()="${name}"]`);
    this.$item = (name) =>
      $(
        `//h2[text()="Recommended"]/ancestor::div[contains(@class,"checkout-details")]//h2[text()="${name}"]/../../following-sibling::span//span[text()="Add"]`
      );
    this.$itemRate = (rate) =>
      $(
        `//h2[text()="Recommended"]/ancestor::div[contains(@class,"checkout-details")]//h2[text()="${rate}"]/../../following-sibling::span//h2`
      );
    this.$quantity = () =>
      $('//span[@class="input-group-btn"]/button[@data-type="plus"]');
    this.$addToCart = () => $('//button[text()="ADD TO CART"]');
    this.$priceIncart = () =>
      $(
        '//div[@class="item-price-wrap"]/span[@class="offer-price ng-binding ng-scope"]'
      );
  }
  /**
   * Method to select the outlet's name
   * @param {String} name
   */

  async slectOutlet(name) {
    await this.$outletName(name).click();
    await this.$outletName(name).waitForDisplayed({ timeout: 2000 });
  }
  /**
   * Method to add item to cart
   * @param {String} item
   * @returns boolean
   */
  async addTocart(item) {
    rate = await this.$itemRate(item).getText();
    rate = rate.replace("₹ ", "");
    rate = rate * 2;
    await this.$item(item).click();
    await this.$quantity().click();
    await this.$addToCart().click();
    await this.$priceIncart().waitForDisplayed({ timeout: 2000 });
    itemPrice = await this.$priceIncart().getText();
    itemPrice = itemPrice.replace("₹ ", "");
    itemPrice = itemPrice.replace(".00", "");
    itemPrice = Number(itemPrice);
    if (rate == itemPrice) {
      return true;
    } else {
      return false;
    }
  }
}

export const outletPage = new OutletPage();
