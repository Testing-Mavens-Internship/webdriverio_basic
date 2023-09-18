import Common from "./common.js";

class LandingPage extends Common {

    constructor () {
        super();
        this.$login = () => $('//button[text()="Login "]');
        this.$signup = () => $('//a[@class="signup_btn"]')
        this.$verifySignUp = () => $(`//div[@class="pop_header"]`);
        this.$input = (value) => $(`//input[@name="last_name"]`);
    }

    async clickOnLogin () {
        await this.$login().waitForDisplayed({timeout : 5000});
        await this.$login().click();
        await this.$signup().click();

    }
    

async enterText(firstName, lastName, email, phone) {
        await this.$details('first_name').setValue(firstName);
        await this.$details('last_name').setValue(lastName);
        await this.$details('email').setValue(email);
        await this.$details('tel').setValue(phone);
        await this.$continue().click();

    }

}

export const landingPage = new LandingPage();