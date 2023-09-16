import  Common  from "./common.js";
class HomeFlipkart extends Common{
    constructor(){
        super();
        this.$closeLogin =() =>$('//button[text()="✕"]')
        this.$closeLoginAlternate = () =>$('//span[text()="✕"]');
        this.$flipKartHeader = ()=>$('//img[@title="Flipkart"]');
        this.$clickType = (data) =>$(`//div[@class ="xtXmba"][text()="${data}"]`)
        this.$travelClick = () =>$('//img[@alt="Travel"]')
        

    }
    /**
     * Method to click on the close button in the login pop up
     */
    async clickCloseLogin(){
        let closeLogin = await this.$closeLogin().isClickable();
        if(closeLogin){
            await this.$closeLogin().click();
        }
        else 
        await this.$closeLoginAlternate().click();
    }
    /**
     * Click on the travel button present in the home screen
     */
    async clickOnTravel(){
        let type =await this.$clickType("Travel").isClickable();
        if(type){
            await this.$clickType("Travel").click();
        }
        else 
        await this.$travelClick().click(); 
    }
}
export const homeFlipkart = new HomeFlipkart()