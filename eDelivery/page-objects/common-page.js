export default class CommonPage{
    constructor(){
        this.$logo = () => $(`//div[@class="navbar-header logo-head"]`);
        this.$button = (value)  => $(`//button[contains(text(),'${value}')]`);
        this.$popup =(title) => $(`//div[@class="pop_tle"][contains(text(),'${title}')]`);
    }
    /**
     * load url of E-Delivery application
     */
    async openUrl(){
        await browser.url('https://edelivery.zoproduct.com/');
        await browser.maximizeWindow();
        await this.$logo().waitForDisplayed({ timeout: 3000 });
    }
}