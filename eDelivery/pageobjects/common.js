export default class Common{
    constructor(){
        this.$header = () => $('//img[@class="img-responsive"]'); 
    }
    async launchUrl(){
    await browser.url("https://edelivery.zoproduct.com/");
    await browser.maximizeWindow();
    await browser.pause(5000);
    }
}