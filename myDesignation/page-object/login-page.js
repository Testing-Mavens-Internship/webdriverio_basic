import Common from "./common.js";

class LaunchPage extends Common{
    constructor(){
        super();
        this.$itemsHeader = () => $('//div[@class="sober-container clearfix"]')
        this.$product = () => $('//a[@href="https://www.mydesignation.com/product/gojo-co-ords-set-for-men/"]/ancestor::div[@class="owl-item cloned"]')
        this.$productHeader = () => $('//h1[text()="Gojo Co-Ords Set for Men"]')

    }
    async openUrl(){
        await browser.url("https://www.mydesignation.com");
        await browser.maximizeWindow();
    }
    async selectProduct(){
        await this.$product().scrollIntoView({block: 'center'});
        await this.$product().waitForClickable();
        await this.$product().click();
    }
}
export const launchPage = new LaunchPage();