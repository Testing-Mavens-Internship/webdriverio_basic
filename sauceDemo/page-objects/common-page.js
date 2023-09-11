 export default class Common{
    constructor(){
        this.$headers = () => $('//div[@class = "login_logo"]');
        this.$submit = () => $('//input[@type="submit"]');
        this.$input = (values) => $(`//input[@name="${values}"]`);
        this.$submit = () => $('//input[@type="submit"]');
    }
    /**
     * Opening the URL
     */
    async openUrl() {
        await browser.url("https://www.saucedemo.com/");
        await browser.maximizeWindow();
    } 
    /**
     * Enter the user name and password and click the submit button
     */
    async enterTheDetails(){
        await this.$input('user-name').setValue('standard_user');
        await this.$input('password').setValue('secret_sauce');
        await this.$submit().click();
        await browser.pause(2000);
    }
}