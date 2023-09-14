import CommonPage from "./common-page.js";

class ItemPage extends CommonPage {
  constructor() {
    super();
    this.$sizeOfItem = (type, value) =>
      $(
        `//label[text()='${type}']/../following-sibling::span//span[text()='${value}']/..`
      );
    this.$messageBox = () =>
      $(
        `//div[@class="woocommerce-notices-wrapper"]//div[contains(text(),' added to your cart')]`
      );
  }
  /**
   * select item sizes
   * @param {string} tshirtSize
   * @param {number} shortsSize
   */
  async clickOnItemSize(tshirtSize, shortsSize) {
    await this.$sizeOfItem("T-shirt Size", tshirtSize).scrollIntoView({
      block: "center",
    });
    await this.$sizeOfItem("T-shirt Size", tshirtSize).click();
    await this.$sizeOfItem("Shorts Size", shortsSize).click();
  }
  /**
   * click add to cart button
   */
  async clickOnAddToCart() {
    await this.$button(" Add to cart ").scrollIntoView({ block: "center" });
    await this.$button(" Add to cart ").click();
  }
  /**
   * click on cart icon
   */
  async clickOnCartIcon() {
    await this.$cartIcon().click();
  }
//   /**
//    * method for verifying warning message for skipping sizes
//    * @param {string} message 
//    * @returns 
//    */
//   async isMessageDisplayed(message){
//     if(message == 'Please select your size before adding to cart.'){
//         return true;
//     }
//   }
}

export const itemPage = new ItemPage();
