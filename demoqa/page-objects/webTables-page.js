class WebTablePage{
    constructor() {

        this.$header = () => $('//div[@class="pattern-backgound playgound-header"]//div');
        this.$addButton=()=>$('//button[text()="Add"]')
        this.$register=()=>$('//div[text()="Registration Form"]')
        this.$fields=(name)=>$(`//label[text()="${name}"]/../..//input`)
        this.$submitButton=()=>$('//button[text()="Submit"]')
        this.$subval=(name)=>$('//div[@class="col-12 mt-4 col-md-6"]')
        this.$editButton=()=>$('//div[@class="col-12 mt-4 col-md-6"]//div//span[@id="edit-record-4"]');
        this.$edit = (index) => $(`(//span[@title="Edit"])[${index}]`);
       this.$delete=(i)=>$(`(//span[@title="Delete"])[${i}]`);
       this.$$example=()=>$$('//div[@class="element-group"]');
      // this.$new = (l)=>$(`//div[@class="rt-tbody"][${l}]`)



    }
    /**
     * To click on ADD button in elements page
     */
    async clickOnAddButton() {
        await this.$addButton().scrollIntoView({block: 'center'});
       await this.$addButton().click();
      // await browser.pause(2000);
      await this.$register().waitForDisplayed({timeout:2000});
      

    }/**
     * To fill the details in the Register Form
     * @param {string} nameFirst 
     * @param {string} nameLast 
     * @param {string} email 
     * @param {string} age 
     * @param {string} salary 
     * @param {string} department 
     */
    async fillForm(nameFirst,nameLast,email,age,salary,department){
        await this.$fields("First Name").setValue(nameFirst);
        await this.$fields("Last Name").setValue(nameLast);
        await this.$fields("Email").setValue(email);
        await this.$fields("Age").setValue(age);
        await this.$fields("Salary").setValue(salary);
        await this.$fields("Department").setValue(department);
        await this.$submitButton().scrollIntoView({block: 'center'});
        await this.$submitButton().click();

        //await browser.pause(5000);
        await this.$header().waitForDisplayed({timeout:2000});

    }
    /**
     * to edit an existing record 
     * @param {string} a 
     * @param {string} nameFirst 
     * @param {string} nameLast 
     * @param {string} email 
     * @param {string} age 
     * @param {string} salary 
     * @param {string} department 
     */
    async editDetails(a,nameFirst,nameLast,email,age,salary,department){
       await this.$edit(a).click();
        
        await this.$fields("First Name").setValue(nameFirst);
        await this.$fields("Last Name").setValue(nameLast);
        await this.$fields("Email").setValue(email);
        await this.$fields("Age").setValue(age);
        await this.$fields("Salary").setValue(salary);
        await this.$fields("Department").setValue(department);
        await this.$submitButton().scrollIntoView({block: 'center'});
        await this.$submitButton().click();
        await this.$header().waitForDisplayed({timeout:20000});
        
    
    }
    /**
     * to delete an exisitng record
     * @param {string} b 
     */
    async deleteRecord(b){
        await this.$delete(b).click();
        await this.$header().waitForDisplayed({timeout:20000});
         
     }
}

module.exports=

{

    webTablePage :new WebTablePage()

}