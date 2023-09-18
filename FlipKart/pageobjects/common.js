export default class Common {
    //locator
    constructor(){
        this.$header = () => $(`//img[@title="Flipkart"]`);
        this.$closeButton = ()=>$('//*[text()="✕"]');
    }
    /**
    * function for launching url
    */
   async openUrl() {
    await browser.url('https://www.flipkart.com/');
    await browser.maximizeWindow();
    await this.$closeButton().click();
    await this.$header().waitForDisplayed({setTimeout:20000});
 }
}