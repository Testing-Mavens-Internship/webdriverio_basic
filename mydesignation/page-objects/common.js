export default class Common{
    constructor(){
        this.$header = () => $('//a[@class="logo"]')   
    }
    /**
     * Method to launch url
     */
async openUrl() {
    await browser.url('https://www.mydesignation.com/');
    await browser.maximizeWindow( );
    await this.$header().waitForDisplayed({timeout: 20000});
}
}