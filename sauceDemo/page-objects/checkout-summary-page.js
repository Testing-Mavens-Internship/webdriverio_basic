import CommonPage from "./common-page.js";

class CheckoutSummary extends CommonPage {
  constructor() {
    super();
    this.$priceField = (type) => $(`//div[contains(text(),'${type}')]`);
    this.$totalPrice = () => $(`//div[@class="summary_info_label summary_total_label"]`);

  }

  /**
   * Click on Finish Button
   */
  async clickOnFinish() {
    await this.$button("Finish").click();
  }

  /**
   * check whether item price equals to item total
   * @param {number} itemPrice 
   * @param {number} itemTotal 
   * @returns boolean
   */
  async verifyPrice(itemPrice, itemTotal){
    if(itemPrice == itemTotal){
      return true;
    }
  }

  /**
   * check whether sum of tax and item price equlas total
   * @param {number} itemPrice 
   * @param {number} tax 
   * @param {number} total 
   * @returns boolean
   */
  async verifyTotalPrice(itemPrice, tax, total){
    if(total == itemPrice + tax){
      return true;
    }
  }
  
}

export const checkOutSummary = new CheckoutSummary();
