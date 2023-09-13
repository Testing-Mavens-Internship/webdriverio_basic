import Common from "./common.js";

class ContactUsPage extends Common{
    constructor(){
        super();
        this.$contactHeader = () => $('//h2[contains(text(),"Contact")]');
        this.$fillForm = (input) => $(`//form[@name="myForm"]//input[@placeholder="${input}"]`);
        this.$sendButton = () => $('//button[contains(text(),"SEND")]');
        
    }
    /**
     * Method to input fields
     * @param {string} fullName 
     * @param {string} email 
     * @param {Number} phone 
     * @param {string} message 
     */
    async fillForm(fullName,email,phone,message){
        await this.$fillForm("Full Name ").setValue(fullName);
        await this.$fillForm("Email").setValue(email);
        await this.$fillForm("Phone number").setValue(phone);
        await this.$fillForm("Message").setValue(message);
        await this.$sendButton().click();
        await browser.acceptAlert();
        await this.$verifyThankYou().waitForDisplayed({timeout: 1000});
    }
}
export const contactUs = new ContactUsPage()