class ElementsPage{
    constructor()
    {
        this.$header = () => $('div.main-header', 'Elements');
        this.$textBoxTitle=()=>$(`//div[@class="main-header"][text()="Text Box"]`)
        this.$textBoxName=(title)=>$(`//ul[@class="menu-list"]//span[text()="${title}"]`);
        this.$setFullName=()=>$(`//input[@class=" mr-sm-2 form-control"]`)
        this.$setEmail=()=>$(`//input[@id="userEmail"]`)
        this.$setPermenantAddress=()=>$(`//textarea[@id="permanentAddress"]`)
        this.$setCurrentAddress=()=>$(`//textarea[@id="currentAddress"]`)
        this.$submitButton=()=>$(`//button[@id="submit"]`)
        this.$resultName=()=>$(`//p[text()="Adhithya Somaraj"]`)
        this.$resultEmail=()=>$(`//p[text()="adhithyasomaraj@gmail.com"]`)
        this.$resultCurrentAddress=()=>$(`//div[@class="border col-md-12 col-sm-12"]//p[text()="Adivakkal House Kanjiram p.o Kottayam"]`)
        this.$resultPermenantAddress=()=>$(`//p[text()="Adivakkal House Kanjiram p.o Kottayam"]`)
        

    }
    /**
     * 
     * @param {string} checkBoxTitle 
     */
    async clickOnTextBox(checkBoxTitle){
        await this.$textBoxName(checkBoxTitle).click();
        await this.$textBoxTitle().waitForDisplayed({setTimeout:30000})
        //await browser.pause(3000);
     
     }
     async setOnTextBoxField(){
        await this.$setFullName().setValue("Adhithya Somaraj");
        await this.$setEmail().setValue("adhithyasomaraj@gmail.com")
        await this.$setCurrentAddress().setValue("Adivakkal House Kanjiram p.o Kottayam")
        await this.$setPermenantAddress().setValue("Adivakkal House Kanjiram p.o Kottayam")
        await this.$textBoxName('Text Box').waitForDisplayed({setTimeout:20000})
       // await browser.pause(3000);
     }

     async submitTextBox(){
        await this.$submitButton().scrollIntoView({block: 'center'});
        await this.$submitButton().click()
        await this.$submitButton().waitForDisplayed({setTimeout:20000})
       // await browser.pause(3000);
     }

}
export const elementsPage = new ElementsPage()



//export default new LoginPage();
