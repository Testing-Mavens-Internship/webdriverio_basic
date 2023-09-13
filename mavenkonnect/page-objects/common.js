export default class Common{
    constructor(){
        this.$header = () => $('//a[@class="navbar-brand"]')   
        this.$verifyThankYou = () => $('//h1[contains(text(),"THANK")]')
    }
    /**
     * Method to launch url
     */
async openUrl() {
    await browser.url('https://demotmwebsite.github.io/');
    await browser.maximizeWindow( );
    await this.$header().waitForDisplayed({timeout: 20000});
}
}