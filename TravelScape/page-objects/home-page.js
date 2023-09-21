import Common from "../page-objects/common.js"
class HomePage extends Common{
    constructor(){
        super()
        this.$menuButtons=(buttonName)=>$(`//div[@class="MuiBox-root-677 jss678"]//a[text()="${buttonName}"]`) // button name on menu bar
        this.$flightHeader=(headerName)=>$(`//h5[text()="${headerName}"]`)

    }
    async clickOnFlight(menuButton,flightHeader){
        await this.$menuButtons(menuButton).click()
        await this.$flightHeader(flightHeader).waitForDisplayed({timeout:30000})
    }
    
}
export const homePage=new HomePage()
