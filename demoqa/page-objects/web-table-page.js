import Common from "./common.js";

class WebTable extends Common{
    constructor(){
        super();
        this.$headerWebTable =() => $('//div[@class="pattern-backgound playgound-header"]//div[text()="Web Tables"]')
        this.$add = () => $('//button[text()="Add"]')
        this.$form = () => $('//div[text()="Registration Form"]')
        this.$input= (value) => $(`//label[text()="${value}"]/..//following-sibling::div//input`)
        this.$submit = () => $('//button[text()="Submit"]');
        this.$tableValue = (value) => $(`//div[contains(text(),'${value}')]`);
        this.$edit = () => $('(//div[@role="row"])[5]//span[1]')
        this.$delete = () => $('(//div[@role="row"])[5]//span[2]')
    }
    /**
     * click on add button
     */
    async clickOnAdd()
    {
        await this.$add().click();
    }
    /**
     * fill the form
     * @param {string} fname 
     * @param {string} lname 
     * @param {string} email 
     * @param {number} salary 
     * @param {number} age 
     * @param {string} depart 
     */
    async fillForm(fname,lname,email,age,salary,depart){
        await this.$input("First Name").setValue(fname);
        await this.$input("Last Name").setValue(lname);
        await this.$input("Email").setValue(email);
        await this.$input("Age").setValue(age);
        await this.$input("Salary").setValue(salary);
        await this.$input("Department").setValue(depart);
    }
    /**
     * click on submit button
     */
    async clickOnSubmitButton(){
        await this.$submit().click();
    }
    /**
     * click on edit button
     */
    async clickOnEdit(){
        await this.$edit().waitForClickable();
        await this.$edit().click();
    }
/**
 * click on delete button
 */
    async clickOnDelete() {
        await this.$delete().waitForClickable()
        await this.$delete().click();

    }
}

export const webTable = new WebTable()