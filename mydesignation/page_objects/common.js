export default class Common {
    constructor() {}

    /**
     * lanuch the web app
     */
    async openUrl() {
        await browser.url("https://www.mydesignation.com/");
        await browser.maximizeWindow();
    }
}