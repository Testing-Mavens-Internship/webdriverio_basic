class TextBoxPage {
    constructor() {

        this.$textBox = () => $('div.main-header', 'Text Box');
        this.$fullname = () => $("//input[@id='userName']")
        this.$email = () => $("//input[@class='mr-sm-2 form-control']")
        this.$currentAddress = () => $("//textarea[@id='currentAddress']")
        this.$permanentAdress = () => $("//textarea[@id='permanentAddress']")
        this.$clickOnSubmitButton = () => $("//button[@id='submit']")
        this.$validate = (value) => $(`//div[@class='border col-md-12 col-sm-12']//p[@id='${value}']`)


    }

    /**
     * Fill up the text box details
     */

    async fillUpTheForm() {
            await this.$fullname().setValue("tester1")
            await this.$email().setValue("tester@mail.com")
            await this.$currentAddress().setValue("Tester House1")
            await this.$permanentAdress().waitForClickable(3000);
            await this.$permanentAdress().setValue("Tester House")
            await this.$clickOnSubmitButton().click();
            await this.$clickOnSubmitButton().waitForClickable(3000);
            await browser.pause(3000)
        }
        /**
         * Comapring the values in the text box fileds with displayed field
         */
    async verifySubmit() {
        let name = await this.$validate('name').getText()
        let mail = await this.$validate('email').getText();
        let currentAdd = await this.$validate('currentAddress').getText();
        let permanentAdd = await this.$validate('permanentAddress').getText();
    }

}




export const textBoxPage = new TextBoxPage();