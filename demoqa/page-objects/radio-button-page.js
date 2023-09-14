class RadioButtonPage {
    constructor() {
        this.$radioButton = () => $(`//ul[@class="menu-list"]//span[text()="Radio Button"]`)
        this.$headerText = (text) => $(`//div[text() = '${text}']`)
        this.$radioLikeOptions = (options) => $(`//label[text() = "${options}"]`)
        this.$radioButtonYes = () => $(`//p[text()="You have selected "]`)


    }
    async clickOnRadioButton() {
        await this.$radioButton().scrollIntoView({
            block: 'center'
        })
        await this.$radioButton().click();
    }
    async ClickOnRadioOptions(option) {
        await this.$radioLikeOptions(option).click()
        await browser.pause(3000)


    }
}



export const radioButtonPage = new RadioButtonPage();