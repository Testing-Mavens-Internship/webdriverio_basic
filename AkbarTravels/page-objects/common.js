export default class Common{
    constructor(){
        this.$mainHeader=()=>$(`//div[@class="main-logo"]`) //main logo
        this.$fromAndTo=(ditection)=>$(`//label[text()="${ditection}"]`) // To / From (for clicking)

        

    }
    /**
     * Function to launch the website
     */
    async launchUrl(){
        await browser.url("https://www.akbartravels.com/")
        await browser.maximizeWindow();
        await browser.pause(3000)

    }
}