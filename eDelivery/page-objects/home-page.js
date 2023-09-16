import Common from "./common.js";

class HomePage extends Common{
    constructor(){
        super();
        this.$selectProduct = (product) => $(`//h3[text()="${product}"]`);
        this.$recommended = () => $(`//h2[text()="Recommended"]`)
        this.$getPrice = (item) => $(`//h2[text()="Recommended"]/ancestor::div[contains(@class,"checkout-details")]//h2[text()="${item}"]/../../following-sibling::span//h2`);
        this.$selectitem = (item) => $(`//h2[text()="Recommended"]/ancestor::div[contains(@class,"checkout-details")]//h2[text()="${item}"]/../../following-sibling::span//span[text()="Add"]`)
    }
    async selectProduct(product){
        await this.$selectProduct(product).click();
        await this.$recommended().waitForDisplayed(4000)
    }
    async selectItem(item){
        let price = await this.$getPrice().getText();
        price = price.replace("₹ ","");
        price = Number(price);
        await this.$selectitem(item).click();
    }
}
export const homePage = new HomePage();