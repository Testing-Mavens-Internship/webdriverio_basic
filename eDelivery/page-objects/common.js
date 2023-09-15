export default class Common{
    constructor(){
        this.$header = () => $('//a[@class="navbar-brand"]')   
        this.$verifyThankYou = () => $('')
    }
    /**
     * Method to launch url
     */
async openUrl() {
    await browser.url('https://edelivery.zoproduct.com/');
    await browser.maximizeWindow( );
    await this.$header().waitForDisplayed({timeout: 20000});
}
}