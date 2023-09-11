
class WebTablesPage{

    constructor(){
        this.$header = () => $('//div[text()="Web Tables"]');
        this.$button = (type) => $(`//button[text()="${type}"]`);
        this.$input1 = (field) => $(`//input[@id="${field}"]`);
        this.$output1 = (value) => $(`//div[text()="${value}"]`);
        this.$editButton = () => $('//span[@id="edit-record-4"]');
        this.$deleteButton = () => $('//span[@id="delete-record-4"]');
    }

    /**
     * click on add button
     */
    async clickOnAdd(){
        await this.$button('Add').click();
        await this.$input1('firstName').waitForDisplayed({timeout: 20000});
    }

    /**
     * Entering details
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {string} userEmail 
     * @param {number} age 
     * @param {number} salary 
     * @param {string} department 
     */
    async enterDetails(firstName,lastName,userEmail,age,salary,department){
        await this.$input1(firstName).setValue('Abcd');
        await this.$input1(lastName).setValue('efgh');
        await this.$input1(userEmail).setValue('abcd@gmail.com');
        await this.$input1(age).setValue(20);
        await this.$input1(salary).setValue(15000);
        await this.$input1(department).setValue('testing');
    }

    /**
     * click on submit
     */
    async clickOnSubmit(){
        await this.$button('Submit').click();
        await this.$output1('Abcd').waitForDisplayed({timeout: 2000});
    }

    /**
     * click on edit button
     */
    async clickOnEdit(){
        await this.$editButton().click();
        await this.$input1('firstName').waitForDisplayed({timeout: 20000});
    }

    /**
     * Edit details and click submit
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {string} userEmail 
     * @param {number} age 
     * @param {number} salary 
     * @param {string} department 
     */
    async editDetails(firstName,lastName,userEmail,age,salary,department){
        await this.$input1(firstName).setValue('Saifu');
        await this.$input1(lastName).setValue('jp');
        await this.$input1(userEmail).setValue('saifu@gmail.com');
        await this.$input1(age).setValue(21);
        await this.$input1(salary).setValue(18000);
        await this.$input1(department).setValue('tester');
        await this.$button('Submit').click();
        await this.$output1('Saifu').waitForDisplayed({timeout: 2000});
    }

    /**
     * click on delete button
     */
    async clickOnDelete(){
        await this.$deleteButton().click();
    }

}
export const webTablesPage = new WebTablesPage();