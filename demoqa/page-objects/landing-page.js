class LoginPage {
    constructor() {
        this.$tileName = (name) => $(`//div[@class="category-cards"]//h5[text()="${name}"]`);
        this.$header = () => $('div[id="app"] header img');
        this.$headerForm = () => $("div.main-header", "Forms")
        this.$formHeader = () => $(`//div[@class="card-body"]//h5[text()="Forms"]`)
    }


    /**
     * loading the url
     */
    async openUrl() {
        await browser.url('https://demoqa.com/');
        await browser.maximizeWindow();
        //await browser.pause(5000);
        await this.$header().waitForDisplayed({ timeout: 2000 });
    }

    /**
     * click on tiles
     * @param {string} tileName 
     */
    async clickOnTile(tileNameInPage) {
        await this.$tileName(tileNameInPage).scrollIntoView({ block: 'center' });
        await this.$tileName(tileNameInPage).waitForClickable(3000)
        await this.$tileName(tileNameInPage).click();
        //await browser.pause(3000);
    }
    async clickOnForm() {
        await this.$formHeader().scrollIntoView({ block: 'center' });
        await this.$formHeader().click()

    }
}
export const landingPage = new LoginPage();