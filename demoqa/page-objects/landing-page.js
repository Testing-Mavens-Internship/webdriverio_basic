import { elementPage }  from "./01-element-page.js";

class LaunchPage{
    constructor() {
        this.$logo = () => $('//div[@id="app"]//header//img');
        this.$tile = (name) => $(`//div[@class="category-cards"]//h5[text()="${name}"]`)
    }

   /**
    * Launch the url
    */
   
    async openUrl() {
        await browser.url('https://demoqa.com/');
        await browser.maximizeWindow();
        await this.$logo().waitForDisplayed({timeout:20000}) 
    }
    /**
     * click on the element tile
     * @param {string} tileName 
     */

    async clickOnTile(tileName) {
        await this.$tile(tileName).scrollIntoView({block:"center"});
        await this.$tile(tileName).click();
        await elementPage.$header("Elements").waitForDisplayed({timeout:20000});
        // await elementPage.$button("Web Table").waitForDisplayed({timeout:20000});
    }
} 
 export const launchPage= new LaunchPage()
