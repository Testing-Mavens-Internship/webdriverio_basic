class TextBoxPage {
    constructor() {
        this.$header = () => $('//div[@class="main-header"]');
        this.$menuElement = (name) => $(`//label[text()="${name}"]/ancestor::div[@class="mt-2 row"]//input`);
        this.$address= (ad)=>$(`//label[text()="${ad}"]/../../div//textarea`)
        this.$submit=(s)=>$(`//button[text()="${s}"]`)
        this.$subval=(sv)=>$(`//div[@class="border col-md-12 col-sm-12"]//p[@id="${sv}"]`)
    }
    /**
     * Enters full name to Full name fieldd
     * @param {string} fullName 
     */
    async enterFullName(fullName,a) {
        await this.$menuElement(fullName).scrollIntoView({block: 'center'});
        await this.$menuElement(fullName).setValue(a);
       
       // await browser.pause(2000);
       await this.$menuElement("Email").waitForDisplayed({timeout:20000});
    }
    /**
     * Enters email id email id field
     * @param {string} emailId 
     */
    async enterEmailId(emailId) {
        await this.$menuElement(emailId).scrollIntoView({block: 'center'});
       await this.$menuElement(emailId).setValue('tester@gmail.com');
       // await browser.pause(2000);
       await this.$address("Current Address").waitForDisplayed({timeout:20000});
    }
    /**
     * Enter current address
     * @param {string} address 
     */
    async currentAddress(address) {
        await this.$address(address).scrollIntoView({block: 'center'});
       await this.$address(address).setValue('abc street');
        //await browser.pause(2000);
        await this.$address("Permanent Address").waitForDisplayed({timeout:20000});
    }
    /**
     * Enter permanent address
     * @param {string} address 
     */
    async permanentAddress(address) {
        await this.$address(address).scrollIntoView({block: 'center'});
       await this.$address(address).setValue('efg street');
       // await browser.pause(2000);
       await this.$submit("Submit").waitForDisplayed({timeout:20000});
    }
    /**
     * Click on submit
     * @param {string} sub 
     */
    async clickSubmit(sub) {
        //await this.$submit(sub).scrollIntoView({block: 'center'});
       await this.$submit(sub).click();
       // await browser.pause(2000);
       await this.$subval("name").waitForDisplayed({timeout:20000});

    }


}
//export const elementsPage = new ElementsPage();

module.exports=

{

    textBoxPage :new TextBoxPage()

}