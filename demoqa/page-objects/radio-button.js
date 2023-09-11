
class RadioButton{

    constructor(){
        this.$header = (header) => $(`//div[text()="${header}"]`);
        this.$button = (option) => $(`//label[text()="${option}"]`);
        this.$verify = (verifyy) => $(`//span[text()="${verifyy}"]`);
    }
    /**click on options */
    async options(){
        await this.$button("Yes").click();
        await browser.pause(5000);
        //await radioButton.$verify("Yes").waitForDisplayed({timeout: 20000});
    }



}

export const radioButton = new RadioButton();