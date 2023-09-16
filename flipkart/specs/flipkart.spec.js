import { landingPage } from "../page-objects/landing-page.js"
import { travelPage } from "../page-objects/travel-page.js"
import { searchResultsPage } from "../page-objects/searchResults-page.js"
let arrivalCity="Mumbai"
describe("End to end automation of flipkart",()=>{
    it("Load the website",async()=>{
        await landingPage.loadPage()
        expect(await landingPage.$header().isDisplayed()).toBe(true)
    })
    it("clcik on travel icon and validate navigation to travel page",async()=>{
        await landingPage.clickOnTravel()
        expect(await landingPage.$travelHeader().isDisplayed()).toBe(true)
    })
    it("Search for flights",async ()=>{
await travelPage.searchForFlight()
expect(await searchResultsPage.$arrivalCityName(arrivalCity).isDisplayed()).toBe(true)
    })
    })