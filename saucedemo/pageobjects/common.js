export default class Common {
    constructor(){
        this.$header = () => $('//div[text()="Swag Labs"]');
    }

    async openUrl() {
        await browser.url('https://www.saucedemo.com/'); 
        await browser.maximizeWindow();
        await browser.pause(2000); 
    }

}