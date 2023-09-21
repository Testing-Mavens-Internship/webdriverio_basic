import Common from "../page-objects/common.js"
class FlightPage extends Common{
    constructor(){
        super()
        this.$locationSelect=(FromTo)=>$(`//label[text()="${FromTo}"]/../div//input`) // From /To Text fields
        this.$locationDropDown=(code)=>$(`//div[@class=" css-jb636u-menu"]/div/div[contains(text(),"${code}")]`) // dropdown on from / to fields
        this.$date=(departReturn)=>$(`//label[text()="${departReturn}"]/../div`) // date textbox for selecting date
        this.$selectDate=()=>$(`(//p[text()="September 2023"]/../../../..//p[text()="29"])[2]`) // selecting date
        this.$TravellersAndClass=(headerName)=>$(`//label[text()="${headerName}"]/..//button`) // clicking Traveller and Class fields
        this.$passenger=(type)=>$(`(//h6[text()="${type}"]/../..//button)[2]`) // adding passenger type
        this.$applyButton=(no)=>$(`(//span[text()="APPLY"])[${no}]`) //apply button
        this.$classTypeSelect=(cType)=>$(`//p[text()="${cType}"]`) //Type of class
    }
    async selectingFlights(from,to,fromLocation,toLocation,flocation,tLocation,depart,travellers,adultType,childrenType,adultNo,childrenNo,classType,cType){
        await this.$locationSelect(from).click()
        await this.$locationSelect(from).setValue(fromLocation)
        await this.$locationDropDown(flocation).click()
        await this.$locationSelect(to).click()
        await this.$locationSelect(to).setValue(toLocation)
        await this.$locationDropDown(tLocation).click()
        await this.$date(depart).click()
        await this.$selectDate().click()
        await this.$TravellersAndClass(travellers).click()
        for(let i=0;i<=adultNo;i++){
            await this.$passenger(adultType).click()
        }
        for(let j=0;j<=childrenNo;j++){
            await this.$passenger(childrenType).click()
        }
        await this.$applyButton("1").click()
        await this.$TravellersAndClass(classType).click()
        await this.$classTypeSelect(cType).click()
        await this.$applyButton("2").click()
        await this.$searchFlights().click()
        await browser.pause(5000)
        let a = await browser.getWindowHandles()
        console.log(a[1]);
        await browser.switchToWindow(a[1])
    }
}
export const flightPage=new FlightPage()