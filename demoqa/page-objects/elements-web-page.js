class ElementsPage {
    constructor() {
        this.$header = () => $('div.main-header', 'Elements');
        this.$subHeadWebTable = ()=> $('//div[text()="Web Table"]')
        this.$subList = (subListName)=>$(`//span[text()="${subListName}"]`)

        this.$webTableCheck = ()=>$(`//div[text()="Web Tables"]`)
        this.$addButton = ()=>$(`//button[text()="Add"]`)
        this.$form = (field)=>$(`//label[text()="${field}"]/../..//input`)
        this.$submit = ()=>$(`//button[text()="Submit"]`)
        this.$validate = (value)=>$(`//div[@role="row"]/..//div[text()="${value}"]`)
        this.$editRecord = ()=>$(`//span[@id="edit-record-4"]`)
        this.$deleteRecord = ()=>$(`//span[@id="delete-record-4"]`)
        
    }
    /**
     * 
     * @param {string} nameOfDropDown 
     */
    async clickOnDropDown(nameOfDropDown){
        await this.$subList(nameOfDropDown).scrollIntoView({block:'center'});
        await this.$subList(nameOfDropDown).waitForClickable(5000);
        await this.$subList(nameOfDropDown).click();
        let a = await this.$header().getText()
        console.log(a)
        let b=[]
        await this.$webTableCheck().waitForDisplayed({timeout:10000});

    }
    /**
     * Click on the add button to add new value to table
     */
    async clickOnAddButton(){
        await this.$addButton().click()
    }
    /**
     * Used to enter the details to the record
     */
    async enterDetails(){
        await this.$form("First Name").setValue("Joyal")
        await this.$form("Last Name").setValue(" Francis")
        await this.$form("Email").setValue("joyalfrancis23@gmail.com")
        await this.$form("Age").setValue("22")
        await this.$form("Salary").setValue("2400000")
        await this.$form("Department").setValue("IT")
        await this.$submit().click()
    }
    /**
     * This function lets you edit a record
     */
    async editARecord(){
        // let val = await this.$form("First Name").getText()
        // console.log(val)
        await this.$editRecord().scrollIntoView({block:'center'});
        await this.$editRecord().waitForClickable(5000)

        await this.$editRecord().click()
        await this.$form("Age").setValue("19")
        await this.$submit().click()
        
    }
    /**
     * This function lets you delete a record
     */
    async deleteARecord(){
        
        await this.$deleteRecord().scrollIntoView({block:'center'});
        await this.$deleteRecord().waitForClickable(5000)
        await this.$deleteRecord().click()


    }
}

// export const elementsPage = new ElementsPage();
module.exports = new ElementsPage();