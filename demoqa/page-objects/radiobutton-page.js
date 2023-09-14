class RadioButton{
    constructor(){
        this.$header = () => $('//div[@class = "main-header"]');
        this.$radioButtons = () =>$('//span[text()="Radio Button"]');
        this.$text = (names) => $(`//label[contains(text(),"${names}")]`);
        this.$valtext = (value) => $(`//span[text()="${value}"]`)
    }
    async clickOnRadioButtons(){
        await this.$radioButtons().click();
        await this.$radioButtons().waitForDisplayed({timeout :2000 });
    }

    async ClickOnYes(){
        await this.$text('yes').click();
        await this.$text('Yes').waitForDisplayed({timeout :2000 });
        await browser.pause(2000);
    }

    async ClickOnImpressive(){
        await this.$text('Impressive').click();
        await this.$text('Impressive').waitForDisplayed({timeout :2000 });
        await browser.pause(2000);
    }
}
export const radiobutton = new RadioButton();

