class WebTable {
    constructor() {
        this.$header = () => $(`//div[text()="Web Tables"]`);
        this.$addButton = () => $(`//button[text()="Add"]`);
        this.$registrationTitle = () => $(`//div[text()="Registration Form"]`);
        this.$inputValue = (values) => $(`//label[text()="${values}"]/../..//input`);
        this.$submitButton = () => $(`//button[text()="Submit"]`);
        this.$displayList = (value) => $(`//div[text()="${value}"]`);
        this.$editButton = () => $(`//span[@id="edit-record-4"]`);
        this.$deleteButton = () => $(`//span[@id="delete-record-4"]`);
    }

    /**
     * Add new user
     */
    async clickOnAdd() {
        await this.$addButton().waitForClickable({ timeout: 2000 });
        await this.$addButton().click();
        await this.$registrationTitle().waitForDisplayed({ timeout: 2000 });
    }

    /**
     * fill form details
     * @param {string} fName 
     * @param {string} lName 
     * @param {string} email 
     * @param {string} age 
     * @param {string} salary 
     * @param {string} department 
     */
    async fillForm(fName, lName, email, age, salary, department) {
        await this.$inputValue("First Name").setValue(fName);
        await this.$inputValue("Last Name").setValue(lName);
        await this.$inputValue("Email").setValue(email);
        await this.$inputValue("Age").setValue(age);
        await this.$inputValue("Salary").setValue(salary);
        await this.$inputValue("Department").setValue(department);
        await this.$submitButton().click();
        await this.$header().waitForDisplayed({ timeout: 2000 });
    }

    /**
     * edit form details
     * @param {string} email2 
     * @param {string} department2 
     */
    async editUser(email2, department2) {
        await this.$editButton().scrollIntoView({ block: 'center' });
        await this.$editButton().waitForClickable({ timeout: 2000 });
        await this.$editButton().click();
        await this.$registrationTitle().waitForDisplayed({ timeout: 2000 });

        await this.$inputValue("Email").setValue(email2);
        await this.$inputValue("Department").setValue(department2);
        await this.$submitButton().click();
        await this.$header().waitForDisplayed({ timeout: 2000 });

    }

    /**
     * delete user
     */
    async deleteUser() {
        await this.$deleteButton().scrollIntoView({ block: 'center' });
        await this.$deleteButton().waitForClickable({ timeout: 2000 });
        await this.$deleteButton().click();
    }

}
export const webTablePage = new WebTable();