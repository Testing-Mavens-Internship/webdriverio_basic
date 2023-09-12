class WebTablePage{
    constructor()
    {

        this.$webTableTitle=()=>$(`//div[@class="main-header"][text()="Web Tables"]`)
       this.$textBoxName=(title)=>$(`//ul[@class="menu-list"]//span[text()="${title}"]`);
       this.$addButton=()=>$(`//button[text()="Add"]`)
       this.$nameBox=(name)=>$(`//label[contains(text(),'${name}')]/../..//input`)
       this.$submitButton=()=>$(`//button[text()="Submit"]`)      
       this.$submitResult=(value)=>$(`//div[contains(text(),'${value}')]`)
       this.$editIcon=()=>$(`//span[@id="edit-record-4"]`)
       this.$deleteIcon=()=>$(`//span[@id="delete-record-4"]`)
       //this.$validateDeleteIcon=(text)=>$(`//div[contains(text(),"${text}")]`);
       this.$validateEditResult=(text1)=>$(`//div[contains(text(),"${text1}")]`);

    }
    async clickOnWebTable(webTableTitle){
        await this.$textBoxName(webTableTitle).click();
        await this.$webTableTitle().waitForDisplayed({setTimeout:30000})
    }
    async clickAddButton(){
        await this.$addButton().click();


    }
    /**
     * 
     * @param {String} firstName 
     * @param {String} lastName 
     * @param {String} email 
     * @param {Number} age 
     * @param {Number} salary 
     * @param {String} department 
     */
    async fillRegistrationForm(firstName,lastName,email,age,salary,department){
        await this.$nameBox("First Name").setValue(firstName)
        await this.$nameBox("Last Name").setValue(lastName)
        await this.$nameBox("Email").setValue(email)
        await this.$nameBox("Age").setValue(age)
        await this.$nameBox("Salary").setValue(salary)
        await this.$nameBox("Department").setValue(department)


    }
    async clickOnSubmit(){
        await this.$submitButton().click();
        await this.$webTableTitle().waitForDisplayed({setTimeout:30000})

    }

    async clickOnEdit(){
        await this.$editIcon().click()

    }
    /**
     * 
     * @param {*} firstName1 
     * @param {*} lastName1 
     * @param {*} email1 
     * @param {*} age1 
     * @param {*} salary1 
     * @param {*} department1 
     */
    async editFillRegistrationForm(firstName1,lastName1,email1,age1,salary1,department1){
        await this.$nameBox("First Name").setValue(firstName1)
        await this.$nameBox("Last Name").setValue(lastName1)
        await this.$nameBox("Email").setValue(email1)
        await this.$nameBox("Age").setValue(age1)
        await this.$nameBox("Salary").setValue(salary1)
        await this.$nameBox("Department").setValue(department1)

    }

    async clickOnSubmit(){
        await this.$submitButton().click();
        await this.$webTableTitle().waitForDisplayed({setTimeout:30000})

    }
    async clickOnDeleteIcon(){
        await  this.$deleteIcon().click()
            
    }

    async editresultDelete(firstName1,lastName1,email1,age1,salary1,department1){
        await this.$validateEditResult("First Name").getValue(firstName1)
        await this.$validateEditResult("Last Name").getValue(lastName1)
        await this.$validateEditResult("Email").getValue(email1)
        await this.$validateEditResult("Age").getValue(age1)
        await this.$validateEditResult("Salary").getValue(salary1)
        await this.$validateEditResult("Department").getValue(department1)
    }





}
export const webtablepage = new WebTablePage()