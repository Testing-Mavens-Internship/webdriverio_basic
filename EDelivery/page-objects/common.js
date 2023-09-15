export default class Common{
    constructor(){
        this.$header=()=>$(`//img[@class="img-responsive"]`)     // website logo
    }
    async launchUrl()
    {
        await browser.url("https://edelivery.zoproduct.com/");
        await browser.maximizeWindow();
        await this.$header().wa
    }
}