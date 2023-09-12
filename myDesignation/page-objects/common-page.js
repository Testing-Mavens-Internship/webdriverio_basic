export default class CommonPage{
    constructor(){
        this.$logo = () => $(`//a[@class="logo"]`);
        this.$itemName = (item) => $(`//h3//a[contains(text(),'${item}')]`)
    }
    /**
     * load url of My Designation
     */
    async openUrl(){
        await browser.url('https://www.mydesignation.com/');
        await browser.maximizeWindow();
        await this.$logo().waitForDisplayed({ timeout: 2000 });

    }
}