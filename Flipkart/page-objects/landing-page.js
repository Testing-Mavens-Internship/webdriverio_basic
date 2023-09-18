import Common from "./common.js";
class LandingPage extends Common{
    constructor(){
        super();
        this.$loginPageHeader=()=>$(`//span[text()="Login"]`) //header on login popup
        //this.$travelButton=()=>$(`//span[text()="Travel"]`) // travel button
        this.$travelButton=()=>$(`//img[@alt="Travel"]`) // travel button
        
        this.$closeLogin =() =>$('//button[text()="✕"]')// login close icon
        this.$closeLoginAlternate = () =>$('//span[text()="✕"]');
        this.$travelHeader=()=>$(`//div[@class="lAXZRO"][text()="Travel"]`)
    }

    async clickOnCloseIcon(){
        let closeLogin = await this.$closeLogin().isClickable();
        if(closeLogin){
            await this.$closeLogin().click();
        }
        else 
        await this.$closeLoginAlternate().click();
        
        
    }
    async clickOnTravelButton(){
        await this. $travelButton().click();
        await browser.pause(3000)
        
    }

}
export const landingPage=new LandingPage()