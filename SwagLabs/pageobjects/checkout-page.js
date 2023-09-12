import CommonPage from "./common-page.js";

class CheckOutPage extends CommonPage{
    constructor(){
        super();
        this.$checkoutInputs=(values)=>$(`//input[@id="${values}"]`) // Input fields in checkout form
        this.$checkoutContinueButton=()=>$(`//input[@class="submit-button btn btn_primary cart_button btn_action"]`) // continue button
        this.$priceField = (type) => $(`//div[contains(text(),'${type}')]`);
        this.$totalPrice = () => $(`//div[@class="summary_info_label summary_total_label"]`);
        this.$finishButton=()=>$(`//button[text()="Finish"]`);
    }
    /**
     * Function for fill the form
     * @param {String} firstName 
     * @param {String} lastName 
     * @param {String} postalCode 
     */
    async fillCheckoutForm(firstName,lastName,postalCode)
    {
        await this.$checkoutInputs("first-name").setValue(firstName)
        await this.$checkoutInputs("last-name").setValue(lastName)
        await this.$checkoutInputs("postal-code").setValue(postalCode)
        await this.$checkoutContinueButton().click()
    }
    async clickOnFinish()
    {
        await this.$finishButton().click()
        await browser.pause(3000);
    }
    /**
   * check whether item price equals to item total
   * @param {number} itemPrice
   * @param {number} itemTotal
   * @returns
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
   * @returns
   */
  async verifyTotalPrice(itemPrice, tax, total){
    if(total == itemPrice + tax){
      return true;
    }
  }
}
export const checkOutPage = new CheckOutPage() 