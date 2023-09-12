export default class CommonPage{
    constructor(){
        this.$header = () => $('//a[@class="logo"]')   
    }
async openUrl() {
    await browser.url('https://www.mydesignation.com/');
    await browser.maximizeWindow( );
    await this.$header().waitForDisplayed({timeout: 20000});
}
}