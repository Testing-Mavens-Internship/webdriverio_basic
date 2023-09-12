import Common from "./commonFIle-page.js";

class CartPage extends Common {
constructor(){
    super();
    this.$youCartText=()=>$('//span[text()="Your Cart"]')
    this.$checkOutButton=()=>$('//button[text()="Checkout"]')
    this.$itemname=(a)=>$(`//div[text()="${a}"]`)
}
/**
 * click on the check out button in the cart page
 */
async clickOnCheckoutButton(){
    await this.$checkOutButton().scrollIntoView();
    await this.$checkOutButton().click()
}
}

export const cartPage = new CartPage()