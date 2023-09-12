class Overview {
  constructor() {
    this.$header = () => $('//div[@class="header_secondary_container"]//span');
    this.$overviewProductPrice = () =>
      $(
        '//div[text()="Sauce Labs Fleece Jacket"]//..//following-sibling::div[@class="item_pricebar"]/div'
      );
    this.$itemTotal = () => $('//div[contains(text(),"Item total")]');
    this.$tax = () => $('//div[contains(text(),"Tax")]');
    this.$total = () =>
      $('//div[@class="summary_info_label summary_total_label"]');
    this.$finish = () =>
      $('//div[@class="cart_footer"]//button[text()="Finish"]');
    this.$thankYouHeader = () => $('//h2[text()="Thank you for your order!"]');
  }

  /**
   *
   * @param {number} itemPrice
   * @param {number} totalPrice
   * @returns
   */
  async verifyPrice(itemPrice, totalPrice) {
    if (itemPrice == totalPrice) {
      return true;
    }
  }

  /**
   *
   * @param {number} itemPrice
   * @param {number} total
   * @param {number} tax
   * @returns
   */
  async verifyTotalPrice(itemPrice, total, tax) {
    if (total == itemPrice + tax) {
      return true;
    }
  }

  /**
   * click on finish button
   */
  async finsih() {
    await this.$finish().scrollIntoView();
    await this.$finish().click();
  }
}
export const overview = new Overview();
