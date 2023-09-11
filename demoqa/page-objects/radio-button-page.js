

class RadioButtonPage{
    constructor(){
        this.$header = () => $('//div[text()="Radio Button"]');
        this.$button = (buttonName) => $(`//label[text()="${buttonName}"]`); 
        this.$display = (value) => $(`//p[text()="You have selected "]//span[text()="${value}"]`)
    }

    /**
     * click on Yes
     */
    async clickOnYes(){
        await this.$button('Yes').click();
        await this.$display('Yes').waitForDisplayed({timeout: 20000});
    }

    /**
    * click on Impressive
    */
    async clickOnImpressive(){
            await this.$button('Impressive').click();
            await this.$display('Impressive').waitForDisplayed({timeout: 20000});
    }
}

export const radioButtonPage = new RadioButtonPage();