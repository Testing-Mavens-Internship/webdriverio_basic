import Common from "./common-page.js";

class Home extends Common{
    constructor(){
        super()
        this.$loginButton = ()=>$('//button[contains(text(),"Login")]')
        this.$loginHeader = (type="Login")=>$(`//div[contains(text(),"${type}")]`)
        this.$signUpButton = ()=>$('//a[contains(text(),"Signup Now")]')
        this.$inputField = (field)=>$(`//input[@placeholder="${field}"]`)
    }
    /**
     * Click on login button and navigate
     */
    async clickOnLoginButton(){
        await this.$loginButton().click()
        await this.$loginHeader().waitForDisplayed({timeout:20000})
    }
    /**
     * Click on signup button
     */
    async clickOnSignUpButton(){
        await this.$signUpButton().click()
        await this.$loginHeader("Register").waitForDisplayed({timeout:20000})
    }
    async setName(){
        var random = require('random-name')
        await this.$inputField("First Name").setValue(random.first())
        await this.$inputField("Last Name").setValue(random.last())
    }
}
export const homePage = new Home()