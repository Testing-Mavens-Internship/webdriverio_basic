class Webtable{
    constructor(){
        this.$header = () => $('//div[text()="Web Tables"]')
        this.$add = () => $('//button[text()="Add"]')
         this.$title = () => $('//div[text()="Registration Form"]')
         this.$values = (value) => $(`//label[text()="${value}"]/../following-sibling::div//input`)
         this.$submitButton =  () => $('//button[text()="Submit"]');
         this.$displayRecord = (record) => $(`//div[text()="${record}"]`)
         this.$editRecord = () => $('//span[@id="edit-record-4"]')
         this.$deleteRecord = () => $('//span[@id="delete-record-4"]')
         this.$$cards=()=> $$('//div[@class="element-group"]')
    }
    /**
     * adding new record using add button
     */
    async clickOnAdd(){
        await this.$add().click();
        await browser.pause(2000);
        
    }
/**
 * 
 * @param {string} fName 
 * @param {string} lName 
 * @param {string} email 
 * @param {number} age 
 * @param {number} salary 
 * @param {string} Department 
 */
    async fillForm(fName,lName,email,age,salary,Department){
        await this.$values("First Name").setValue(fName);
        await this.$values("Last Name").setValue(lName);
        await this.$values("Email").setValue(email);
        await this.$values("Age").setValue(age);
        await this.$values("Salary").setValue(salary);
        await this.$values("Department").setValue(Department);
        await this.$submitButton().click();
        await this.$header().waitForDisplayed({timeout:2000});
    }

    /**
     * editing a field of record
     * @param {string} lname2 
     */
    async editRecord(lname2){
        await this.$editRecord().scrollIntoView({ block: 'center' });
        await this.$editRecord().click();
        await this.$values("Last Name").setValue(lname2);
        await this.$submitButton().click();
        await this.$header().waitForDisplayed({timeout:20000});
    }
    
    /**
     * deleting a record
     */
    async deleteRecord(){
        await this.$deleteRecord().scrollIntoView({ block: 'center' });
        await this.$deleteRecord().click();


    }
}
export const webTablePage  = new Webtable();