

import { elementsPage } from "../page-objects/elements-page.js";

 

class LoginPage {

    constructor() {

        this.$header = () => $('div[id="app"] header img');

        this.$tileName = (name) => $(`//div[@class="category-cards"]//h5[text()="${name}"]`);

    }

 

 

    /**

     * loading the url

     */

    async openUrl() {

        await browser.url('https://demoqa.com/');

        await browser.maximizeWindow();

        await this.$header().waitForDisplayed({timeout: 20000});

    }

 

    /**

     * click on tiles

     * @param {string} tileName

     */

    async clickOnTile(tileNameInPage) {

        await this.$tileName(tileNameInPage).scrollIntoView({block: 'center'});

        await this.$tileName(tileNameInPage).click();

        await elementsPage.$header().waitForDisplayed({timeout: 20000});

    }

}

 

 

export const landingPage = new LoginPage();