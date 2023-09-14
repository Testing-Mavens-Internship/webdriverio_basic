export default class Common {
    constructor() {

    }
    async loadUrl() {
        await browser.url('https://edelivery.zoproduct.com/')
        await browser.maximizeWindow();
    }
}