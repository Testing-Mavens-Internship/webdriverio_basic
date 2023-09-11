class ElementsPage {
    constructor() {
        this.$header = () => $('div.main-header', 'Elements');
        this.$subHead = ()=> $('//div[text()="Text Box"]')
        this.$subHeadWebTable = ()=> $('//div[text()="Web Table"]')
        // this.$drop = (listName)=>$(`//div[@class="header-wrapper"]//div[text()="${listName}"]`)
        this.$subList = (subListName)=>$(`//span[text()="${subListName}"]`)
        this.$formInputField = (inputFieldName)=>$(`//label[text()="${inputFieldName}"]/../..//input`)
        this.$formTextarea = (textAreaName)=>$(`//label[text()="${textAreaName}"]/../..//textarea`)
        this.$submitButton = ()=>$(`//button[text()="Submit"]`)
        this.$results = (resultValues)=>$(`//div[@id="output"]//p[text()="${resultValues}"]`)
        
    }
    async clickOnDropDown(nameOfDropDown){
        await this.$subList(nameOfDropDown).click();
        await this.$subHead.waitForDisplayed({timeout:10000})

    }
    async setValues(){
        await this.$formInputField("Full Name").setValue("Joyal")
        await this.$formInputField("Email").setValue("sample@sample.com")
        await this.$formTextarea("Current Address").setValue("25/1461 Thekkeveettil House")
        await this.$formTextarea("Permanent Address").setValue("25/1461 Thekkeveetil House")
        await this.$submitButton().click()
        await this.$formTextarea("Permanent Address").waitForDisplayed({timeout:20000})
    }
}
// export const elementsPage = new ElementsPage();
module.exports = new ElementsPage();