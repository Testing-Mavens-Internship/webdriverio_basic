import CommonPage from "./common-page.js";
import { home } from "./home.js";
let totalPrice, itemTotal, tax, total;
class CheckoutSummary extends CommonPage {
  constructor() {
    super();
    this.$priceField = (type) => $(`//div[contains(text(),'${type}')]`);
    this.$itemTotal = () =>
      $('//div[@class="summary_info"]/div[@class="summary_subtotal_label"]');
    this.$button = () => $('//button[@id ="finish"]');
    this.$tax = () =>
      $('//div[@class="summary_info"]/div[@class="summary_tax_label"]');
    this.$total = () =>
      $(
        '//div[@class="summary_info"]/div[@class="summary_info_label summary_total_label"]'
      );
  }
  /**
   * To get the item price after removing the $ sign
   * @param {string} productName
   * @returns {boolean}
   */
  async priceComparison(productName) {
    itemTotal = await this.$itemTotal().getText();
    itemTotal = itemTotal.replace("Item total: $", "");
    itemTotal = Number(itemTotal);
    let initialPrice = await home.price(productName);
    if (initialPrice == itemTotal) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * To get the final price after removing the $
   * @returns {boolean}
   */
  async totalPrice() {
    itemTotal = await this.$itemTotal().getText();
    itemTotal = itemTotal.replace("Item total: $", "");
    itemTotal = Number(itemTotal);
    tax = await this.$tax().getText();
    tax = tax.replace("Tax: $", "");
    tax = Number(tax);
    total = await this.$total().getText();
    total = total.replace("Total: $", "");
    total = Number(total);
    totalPrice = itemTotal + tax;
    if (total == totalPrice) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * Click on Finish Button
   */
  async clickOnFinish() {
    await this.$button().click();
  }
}

export const checkOutSummary = new CheckoutSummary();
