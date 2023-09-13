import {landingPage} from ('../page-objects//landing-page.js');
class FormsPage {
    constructor() {
        this.$header = () => $('//div[@class = "main-header"]');
        this.$forms = () => $('//span[text()="Practice Form"]');
        this.$details = (details) =>$(`//input[@id="${details}"]`);
        this.$gender = (a,b) =>$(`//div[text()="${a}"]/..//label[text()="${b}"]`)
        this.$submitButton = () => $('//button[@id ="submit"]');
        this.$currentAddress=()=>$('//label[text()="Current Address"]/../..//textarea')
        this.$subject = ()=> $('//div[@class ="subjects-auto-complete__menu css-26l3qy-menu"]//div[text()="Hindi"]');
        this.$hobbies=(a,b)=>$(`//label[text()="${a}"]/../..//label[text()="${b}"]`)
    }   
    /**
     * Click on forms
     */
    async clickOntileForm(){
    await landingPage.$tileName(tileNameInPage).scrollIntoView({ block: "center" });
    await landingPage.$tileName(tileNameInPage).click();
    }
    /**
     * Click on practice forms
     */
    async clickOnPracticeForms(){
        await this.$forms().click();
        await browser.pause(2000);
    }
    /**
     * Enter the details
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {string} userEmail 
     * @param {string} userNumber 
     */
    async enterDetails(firstName, lastName,userEmail,userNumber){
        await this.$details(firstName).setValue("Sreerag");
        await this.$details(lastName).setValue("K");
        await this.$details(userEmail).setValue("tester@gmail.com");
        await this.$gender("Gender","Male").isClickable();
        await this.$gender("Gender","Male").click();
        await this.$details(userNumber).setValue("1234554321");
        await this.$submitButton().scrollIntoView({ block : "center"}); 
        await this.$subject().setValue("Hindi");        
        await this.$hobbies("Hobbies","Sports").click();
    }
    /**
     * Click on the submit button
     */
    async clickOnSubmitButton(){
        await this.$submitButton().scrollIntoView({ block : "end"});
        await this.$submitButton().click();
        await browser.pasue(2000);
    }
    /**
     * Enter the current address
     */
    async currentAddress(){
        let address = "Friends Lane";
        await this.$currentAddress().setValue(address);
        await browser.pause(2000);
    }
}
export const formsPage = new FormsPage();