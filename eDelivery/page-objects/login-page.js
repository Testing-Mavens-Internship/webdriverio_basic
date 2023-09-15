import Common from "./common.js";

class LoginPage extends Common{
    constructor(){
        super();
        this.$loginButton = () => $('//button[contains(text(),"Login")]')
        this.$signUpButton = () => $('//a[contains(text(),"Signup Now")]')
        this.$inputField =(value) => $(`//input[@id="${value}"]`)
        this.$registerHeader = () => $('//div[contains(text(),"Register")]')
        this.$continueButton = () => $('//button[contains(text(),"Continue")]')
        this.$loginTab =() => $('//a[contains(text(),"Log In")]')
        this.$successfullMessage = () => $('//div[@class="toast toast-success"]');
        this.$loadingErrorMessage = () => $(`//h1[contains(text(),'404 Not Found')]`);
    }
    /**
     * Method to launch url
     */
    async openUrl(){
        await browser.url("https://edelivery.zoproduct.com/")
        if(await this.$loadingErrorMessage().isDisplayed()){
            await browser.newWindow("https://edelivery.zoproduct.com/");
            await browser.refresh();
        }
        await browser.maximizeWindow();
        await this.$logo().waitForDisplayed({timeout:5000})
    }
    /**
     * Method to Click on signup
     */
    async clickOnSignUp(){
        await this.$loginButton().click();
        await this.$signUpButton().waitForClickable({timeout:20000})
        await this.$signUpButton().click();
        await this.$registerHeader().waitForDisplayed({timeout:20000})
    }
    /**
     * Method to fill the credentials in the signup page
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {string} mobileNumber 
     */
    async fillForm(firstName,lastName, mobileNumber){
        await this.$inputField("first_name").setValue(firstName);
        await this.$inputField("last_name").setValue(lastName);
        await this.$inputField("email").setValue(firstName +"@gmail.com");  
        await this.$inputField("tel").setValue("9" + mobileNumber);
        await this.$continueButton().waitForClickable({timeout:20000}); 
        await this.$continueButton().waitForClickable(20000);
        await this.$continueButton().click();
        await this.$loginTab().waitForClickable({timeout:20000});
        //let mobileNumber = await Math.floor("9" + Math.random()*1000000000)
    }
    /**
     * Method to click the login button in the otp page
     */
    async login(){
        await this.$loginTab().click();
        await this.$successfullMessage().waitForDisplayed({timeout:2000});
    }
}
export const loginId = new LoginPage()