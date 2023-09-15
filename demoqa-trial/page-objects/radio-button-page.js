class RadioButton {
    constructor() {
        this.$header = () => $(`//div[text()="Radio Button"]`);
        this.$radioButton = (buttonValue) => $(`//label[contains(text(),'${buttonValue}')]`);
        // this.$radioIcon =() => $(`//label[contains(text(),'Yes')]/preceding-sibling::input`);
        this.$buttonResult = (resultValue) => $(`//span[text()='${resultValue}']`);
    }

    /**
     * click on radio Button
     * @param {string} value 
     */
    async clickOnRadioButton(value) {
        await this.$radioButton(value).click();
        await this.$buttonResult(value).waitForDisplayed({ timeout: 2000 });
    }

    // async clickOnYesIcon(){
    //     await this.$radioIcon().click();
    //     await this.$buttonResult('Yes').waitForDisplayed({ timeout:2000 });
    // }

}

export const radioButtonPage = new RadioButton();