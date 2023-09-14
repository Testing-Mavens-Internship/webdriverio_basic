import Common from "./common.js";
class CheckOutPage extends Common{
    constructor(){
        super();
        this.$checkOutHeader = () => $('//h1[contains(text(),"Check")]');
        this.$fillFields = (name) => $(`//input[@name="${name}"]`);
        this.$checkOutButton = () => $('//input[@value="Continue to checkout"]');
    } 
    /**
     * Method to input fields
     * @param {string} fullName 
     * @param {string} email 
     * @param {string} address 
     * @param {string} city 
     * @param {string} state 
     * @param {Number} zip 
     * @param {string} cardname 
     * @param {Number} cardnumber 
     * @param {string} expmonth 
     * @param {Number} expyear 
     * @param {Number} cvv 
     */
    async fillFormField(fullName,email,address,city,state,zip,cardname,cardnumber,expmonth,expyear,cvv){
        await this.$fillFields("firstname").setValue(fullName);
        await this.$fillFields("email").setValue(email);
        await this.$fillFields("address").setValue(address);
        await this.$fillFields("city").setValue(city); 
        await this.$fillFields("state").setValue(state);
        await this.$fillFields("zip").setValue(zip);
        await this.$fillFields("cardname").setValue(cardname);
        await this.$fillFields("cardnumber").setValue(cardnumber);
        await this.$fillFields("expmonth").setValue(expmonth);
        await this.$fillFields("expyear").setValue(expyear);
        await this.$fillFields("cvv").setValue(cvv);
        await this.$checkOutButton().click();
        if(await browser.isAlertOpen()){
            await browser.acceptAlert();
        }
        await this.$verifyThankYou().waitForDisplayed({timeout: 1000});
    }   
}
export const checkOut = new CheckOutPage()