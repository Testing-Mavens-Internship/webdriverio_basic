class FormsPage {
    constructor() {
        this.$header = () => $('div.main-header', 'Forms');
        this.$form = () => $('//span[text()="Practice Form"]');
        this.$studentform =() => $('//h5[text()="Student Registration Form"]');
        this.$text = (value) => $(`//input[@id="${value}"]`);
        this.$radiobutton = (gender) => $(`//label[text()="${gender}"]`);
    }
    async ClickOnPracticeForm(){
        await this.$form().click();
        await this.$form().waitForDisplayed({timeout :2000 });
    }
    async clickOnTextBox(firstName, lastName, email, phoneNumber){
        await this.$text('firstName').setValue(firstName);
        await this.$text('lastName').setValue(lastName);
        await this.$text('userEmail').setValue(email);
        await this.$radiobutton('Male').scrollIntoView({block : 'center'});
        await this.$radiobutton('Male').click();
        //await this.$gender().waitForDisplayed({timeout :2000 });
        await this.$text('userNumber').setValue(phoneNumber);
    }

}
export const formsPage = new FormsPage();

