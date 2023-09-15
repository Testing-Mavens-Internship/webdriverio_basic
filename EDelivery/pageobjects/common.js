export default class Common {
    //locator
    constructor(){
        this.$header = () => $(`//a[@class="navbar-brand"]`);
   }
    /**
    * function for launching url
    */
    async openUrl() {
        await browser.url('https://edelivery.zoproduct.com/');
        await browser.maximizeWindow();
        await this.$header().waitForDisplayed({setTimeout:20000});
     }
}