class ElementsPage{
    constructor()
    {
        this.$header = () => $('div.main-header', 'Elements');
        this.$textBoxTitle=()=>$(`//div[@class="main-header"][text()="Text Box"]`)
        this.$textBoxName=(title)=>$(`//ul[@class="menu-list"]//span[text()="${title}"]`);
        this.$setFullName=()=>$(`//input[@class=" mr-sm-2 form-control"]`);
        this.$setEmailId=()=>$(`//input[@id="userEmail"]`);
        this.$setCurrentAddress=()=>$(`//textarea[@id="currentAddress"]`);
        this.$setPermanentAddress=()=>$(`//textarea[@id="permanentAddress"]`);
        this.$submitButton=()=>$(`//button[@id="submit"]`);
        this.$sampleName=()=>$(`//p[text()="Anchana Babu"]`);
        this.$sampleEmail=()=>$(`//p[text()="xyz@gmail.com"]`);
        this.$sampleCurrentAddress=()=>$(`//p[text()="Rosevilla"]`);
        this.$samplePermanentAddress=()=>$(`//p[text()="Greenvilla"]`);
    }
    /**
     * 
     * @param {string} checkBoxTitle 
     */
    async clickOnTextBox(checkBoxTitle){
        await this.$textBoxName(checkBoxTitle).click();
        await this.$textBoxTitle().waitForDisplayed({setTimeout:20000});
     
     }
     async setOnTextBoxField(){
        await this.$setFullName().setValue("Anchana Babu");
        await this.$setEmailId().setValue("xyz@gmail.com");
        await this.$setCurrentAddress().setValue("Rosevilla");
        await this.$setPermanentAddress().setValue("Greenvilla");
        await this.$textBoxName('Text Box').waitForDisplayed({setTimeout:20000});

     }
     async clickOnSubmitButton(){
        await this.$submitButton().scrollIntoView({block:'center'})
        await this.$submitButton().click()
        await this.$submitButton().waitForDisplayed({setTimeout:20000});

     }
   //   let a=await elementsPage.$header().getText();
   //   console.log(a);
   //   let b = [];
   //   b = await elementsPage.$$cards('Elements').map(item =>item.getText())
   //   console.log(b);
     

}
export const elementsPage = new ElementsPage()



//export default new LoginPage();