class FormPage {
    constructor() {
        this.$practiceForm = () => $(`//span[text()="Practice Form"]`)
        this.$studentElements = (elements) => $(`//input[@placeholder="${elements}"]`)
        this.$header = () => $(`//h5[text()="Student Registration Form"]`)
        this.$subject = () => $(`//div[@class="subjects-auto-complete__menu-list subjects-auto-complete__menu-list--is-multi css-11unzgr"]`)
        this.$currentAdress = () => $(`//textarea[@placeholder="Current Address"]`)
        this.$gender = (gender) => $(`//label[text()="${gender}"]`)
    }
    async clickOnPracticeForm() {
        //await this.$practiceForm().scrollIntoView({ block: 'center' })
        await this.$practiceForm().click();

    }
    async clickOnStudentDetails() {
        await this.$studentElements('First Name').setValue('Tester1');
        await this.$studentElements('Last Name').setValue('Tester');
        await this.$studentElements('name@example.com').setValue('tester@gamil.com');
        await this.$gender('Male').scrollIntoView({ block: 'center' })
        await this.$gender('Male').click();

        await this.$studentElements('Mobile Number').setValue('57637364746');

        // await this.$subject().click()
        // await this.$studentElements('hobbies-checkbox-1').click()
        // await this.$currentAdress().setValue("teste1 testerhouse 23212")




    }


}
export const formPage = new FormPage();