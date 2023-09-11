class RadioButton{
    constructor(){
        this.$rheader= () => $(`//div[@class="main-header"]`)
        this.$buttonValue = (value) => $(`//label[text()="${value}"]/..//label`)
        this.$validateText = (validateText) => $(`//span[text()="${validateText}"]`)
    }

    async  clickOnButton(value){
        await this.$buttonValue(value).scrollIntoView({ block: 'center'});
        await this.$buttonValue(value).click();

    }
}
export const radioButtonPage = new RadioButton();