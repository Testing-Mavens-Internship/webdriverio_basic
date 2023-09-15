import Common from "./common.js";

class HomePage extends Common{
    constructor(){
        super();
        this.$signupThenLogin = (option) => $(`//a[contains(text(),"${option}")]`)
        this.$validateSignUp = () => $('//div[contains(text(),"Register")]')
        this.$fillField = (name) => $(`//div//input[@id="${name}"]`)
        this.$button = (option) => $(`//button[contains(text(),"${option}")]`)
        this.$validateContinue1 = () => $('//div[@class="toast toast-success"]')
        this.$validateContinue2 = () => $('//span[@class="user-name ng-binding"]')
        this.$selectService = (service) => $(`//div[@class="looper ng-scope slick-slide slick-cloned"]//p[text()="${service}"]`)
        //div[@class="looper ng-scope slick-slide slick-active"]//p[text()="Grocery"]
        this.$enterLocation = () => $('//input[@id="searchlocation"]')
        this.$selectLocation = () => $('//span[text()="Chennai"]//..//following-sibling::span[text()="Tamil Nadu, India"]')
        this.$clickShowButton = () => ('//span[text()="SHOW BUSINESS"]')
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
    async selectServiceLocation(){
        await this.$selectService("Grocery").waitForClickable({timeout : 10000})
        await this.$selectService("Grocery").click();
        await this.$enterLocation().setValue("Chennai");
        await this.$selectLocation().waitForClickable({timeout : 6000})
        await this.$selectLocation().click();
        if(await this.$clickShowButton().isClickable()){
            await this.$clickShowButton().click();
        }
    }
}
export const homePage = new HomePage()