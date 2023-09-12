<<<<<<< HEAD
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
=======
class RadioButton{
    constructor()
    {
        this.$textBoxName=(title)=>$(`//ul[@class="menu-list"]//span[text()="${title}"]`);
        this.$radioButtonTitle=()=>$(`//div[@class="main-header"][text()="Radio Button"]`)
        this.$radioIcon=(iconStatus)=>$(`//input[@type="radio"]/../label[text()="${iconStatus}"]`)
        this.$radioStatusName=(status)=>$(`//label[text()="${status}"]`)
        this.$radioResult=(status)=>$(`//p[@class="mt-3"]/span[text()="${status}"]`)
    }
    /**
     * 
     * @param {String} radioButtonNavTitle 
     */
    async clickOnRadioButtonNav(radioButtonNavTitle){
        await this.$textBoxName(radioButtonNavTitle).click()
       // await browser.pause(3000);
        await this.$radioButtonTitle(radioButtonNavTitle).waitForDisplayed({setTimeout:30000})
    }
    async clickOnRadioIcon(radioIconValue){
        await this.$radioIcon(radioIconValue).click()
         await browser.pause(3000);
    }

}
export const radioButtonPage = new RadioButton()
>>>>>>> 97b12fda27cce15c469fc3d81102a29a78d02333
