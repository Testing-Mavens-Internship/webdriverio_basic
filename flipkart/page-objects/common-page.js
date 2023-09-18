export default class Common{
    constructor(){
        this.$header = ()=>$('//img[@title="Flipkart"]')
        this.$button = (text="✕")=>$(`//button[text()="${text}"]`)
        this.$page = (page)=>$(`//div[text()="${page}"]`)
    }
    /**
     * Function to load the website
     */
    async openUrl() {
        await browser.url('https://www.flipkart.com/');
        await browser.maximizeWindow();
        await this.$header().waitForDisplayed({timeout:20000})
        await this.$button().waitForDisplayed({timeout:20000})
    }
    async close(){
        await this.$button().click()
        await this.$header().waitForDisplayed({timeout:20000})
    }
}