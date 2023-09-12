import Common from "./commonFIle-page.js";
import { homePage } from "./home-page.js";
let totalPrice, itemTotal, tax, total;

class CheckOutOverview extends Common {
  constructor() {
    super();
    this.$finishButton = () => $('//button[text()="Finish"]');
    this.$itemTotal = () =>
      $('//div[@class="summary_info"]/div[@class="summary_subtotal_label"]');
    this.$tax = () =>
      $('//div[@class="summary_info"]/div[@class="summary_tax_label"]');
    this.$total = () =>
      $(
        '//div[@class="summary_info"]/div[@class="summary_info_label summary_total_label"]'
      );
  }
  /**
   * compare price of the product
   * @returns boolean
   */
  async priceComparison(productName) {
    itemTotal = await this.$itemTotal().getText();
    itemTotal = itemTotal.replace("Item total: $", "");
    itemTotal = Number(itemTotal);

    let initialPrice = await homePage.price(productName);
    if (initialPrice == itemTotal) {
      return true;
    } else {
      return false;
    }
  }
  /**
   *compares price
   * @returns boolean
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
   *Click on the Finish button to complete the transaction
   */
  async finishButton() {
    await this.$finishButton().scrollIntoView();
    await this.$finishButton().click();
    expect(await checkOutOverview.$thankYouText().isDisplayed())
      .withContext("Header is displayed")
      .toBe(true);
  }
}

export const checkOutOverview = new CheckOutOverview();
