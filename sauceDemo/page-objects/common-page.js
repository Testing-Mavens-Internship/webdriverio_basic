 export default class CommonPage{
    constructor(){
        this.$title = () => $(`//div[text()="Swag Labs"]`);
        this.$header =(header) => $(`//span[text()="${header}"]`);
        this.$button = (value) => $(`//button[text()='${value}']`);
    }
    /**
     * load url of Sauce Demo
     */
    async openUrl(){
        await browser.url('https://www.saucedemo.com/');
        await browser.maximizeWindow();
        await this.$title().waitForDisplayed({ timeout: 2000 });

    }
}