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
        // await browser.setWindowSize(1600,500);
        await this.$header().waitForDisplayed({ timeout: 2000 });
    }
    /**
     * click on tiles
     * @param {string} tileName 
     */
    async clickOnTile(tileNameInPage) {
        await this.$tileName(tileNameInPage).scrollIntoView({ block: 'center' });
        await this.$tileName(tileNameInPage).click();
    }
}
// export const
export const openingPage = new LoginPage();
