export default class Common {
    //locator
    constructor(){
        this.$header = () => $(`//img[@title="Flipkart"]`);
        this.$closeButton = ()=>$(`//button[@class="_2KpZ6l _2doB4z"]`)
    }
    /**
    * function for launching url
    */
   async openUrl() {
    await browser.url('https://www.flipkart.com/');
    await browser.maximizeWindow();
    await this.$header().waitForDisplayed({setTimeout:20000});
 }
}