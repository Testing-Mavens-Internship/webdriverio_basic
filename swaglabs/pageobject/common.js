 export default class LoginPage{
    constructor(){
        this.$button = (buttonName) => $(`//button[text()="${buttonName}"]`);
    }
    /**
     * To load the url
     */
    async openUrl(){
        await browser.url('https://www.saucedemo.com/v1/');
        await browser.maximizeWindow();
    }
}
