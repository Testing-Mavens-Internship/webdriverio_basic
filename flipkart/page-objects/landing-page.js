import Common from "./Common.js";

class LandingPage extends Common{
constructor(){
    super()
    this.$travel=()=>$('//img[@alt="Travel"]')
    
    this.$travelHeader=()=>$('//div[text()="Travel"]')

    
}
/**
 * Methos to click on travel option
 */
async clickOnTravel(){
   
  
    await this.$travel().click()
    await this.$travelHeader().waitForDisplayed({timeout:10000})
   
}
}
 export const landingPage = new LandingPage()