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