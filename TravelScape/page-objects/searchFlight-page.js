import Common from "../page-objects/common.js"
class FlightSearchPage extends Common{
    constructor(){
        super()
        this.$searchFlightHeader=()=>$(`//a[text()="Search Flights"]`) //Search Flight Header
        this.$filters=(filterName)=>$(`//label[text()="${filterName}"]/../div`) //filter 
        this.$FilterDropDown=(dropDownName)=>$(`//div[text()="${dropDownName}"]`) //  filter dropdown
        this.$checkBox=(checkBoxName)=>$(`//span[text()="${checkBoxName}"]`)
        this.$sortOption=()=>$(`//h6[text()="Sort By"]/..//div[@class=" css-1wy0on6"]`)
        this.$sortDropDown=(dropDownValue)=>$(`//div[text()="${dropDownValue}"]`) // sort dropdown value
        this.$$flightDetails=()=>$$(`//div[@class="jss2125 "]`)
    }
    async enableFilters(airlinesFilter,departureTimeFilter,arrivalTimeFilter,airlineName,departureTime,arrivalTime,checkBoxName,dropDownValue){
        await this.$filters(airlinesFilter).click()
        await this.$FilterDropDown(airlineName).click()
        await this.$filters(departureTimeFilter).click()
        await this.$FilterDropDown(departureTime)
        await this.$filters(arrivalTimeFilter).click()
        await this.$FilterDropDown(arrivalTime).click()
        await this.$checkBox(checkBoxName).click()
        await this.$sortOption().click()
        await this.$sortDropDown(dropDownValue).click()
        await browser.pause(3000)

    }
    // async flightDetails()
    // {
    //     let details =await this.$$flightDetails().map((item)=>item.getText());
    //     console.log(details);
    // }

}
export const flightSearchPage=new FlightSearchPage()