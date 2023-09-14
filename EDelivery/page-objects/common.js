export default class Common{
    constructor(){
    }
    async launchUrl()
    {
        await browser.url("https://edelivery.zoproduct.com/");
        await browser.maximizeWindow();
    }
}