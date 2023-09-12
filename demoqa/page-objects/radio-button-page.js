import Common from "./common.js";

class RadioButton extends Common{
    constructor(){
        super()
        this.$headerRadioButton = () => $('//div[@class="pattern-backgound playgound-header"]//div[text()="Radio Button"]');
        this.$radioButton = (value) => $(`//label[@for="${value}"]`)
        this.$text = () => $('//label/../following-sibling::p')
    }
/**
 * click on yes radio button
 */
    async clickOnYes(){
        this.$radioButton("yesRadio").click();
    }
    /**
     * click on impressive radio button
     */
    async clickOnImpressive(){
        this.$radioButton("impressiveRadio").click();
    }
    /**
     * click on no radio button
     */
    async clickOnNo(){
        this.$radioButton("noRadio").click();
    }
}

export const radioButton = new RadioButton()