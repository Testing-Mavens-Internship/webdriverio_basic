import Common from "./commonFIle-page.js";

class YourInformationPage extends Common{
    constructor(){
        super();
        this.$fillInformation=(name)=>$(`//div[@class="form_group"]/..//input[@id="${name}"]`)
        this.$continueButton=()=>$('//input[@id="continue"]')
    }
    /**
     * Enter the first name,last name , zip code
     * @param {String} firstName 
     * @param {String} lastName 
     * @param {String} zipCode 
     */
    async fillCheckoutInformation(firstName,lastName,zipCode){
        await this.$fillInformation("first-name").setValue(firstName)
        await this.$fillInformation("last-name").setValue(lastName)
        await this.$fillInformation("postal-code").setValue(zipCode)
        await this.$continueButton().click();
expect 
    }
}
export const yourInformationPage = new YourInformationPage()