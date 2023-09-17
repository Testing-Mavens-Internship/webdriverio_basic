export default class Common {
    //locator
    constructor(){
        this.$header = () => $(`//a[@class="logo"]`);
    }
    /**
    * function for launching url
    */
   async openUrl() {
    await browser.url('https://www.akbartravels.com/in/flight?lan=en');
    await browser.maximizeWindow();
    await this.$header().waitForDisplayed({setTimeout:20000});
 }
}