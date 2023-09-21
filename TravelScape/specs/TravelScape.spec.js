import { homePage } from "../page-objects/home-page.js";
import { flightPage } from "../page-objects/flight-page.js";
import { flightSearchPage } from "../page-objects/searchFlight-page.js";
import data from "../testData/test-data.json" assert { type: "json" };

describe("Travel Scape Application:",()=>{
    it("Launch the website",async()=>{
        await homePage.LaunchUrl()
        expect(await homePage.$mainHeader().isDisplayed()).withContext("Expect the Application Logo").toBe(true)
    })
    it(`Click on the ${data.menuButton} button`,async()=>{
        await homePage.clickOnFlight(data.menuButton,data.flightHeader)
        expect(await homePage.$flightHeader(data.flightHeader).isDisplayed()).withContext(`Expect the ${data.flightHeader} header`).toBe(true)
    })
    it("Click on the From & To for selecting location ",async()=>{
        await flightPage.selectingFlights(data.from,data.to,data.fromLocation,data.toLocation,data.flocation,data.tLocation,data.depart,data.travellers,data.adultType,data.childrenType,data.adultNo,data.childrenNo,data.classType,data.cType)
        expect(await flightSearchPage.$searchFlightHeader().isDisplayed()).withContext("Expect the Flight Search header").toBe(true)
    })
    it("Click on Filters",async()=>{
        await flightSearchPage.enableFilters(data.airlinesFilter,data.departureTimeFilter,data.arrivalTimeFilter,data.airlineName,data.departureTime,data.arrivalTime,data.checkBoxName,data.dropDownValue)
       // await flightSearchPage.flightDetails()
    })
})