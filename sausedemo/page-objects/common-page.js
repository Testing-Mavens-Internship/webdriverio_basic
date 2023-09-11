export default class CommonPage{
    constructor(){
        this.$header = () => $('//div[text()="Swag Labs"]')
        this.$userLogin = (user) => $(`//input[@id="${user}"]`)
        this.$submit = () => $('//input[@type="submit"]')
    }
    /**
     * load url
     */
    async openUrl() {
        await browser.url('https://www.saucedemo.com/');
        await browser.maximizeWindow( );
        await this.$header().waitForDisplayed({timeout: 20000});
    }
    /**
     * login using username and password
     * @param {string} userName 
     * @param {string} password 
     */
    async login(userName,password){
        await this.$userLogin("user-name").setValue(userName);
        await this.$userLogin("password").setValue(password);
        await this.$submit().click();
    }

}