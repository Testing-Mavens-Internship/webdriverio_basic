export default class Common {
    constructor(){
        /**elements */
        this.$logo =() => $ ('//div[@class="logo"]')
    }
    async OpenUrl(){
        await browser.url("https://www.akbartravels.com/in/home")
        await browser.maximizeWindow();
        await this.$logo().waitForDisplayed({timeout:2000});
    }
}