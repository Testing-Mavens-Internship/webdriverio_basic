import Common from "../page_objects/common.js";

class Home extends Common {
    constructor() {
            super();
            this.$header = () => $(`//header[@id="masthead"]`)
            this.$product = () => $(`//a[@href="https://www.mydesignation.com/product/gojo-co-ords-set-for-men/"]/ancestor::div[@class="owl-item cloned"]`)
            this.$productheader = () => $(`//h1[text()="Gojo Co-Ords Set for Men"]`)
        }
        /**
         * click on a product
         */

    async clickOnProduct() {
        await this.$product().scrollIntoView({ block: 'center' })
        await this.$product().click();
    }
}
export const homePage = new Home();