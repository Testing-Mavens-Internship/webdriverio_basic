

class WebTables{

    constructor(){

        this.$header = (header) => $(`//div[text()="${header}"]`);
        this.$add = () =>$('//button[text()="Add"]');
        this.$register = () => $('//div[text()="Registration Form"]');
        this.$fields = (name) => $(`//label[text()="${name}"]/../..//input`);
        this.$submitButton = () => $('//button[text()="Submit"]');
        this.$addToTable = () => $('//div[@class="col-12 mt-4 col-md-6"]');
        this.$editButton = () => $(`//*[@id="edit-record-4"]`);
        this.$edit = (index) => $(`(//span[@title="Edit"])[${index}]`);
        this.$delete = (index) => $(`(//span[@title="Delete"])[${index}]`);

    }

    async addButton() {

        await this.$add().click();
        await browser.pause(2000);

    }

 

    async registerForm(firstName,lastName,email,age,salary,department){

        await this.$fields("First Name").setValue(firstName);
        await this.$fields("Last Name").setValue(lastName);
        await this.$fields("Email").setValue(email);
        await this.$fields("Age").setValue(age);
        await this.$fields("Salary").setValue(salary);
        await this.$fields("Department").setValue(department);
        await browser.pause(2000);
        await this.$submitButton().click();

    }

 

    async editPage(count,newFirstName,newLastName,newEmail,newAge,newSalary,newDepartment) {

        await this.$editButton().waitForClickable(5000);
        await this.$edit(count).click()
        await this.$fields("First Name").setValue(newFirstName);
        await this.$fields("Last Name").setValue(newLastName);
        await this.$fields("Email").setValue(newEmail);
        await this.$fields("Age").setValue(newAge);
        await this.$fields("Salary").setValue(newSalary);
        await this.$fields("Department").setValue(newDepartment);
        await this.$submitButton().click();

    }

   

   async deleteRecord(b){
        await this.$delete(b).click();      

 

     }

}

export const webTablesPage = new WebTables();