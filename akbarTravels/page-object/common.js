export default class Common{
    constructor(){
        this.$logo = () => $(`//div[@class="logo"]`)
        this.$flight =() => $(`//a[@href="https://www.akbartravels.com/in/flight"]//h3`)
    }
    /**
     * Method to launch the akbar travels url
     */
    async openUrl(){
        await browser.url('https://www.akbartravels.com/');
        await browser.maximizeWindow();
        await browser.refresh();
        await this.$logo().waitForDisplayed({timeout:40000});
        await this.$flight().click();
        await browser.pause(20000);
        
        //await this.$radioButton("One Way").waitForDisplayed({timeout:40000});

    }
}