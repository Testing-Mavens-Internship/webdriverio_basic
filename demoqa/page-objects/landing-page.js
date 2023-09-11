// const {elementsPage} = require('../page-objects/elements-page.js')
class LoginPage {
    constructor() {
        this.$tileName = (name) => $(`//div[@class="category-cards"]//h5[text()="${name}"]`);
        this.$header = () => $('div[id="app"] header img');
    }


    /**
     * loading the url
     */
    async openUrl() {
        await browser.url('https://demoqa.com/');
        await browser.maximizeWindow();
        //await browser.pause(5000);
        await this.$header().waitForDisplayed({timeout:20000});
    }

    /**
     * click on tiles
     * @param {string} tileName 
     */
    async clickOnTile(tileNameInPage) {
       // await this.$tileName(tileNameInPage).scrollIntoView({block: 'center'});
       await this.$tileName(tileNameInPage).isClickable
        await this.$tileName(tileNameInPage).click();
        //await browser.pause(5000);
        //await elementsPage.$header().waitForDisplayed({timeout:20000});
    }
}
export const landingPage = new LoginPage();

// module.exports=

// {

//     landingPage :new LoginPage()

// }