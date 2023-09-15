import { Common } from "./common.js";
class Shopping extends Common {
  constructor() {
    super();
    this.$clickOnShoppingSite = (site) =>
      $(`//div[@class="filter_foods"]/img[@alt="${site}"]`);
    this.$shopHeader = (siteName) =>
      $(`//span[@class = "heading open"][contains(text(),"${siteName}")]`);
    this.$addItem = (itemName) =>$(`//li[@ng-repeat="food in Categories.foodDetails"]//h2[text() = "${itemName}"]/ancestor::span[@class = "item_description"]/following-sibling::span/span[@role ="button"]`);
    this.$specialInstruction = () =>
      $('//h5[text() = "SPECIAL INSTRUCTIONS "]');
    this.$incrmentDecrement = (plusMinus) =>
      $(`//span[@class ="${plusMinus}"]`);
    this.$addToCart = () => $('//button[text()= "ADD TO CART"]');
    this.$checkOut = () => $('//a[text() = "Checkout"]');
  }

  /**
   * Method to select shopping site
   */
  async selectShoppingSite() {
    await this.$clickOnShoppingSite("MAX FASHIONS").waitForDisplayed({ timeout: 7000 });
    await this.$clickOnShoppingSite("MAX FASHIONS").click();
  }
  /**
   * Method to select the product 
   */
  async selectItem() {
    await this.$addItem("Khaki").waitForClickable({ timeout: 7000 });
    await this.$addItem("Khaki").click();
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
export const shopping = new Shopping();
