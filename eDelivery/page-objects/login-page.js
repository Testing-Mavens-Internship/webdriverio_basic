import Common from "./common.js";

class LoginPage extends Common{
    constructor(){
        super();
        this.$signupThenLogin = (option) => $(`//a[contains(text(),"${option}")]`)
        this.$validateSignUp = () => $('//div[contains(text(),"Register")]')
        this.$fillField = (name) => $(`//div//input[@id="${name}"]`)
        this.$button = (option) => $(`//button[contains(text(),"${option}")]`)
        this.$validateContinue1 = () => $('//div[@class="toast toast-success"]')
        this.$validateContinue2 = () => $('//span[@class="user-name ng-binding"]')
        this.$enterLocation = () => $('//input[@id="searchlocation"]')
        this.$selectLocation = () => $(`//span[text()="Chennai"]//..//following-sibling::span[text()="Tamil Nadu, India"]`)//${location}
        this.$clickShowButton = () => $('//span[text()="SHOW BUSINESS"]')
    }
    async clickSignUp(){
        await this.$button("Login ").waitForClickable({timeout : 4000})
        await this.$button("Login ").click();
        await this.$signupThenLogin("Signup Now").waitForClickable({timeout : 4000})
        await this.$signupThenLogin("Signup Now").click();
        await this.$validateSignUp().waitForDisplayed(2000);
    }
    async fillFormField(firstName,lastName,email,number){
        await this.$fillField("first_name").setValue(firstName);
        await this.$fillField("last_name").setValue(lastName)
        await this.$fillField("email").setValue(email + "@gmail.com");
        await this.$fillField("tel").setValue("9"+number);
        await this.$button("Continue").click();
        await this.$signupThenLogin("Log In").click();
        await this.$validateContinue1().waitForDisplayed(2000);
    }
    
    async selectServiceLocation(place){
        await this.$enterLocation().waitForClickable({timeout : 2000})
        await this.$enterLocation().setValue(place);
        await this.$selectLocation().waitForClickable({timeout : 3000})
        await this.$selectLocation().click();
        await this.$header().waitForDisplayed(4000);
    }
}
export const loginPage = new LoginPage()