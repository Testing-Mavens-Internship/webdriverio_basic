export default class Common
{
    constructor(){
        this.$header = () => $('//a[@class="logo"]');
        
    }
async loadPage(){
    await browser.url("https://www.akbartravels.com/in/flight?lan=en")
    await browser.maximizeWindow();
    await this.$header().waitForDisplayed({timeout:2000})
}
}

