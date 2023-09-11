class WebTables {
    constructor() {
        this.$webTable = () => $('//span[text()="Web Tables"]')
        this.$addButton = () => $(`//button[@id='addNewRecordButton']`)
        this.$registrationFormHeader = () => $("//div[@id='registration-form-modal']")
        this.$filForm = (value) => $(`//label[text() = '${value}']/../..//input`)
        this.$submit = () => $(`//button[@id='submit']`)
        this.$validate = (value) => $(`//div[text()="${value}"]`)
        this.$editButton = () => $(`//span[@id='edit-record-4']`)
        this.$deleteButton = () => $("//span[@id='delete-record-4']")
    }

    /**
     * click on webtable
     */
    async clickOnWebtable() {
        await this.$webTable().scrollIntoView({ block: 'center' });
        await this.$webTable().click();
        await browser.pause(3000);

    }
    async clickOnAdd() {
        await this.$addButton().click()
        await this.$registrationFormHeader().waitForDisplayed({ timeout: 2000 });
    }

    async fillRegistrationForm(firstName, lastName, email, age, salary, department) {
        await this.$filForm('First Name').setValue(firstName)
        await this.$filForm('Last Name').setValue(lastName)
        await this.$filForm('Email').setValue(email)
        await this.$filForm('Age').setValue(age)
        await this.$filForm('Salary').setValue(salary)
        await this.$filForm('Department').setValue(department)
        await this.$submit().click();


    }
    async edit(firstName, lastName, email, age, salary, department) {
        await this.$editButton().scrollIntoView({ block: 'center' });
        await this.$editButton().click();
        await this.$filForm('First Name').setValue(firstName)
        await this.$filForm('Last Name').setValue(lastName)
        await this.$filForm('Email').setValue(email)
        await this.$filForm('Age').setValue(age)
        await this.$filForm('Salary').setValue(salary)
        await this.$filForm('Department').setValue(department)
        await this.$submit().click();
    }

    async delete() {
        await this.$deleteButton().click();

    }






}
export const webTablepage = new WebTables();