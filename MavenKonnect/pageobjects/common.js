export default class Common {
    //locator
    constructor(){
        this.$header = () => $(`//span[contains(text(),"MavenKonnect")]`);
   }
    /**
    * function for launching url
    */
    async openUrl() {
        await browser.url('https://demotmwebsite.github.io/');
        await browser.maximizeWindow();
        await this.$header().waitForDisplayed({setTimeout:20000});
     }
}