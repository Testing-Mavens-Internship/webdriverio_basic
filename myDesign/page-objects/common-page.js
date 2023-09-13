export default class CommonPage{
    constructor(){
        this.$title = () => $('//a[@class="logo"]');
        // this.$header =(header) => $(`//span[text()="${header}"]`);
        // this.$button = (value) => $(`//button[text()='${value}']`);
    }
    /**
     * load url of mydesignation
     *
     */
    async openUrl(){
        await browser.url('https://www.mydesignation.com/');
        await browser.maximizeWindow();
        await this.$title().waitForDisplayed({ timeout: 2000 });

    }
}