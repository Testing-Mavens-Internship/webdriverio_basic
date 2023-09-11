export default class Common {
    constructor(){
        this.$header = () => $('//div[text()="Swag Labs"]');
    }

    async openUrl() {
        await browser.url('https://www.saucedemo.com/'); // Launch the site
        await browser.maximizeWindow();
        await browser.pause(5000); // time in millis
    }

}