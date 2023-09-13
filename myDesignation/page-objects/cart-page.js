import CommonPage from "./common-page.js";

class CartPage extends CommonPage {
  constructor() {
    super();
    this.$cartItems = (item) => $(`//td[@class="product-name"]//a[contains(text(),'${item}')]`);
    this.$header = () => $(`//a[text()="Shopping Cart"]`);
    this.$checkOutButton = () => $(`//div[@class="wc-proceed-to-checkout"]//a`);
  }
  async clickOnCheckout(){
    await this.$checkOutButton().scrollIntoView({ block : 'center'});
    await this.$checkOutButton().click();
  }
}


export const cartPage = new CartPage();
