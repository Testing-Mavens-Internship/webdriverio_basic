export default class Common{
    constructor(){
        this.$header = ()=>$('//a[@class="navbar-brand"]')
    }
    /**
     * Function to load the website
     */
    async openUrl() {
        await browser.url('https://edelivery.zoproduct.com/');
        await browser.maximizeWindow();
    }
}