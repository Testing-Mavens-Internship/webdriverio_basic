import Common from "./common.js";
class HomePage extends Common{
    constructor(){
        super();
        this.$FromToDirection=(FromTo)=>$(`//input[@placeholder="${FromTo}"]`) // From / To (for input)
        this.$selectDirection=(selectDirection)=>$(`//strong[text()="${selectDirection}"]`) // From / To selecting a specific direction
        this.$FromToValidate=(validate)=>$(`//h6[contains(text(),"${validate}")]`) // selected place validation
        this.$date=()=>$(`//div[text()="October "]/..//div[text()=" 5 "]`) //date of travel
        this.$dateValidate=()=>$(`//h6[text()="05 "]/span[text()="Oct’23"]/../../p[text()="Thursday"]`) //date validation
        this.$travellersAdd=(traveler)=>$(`//p[contains(text(),"${traveler}")]/../div//div[text()="+"]`) // selecting number of travellers
        this.$classType=()=>$(`//div[contains(text(),"Premium Economy")]`)
        this.$applyButton=()=>$(`//span[text()="Apply"]`) //apply button

    }/**
     * Function for selecting the From and To locations
     */
    async selectingFlightLocations(){
        await this.$fromAndTo("FROM").click()
        await this.$FromToDirection("From").setValue("Cochin")
        await this.$selectDirection("COK").click()
        await this.$FromToDirection("To").setValue("Mumbai")
        await this.$selectDirection("BOM").click()
        
    }
    async selectingDate(){
        await this.$date().click()
        
    }
    async addingTravelers(){
        for(let i=0;i<2;i++){
            await this.$travellersAdd("Adult").click()
        }
        for(let j=0;j<2;j++){
            await this.$travellersAdd("Children").click()
        }
        await this.$classType().click()
        await this.$applyButton().click()
        await browser.pause(3000)
        }

}
export const homePage = new HomePage()