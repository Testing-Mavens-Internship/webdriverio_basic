export default class Common{
    constructor(){
        this.$menuBar =  () => $(`//div[contains(@class,"mobile-nav-toggle")]/..//..//div[@class="row"]`);
        this.$header = () => $(`//a[text()="MYDESIGNATION"]`);
        this.$subHeader = (subject) => $(`//h3[text()="${subject}"]`)
    }
    /**
     * Used to start the website
     */
    async openUrl() {
        await browser.url('https://www.mydesignation.com/');
        await browser.maximizeWindow();
    }
}