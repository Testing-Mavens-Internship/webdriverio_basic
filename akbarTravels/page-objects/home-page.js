import  Common  from "./common.js";
class Home extends Common{
    constructor(){
        super();
        this.$personalzedUpdates = () =>$('//button[@class = "No thanks"]');
        this.$login = () =>$('(//span[@class = "mat-button-wrapper"][contains(text(), "Login / Register")])[1]');
        this.$fromToDePartReturn = (values) =>$(`//li[@id="${values}"]`);
        this.$fromValidation = (from) =>$(`//li[@id="liFrom"]//h6[text() ="${from}"]`);

        this.$toValidation = (to) =>$(`//li[@id = "liTo"]//h6[text() = "${to}"]`)

        this.$departureHeader = () =>$('//h3//span[contains(text(),Departure)]')
        this.$departureDate = () =>$('(//div[@fxlayout="column" and @fxlayoutalign="center center"][contains(text(),"23")])[1]')
        this.$depValidation = (departure) =>$(`//li[@id = "liOn"]//h6[contains(text(),"${departure}")]`)
        
        this.$travelers = () =>$('//li[@class = "travellers"]');
        this.$travelerIncrement = (person) =>$(`//p[contains(text(),"${person}")]/following-sibling::div[@class = "btnouter"]//div[contains(text(),"+")]`)
        this.$travelerDecrement = (person) =>$(`//p[contains(text(),"${person}")]/following-sibling::div[@class = "btnouter"]//div[contains(text(),"-")]`)
        this.$flightType = (type) =>$(`//div[@class ="mat-radio-label-content"][(text()="${type}")]`)
        this.$apply = () =>$('//button/span[text() = "Apply"]');
        this.$travelerHeader = () =>$('//li[@class = "travellers"]//h6[contains(text(),"4")]')

        this.$searchFlight = () =>$('//li//button/span[text() ="Search Flights"]');
        this.$newHeader = () =>$('//button[@class ="btn"]/span[@class ="text"]');
        
        
        
    }
    /**
     * Method to close on personalized updates
     */
    async clickOnLaterPersonalizedUpdated(){
        await this.$personalzedUpdates().isClickable();
        await this.$personalzedUpdates().click();
    }
    /**
     * Method to choose the from location
     */
    async clickOnFromPlace(){
        await this.$fromToDePartReturn("liFrom").click();
        await this.$fromToDePartReturn("COK").click();
    }
    /**
     * Method to choose the to location 
     */
    async clickToPlace(){
        await this.$fromToDePartReturn("BOM").click(); 
    }
    /**
     * Method to click on the departure and selecting a date 
     */
    async clickOnDeparture(){
        await this.$departureHeader().isDisplayed();
        await this.$departureDate().click();
    }
    /**
     * Method to click the traveler type
     */
    async clickOnTrvaeler(){
        await this.$travelerIncrement("Adult").click();
        await this.$travelerIncrement("Children").doubleClick();
        await this.$flightType(" Premium Economy").waitForDisplayed()
    }
    /**
     * Method to choose the flight type 
     */
    async clickOnFlightType(){
        await this.$flightType(" Premium Economy").click()
    }
    /**
     * Method to click apply
     */
    async clickOnApply(){
        await this.$apply().click();
    }
    /**
     * Method to click on search flights
     */
    async clickOnSearchFlights(){
        await this.$searchFlight().click();
    }
}
export const akbarHome = new Home();