export default class Common{
    constructor(){
        this.$mainHeader=()=>$(`//div[@class="main-logo"]`) //main logo
        this.$fromAndTo=(ditection)=>$(`//label[text()="${ditection}"]`) // To / From (for clicking)
        this.$tripDetialsValidation=()=>$('//h2[contains(text(),"BOM")]/span[text()="Mumbai"]/../../h2[contains(text(),"COK")]/span[text()="Cochin"]') //validate trip 


        

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