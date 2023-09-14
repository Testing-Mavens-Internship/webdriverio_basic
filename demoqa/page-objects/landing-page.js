class LoginPage {
    constructor() {
        this.$tileName = (name) => $(`//div[@class="category-cards"]//h5[text()="${name}"]`); // Dynamic locator
        this.$header = () => $('div[id="app"] header img'); // locator for elemnent header
    }


    /**
     * loading the url
     */
    async openUrl() {
        await browser.url('https://demoqa.com/'); // Launch the site
        await browser.maximizeWindow(); // First the site is launched in small size (to view window in max size)
        await browser.pause(5000); // time in millis
    }

    /**
     * click on tiles
     * @param {string} tileName 
     */
    async clickOnTile(tileNameInPage) { // Function to click on the tile
        await this.$tileName(tileNameInPage).scrollIntoView({block: 'center'}); // To scroll down to the center
        await this.$tileName(tileNameInPage).click(); 
        await browser.pause(10000);
    }
}
export const landingPage = new LoginPage();
