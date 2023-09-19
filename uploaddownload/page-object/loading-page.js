class LaunchPage{
    constructor() {
        this.$logo = () => $('//div[@id="app"]//header//img');
        this.$tile = (name) => $(`//div[@class="category-cards"]//h5[text()="${name}"]`)
        this.$header = () => $('div.main-header', 'Elements');


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
        
    }
} 
 export const launchP= new LaunchPage()
