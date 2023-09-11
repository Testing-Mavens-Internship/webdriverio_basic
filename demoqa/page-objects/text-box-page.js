class TextBoxPage {
    constructor() {
        this.$text = () => $('//div[text()="Text Box"]');
        this.$fullName = () => $('//input[@id="userName"]');
        this.$email = () => $('//input[@id="userEmail"]');
        this.$currentAddress = () => $('//textarea[@id="currentAddress"]');
        this.$permanenrAddress = () => $('//textarea[@id="permanentAddress"]');
        this.$submit = () => $('//button[@id="submit"]');

        this.$output = (value) => $(`//div[@id="output"]//p[text()="${value}"]`);
    }
    
    /**
     * filling form
     */
    async fillForm(){
        await this.$fullName().setValue('Abc');
        await this.$email().setValue("abc@gmail.com");
        await this.$currentAddress().setValue("address2");
        await this.$permanenrAddress().setValue("address");
    }

    /**
     * click on submit
     */
    async clickOnSubmit(){
        await this.$submit().scrollIntoView({block: 'center'});
        await this.$submit().waitForClickable(5000);
        await this.$submit().click();
        await this.$output('Abc').waitForDisplayed({timeout: 20000});
    }
}
export const textBoxPage = new TextBoxPage();