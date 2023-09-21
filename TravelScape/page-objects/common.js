export default class Common{
    constructor(){
        this.$mainHeader=()=>$(`//img[@src="https://assets.travclan.com/unsafe/0x100/smart/https://s3.ap-south-1.amazonaws.com/com.travclan.b2b2c/logo/605/1680267247.227965/0.13125770983717622/logo_-_Copy.png"]`)
        this.$searchFlights=()=>$(`(//span[text()="SEARCH FLIGHTS"])`) // search flight button
    }
    async LaunchUrl(){
        await browser.url("https://www.travelscape.in/")
        await browser.maximizeWindow()
        await browser.pause(3000)
    }
}
