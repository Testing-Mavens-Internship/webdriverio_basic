export default class CommonPage{
    constructor(){
        this.$logo = () => $(`//div[@class="logo"]`);
        this.$menuIcon = (list) => $(`//h3[contains(text(),"${list}")]/..`);
        this.$header = (text) => $(`//h1[contains(text(),'${text}')]`) ;
    }
    /**
     * load url of Akbar Travels application
     */
    async openUrl(){
        await browser.url('https://www.akbartravels.com/');
        await browser.maximizeWindow();
        await this.$logo().waitForDisplayed({ timeout: 3000 });
    }
    /**
     * Method for click on menu icon
     * @param {string} icon 
     */
    async clickOnMenuIcon(icon){
        await this.$menuIcon(icon).click();
    }
}