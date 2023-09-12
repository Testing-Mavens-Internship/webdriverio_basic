import { webTable } from "./web-table-page.js";

import Common from "./common.js";
class ElementPage extends Common{
    constructor() {
        super()
        this.$header = () => $('//div[@class="pattern-backgound playgound-header"]//div');
        this.$textBox = () => $('//div[@class="element-group"]//span[text()="Text Box"]');
        this.$headerTextBox = () => $('//div[@class="pattern-backgound playgound-header"]//div[text()="Text Box"]')
        this.$elementsTile = () => $('//div//h5[text()="Elements"]/ancestor::div[@class="card mt-4 top-card"]')
        
    }

    /**
     * click on the text box
     */
    async clickOnTextBox(){
        await this.$textBox().click();
        await this.$headerTextBox().waitForDisplayed({timeout:20000})
        
    }
    /**
     * click on web table
     */
    async clickOnWebTable(){
        await this.$tabButton("Web Tables").scrollIntoView();
        await this.$tabButton("Web Tables").waitForClickable({timeout:4000});
        await this.$tabButton("Web Tables").click();
        await webTable.$headerWebTable().waitForDisplayed({timeout:10000});

    }
    /**
     * click on radio button
     */
    async clickOnRadioButton(){
        await this.$tabButton("Radio Button").click();

    }
}


export const elementPage = new ElementPage();