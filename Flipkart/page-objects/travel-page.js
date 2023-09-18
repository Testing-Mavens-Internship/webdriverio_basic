import Common from "./common.js";
class TravelPage extends Common{
    constructor(){
        super();
        this.$direction=(value)=>$(`//input[@tabindex="${value}"]`) // From / To (locations)
        this.$selectLocation=(location)=>$(`//div[text()="${location}"]`) // COK / BOM (From - To locations)
        this.$departdate=(date)=>$(`//div[text()="September 2023"]/../../../.././/button[text()="${date}"]`) //selecting the date
        this.$passengers=(type)=>$(`(//div[text()="${type}"]/../following-sibling::div//button)[2]`)// adding no of passengers
        this.$typeOfClass=(name)=>$(`//div[text()="${name}"]`) // choosing type of class
        this.$doneButton=()=>$(`//button[text()="Done"]`) //done Button
        this.$searchButton=()=>$(`//span[text()="SEARCH"]`) //search button
    }
    /**
     * Function for adding passenfer details
     * @param {String} directionFrom 
     * @param {String} directionTo 
     * @param {String} locationFrom 
     * @param {String} locationTo 
     * @param {String} locationNameFrom 
     * @param {String} locationNameTo 
     * @param {String} date 
     * @param {String} adult 
     * @param {String} children 
     * @param {String} noOfAdult 
     * @param {String} noOfChildren 
     * @param {String} className 
     */
    async searchFlight(directionFrom,directionTo,locationFrom,locationTo,locationNameFrom,locationNameTo,date,adult,children,noOfAdult,noOfChildren,className)
    {
        //await this.$direction(directionFrom).scrollIntoView({block:"center"})
        // await this.$direction(directionFrom).waitForClickable({timeout:20000})
        await this.$direction(directionFrom).click();
        await this.$direction(directionFrom).setValue(locationNameFrom)
        await this.$selectLocation(locationFrom).click()
        await this.$direction(directionTo).setValue(locationNameTo)
        await this.$selectLocation(locationTo).click()
        await this.$departdate(date).click()
        for(let i=0;i<=noOfAdult;i++)
        {
            await this.$passengers(adult).click()
        }
        for(let j=0;j<=noOfChildren;j++)
        {
            await this.$passengers(children).click() 
        }
        await this.$typeOfClass(className).click()
        await this.$doneButton().click()
        await this.$searchButton().click()
        await browser.pause(3000)

    }
}
export const travelPage= new TravelPage()