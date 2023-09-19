export default class CommonPage{
    constructor(){
        this.$logo = () => $(`//div[@class="_3qX0zy"]`);
        this.$menuIcon = (list) => $(`//div[@class="eFQ30H"]//div[contains(text(),'${list}')]`);
        this.$header = (text) => $(`//div[@class="lAXZRO"][contains(text(),'${text}')]`);
        this.$loginPopUp = () => $(`//div[@class="_2QfC02"]`);
        this.$button = (value) => $(`//button[contains(text(),'${value}')]`);
    }
    /**
     * load url of Flipkart application
     */
    async openUrl(){
        await browser.url('https://www.flipkart.com/');
        await browser.maximizeWindow();
        await this.$loginPopUp().waitForDisplayed({ timeout : 3000}) 
        || await this.$loginPopUp2().waitForDisplayed({ timeout : 2000});
    }
    /**
     * Method for closing login popup
     */
    async clickOnClose(){
        await this.$button('✕').click();
        await this.$logo().waitForDisplayed({ timeout : 2000 });
    }
}