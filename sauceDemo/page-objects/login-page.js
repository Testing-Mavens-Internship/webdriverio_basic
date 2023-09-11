import CommonPage from "./common-page.js";

class LoginPage extends CommonPage{
    constructor(){
        super();
        this .$loginField =(value) => $(`//input[@id="${value}"]`)
    }
    /**
     * Login to sauce demo
     * @param {string} userName 
     * @param {string} passWord 
     */
    async login(userName,passWord){
        await this.$loginField('user-name').setValue(userName);
        await this.$loginField('password').setValue(passWord);
        await this.$loginField('login-button').click();
        await this.$header('Products').waitForDisplayed({ timeout : 2000});

    }
}

export const loginPage = new LoginPage();