export default class Common{
    constructor(){
        this.$header = () => $('//a[@title="Flipkart"]')
        this.$secondHeader = (option) => $(`//div[text()="${option}"]`)
        this.$closeLogin1 = () => $('//button[text()="✕"]')
        this.$closeLogin2 = () => $('//span[text()="✕"]')
    }
    async openUrl() {
        await browser.url('https://www.flipkart.com/');
        await browser.maximizeWindow( );
        if(await this.$closeLogin1().isClickable()){
            await this.$closeLogin1().click();
        }
        else{
            await this.$closeLogin2().click();
        }
        await this.$header().waitForDisplayed({timeout: 20000});
    }
}