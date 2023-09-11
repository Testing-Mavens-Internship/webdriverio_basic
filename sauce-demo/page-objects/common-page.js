export default class Common{
    constructor(){
        this.$header = ()=> $('//div[text()="Swag Labs"]')
        this.$inputField = (input)=> $(`//input[@id="${input}"]`)
    }

    async openUrl() {
        await browser.url('https://www.saucedemo.com/');
        await browser.maximizeWindow();
    }
    async loginUser(){
        await this.$inputField("user-name").setValue("standard_user")
        await this.$inputField("password").setValue("secret_sauce")
        await this.$inputField("login-button").click()
    }
}
