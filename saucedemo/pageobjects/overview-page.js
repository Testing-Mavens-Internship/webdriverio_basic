import Common from "./common.js";
import { product } from "./products-page.js";

class OverView extends Common{
    constructor(){
        super();
        this.$finish = () => $ ('//button[@id="finish"]');
        this.$end = () => $ ('//h2[text()="Thank you for your order!"]');
        this.$home = () => $ ('//button[@id="back-to-products"]');
        this.$total = () => $ ('//div[@class="summary_info"]/div[@class="summary_subtotal_label"]');
        this.$tax = () => $ ('//div[@class="summary_info"]/div[@class="summary_tax_label"]');
        this.$grandTotal = () => $ ('//div[@class="summary_info"]/div[@class="summary_info_label summary_total_label"]')
    }

    /**
     * Click on finish button
     */

    async clickOnFinish(){
        await this.$finish().click();
        await browser.pause(2000);
    }

    /**
     * Click on back home button
     */
    async clickOnHome() {
            await this.$home().click();
            await browser.pause(2000);
    }

    /**
     * Comparison of price in overview and home page
     * @param {string} productName 
     */

    async priceComparison(productName) {
        let itemTotal = [];
        itemTotal = await this.$total().getText();
        itemTotal = itemTotal.replace("Item total: $", "");
        itemTotal = Number(itemTotal);
        let initialPrice = await product.price(productName);
        if (initialPrice == itemTotal) {
          return true;
        } else {
          return false;
        }
      }

      /**
       * 
       * Comparison of price total and total 
       */
    async totalPrice() {
        let itemTotal = await this.$total().getText();
        itemTotal = itemTotal.replace("Item total: $", "");
        itemTotal = Number(itemTotal);
        let itemTax = await this.$tax().getText();
        itemTax = itemTax.replace("Tax: $", "");
        itemTax = Number(itemTax);
        let total = await this.$grandTotal().getText();
        total = total.replace("Total: $", "");
        total = Number(total);
        console.log(total);
        if((itemTotal + itemTax) == total) {
            return true;
        }
        else {
            return false;
        }
    }



}

export const over = new OverView();