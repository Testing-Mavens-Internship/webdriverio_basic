class WebTablesPage{
    constructor(){
        this.$webTablesTitle=()=>$(`//div[@class="main-header"][text()="Web Tables"]`)
        this.$webtablesName=(title)=>$(`//ul[@class="menu-list"]//span[text()="${title}"]`);
        this.$addButton=()=>$(`//button[text()="Add"]`);
        this.$setFirstName=(name)=>$(`//label[contains(text(),"${name}")]/../..//input`);
        this.$formTitle = () => $(`//div[contains(text(),"Registration Form")]`);
        this.$submitButton=()=>$(`//button[text()="Submit"]`);
        this.$validateResult=(value)=>$(`//div[text()="${value}"]`);
        this.$editRecord=()=>$(`//span[@id="edit-record-4"]`);
        this.$deleteIcon=()=>$(`//span[@id="delete-record-4"]`);
        this.$validateDeleteIcon=(text)=>$(`//div[contains(text(),"${text}")]`);
        
        
    }
    async clickOnWebTables(webTablesTitle){
        await this.$webtablesName(webTablesTitle).click();
        await this.$webTablesTitle().waitForDisplayed({setTimeout:20000});
     
     }
     async clickOnAddButton(){
        await this.$addButton().click();
        await this.$formTitle().waitForDisplayed({ timeout : 2000});

     }
     async fillForm(firstName,lastName,email,age,salary,department){
        await this.$setFirstName('First Name').setValue(firstName)
        await this.$setFirstName('Last Name').setValue(lastName)
        await this.$setFirstName('Email').setValue(email)
        await this.$setFirstName('Age').setValue(age)
        await this.$setFirstName('Salary').setValue(salary)
        await this.$setFirstName('Department').setValue(department)
       
       

     }
     async clickOnSubmitButton(){
        await this.$submitButton().click();
        await this.$webTablesTitle().waitForDisplayed({ timeout: 2000});
        
     }
     async clickOnEdit(){
        await this.$editRecord().click();
        await this.$formTitle().waitForDisplayed({ timeout : 2000});

     }

     async editForm(firstNameNew,lastNameNew,emailNew,ageNew,salaryNew,departmentNew){
        await this.$setFirstName('First Name').setValue(firstNameNew)
        await this.$setFirstName('Last Name').setValue(lastNameNew)
        await this.$setFirstName('Email').setValue(emailNew)
        await this.$setFirstName('Age').setValue(ageNew)
        await this.$setFirstName('Salary').setValue(salaryNew)
        await this.$setFirstName('Department').setValue(departmentNew)
     }
     async clickOnDeleteIcon(){
        await this.$deleteIcon().click();

     }
     async validateDelete(firstNameNew,lastNameNew,emailNew,ageNew,salaryNew,departmentNew){
      await this.$validateDeleteIcon('First Name').getValue(firstNameNew)
        await this.$validateDeleteIcon('Last Name').getValue(lastNameNew)
        await this.$validateDeleteIcon('Email').getValue(emailNew)
        await this.$validateDeleteIcon('Age').getValue(ageNew)
        await this.$validateDeleteIcon('Salary').getValue(salaryNew)
        await this.$validateDeleteIcon('Department').getValue(departmentNew)
     }

     



}
export  const webTablesPage = new WebTablesPage()

