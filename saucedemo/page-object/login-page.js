import Common from "./common.js";

class LoginPage extends Common{
    constructor(){
        super();
    }
    /**
     * launching the url
     */

    async openUrl() {
        await browser.url('https://www.saucedemo.com/');
        await browser.maximizeWindow();
    }
    /**
     * entering the credentials and login
     */
    async login(){
        await this.$credential("user-name").setValue("standard_user")
        await this.$credential("password").setValue("secret_sauce")
        await this.$credential("login-button").click()
    }


}
export const loginPage = new LoginPage()