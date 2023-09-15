import { Common } from "./common.js";
class MaxShopping extends Common {
  constructor() {
    super();
    this.$clickMax = () =>
      $('//div[@class="filter_foods"]/img[@alt="MAX FASHIONS"]');
    this.$maxHeader = () =>
      $('//span[@class = "heading open"][contains(text(),"MAX")]');
    this.$addKhaki = () =>$('//li[@ng-repeat="food in Categories.foodDetails"]//h2[text() = "Khaki"]/ancestor::span[@class = "item_description"]/following-sibling::span/span[@role ="button"]');
    this.$specialInstruction = () =>
      $('//h5[text() = "SPECIAL INSTRUCTIONS "]');
    this.$incrmentDecrement = (plusMinus) =>
      $(`//span[@class ="${plusMinus}"]`);
    this.$addToCart = () => $('//button[text()= "ADD TO CART"]');
    this.$checkOut = () => $('//a[text() = "Checkout"]');
  }

  /**
   * Method to click on Max Fashions
   */
  async clickOnMax() {
    await this.$clickMax().waitForDisplayed({ timeout: 7000 });
    await this.$clickMax().click();
  }
  /**
   * Method to click on product khaki
   */
  async clickOnKhaki() {
    await this.$addKhaki().waitForClickable({ timeout: 7000 });
    await this.$addKhaki().click();
  }
  /**
   * Method to click on add to cart button
   */
  async clickOnAddToCart() {
    await this.$addToCart().waitForClickable();
    await this.$addToCart().click();
  }
  /**
   * Method to increment or decrement the count of the item
   */
  async increaseDecrease() {
    await this.$incrmentDecrement("price-increement").waitForClickable();
    await this.$incrmentDecrement("price-increement").click();
    await this.$incrmentDecrement("price-decreement").waitForClickable();
    await this.$incrmentDecrement("price-decreement").click();
  }
}
export const maxShopping = new MaxShopping();
