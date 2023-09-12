import Common from "./common.js";
import { sort } from "./sort.js";
import { checkOutPage } from "./checkout-page.js";

class CartPage extends Common {

  constructor() {

    super();
    this.$button1=()=>$(`//a[text()="CHECKOUT"]`);

  }

 

  /**

   * click on cart icon

   */

  async clickOnCart() {

    await sort.$cart().click();

    await sort.$item1().waitForDisplayed({ timeout: 20000 });

  }

 

  /**

   * click on  checkout

   */

  async clickOnCheckout(){

    await this.$button1().click();

    await checkOutPage.$sideHeading().waitForDisplayed({timeout: 20000});

  }

}

export const cartPage = new CartPage();

 