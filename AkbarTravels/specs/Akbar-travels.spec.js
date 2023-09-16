import { homePage } from "../page-objects/home-page.js";
//import {data} from "../page-objects/test-Data.json";

describe("Akbar Travels Application:",()=>{
    it("Launch the Website",async()=>{
        await homePage.launchUrl()
        expect(await homePage.$mainHeader().isDisplayed()).withContext("expect the website logo").toBe(true)
    })

    it("Selecting the flight location from and  to go",async()=>{
        await homePage.selectingFlightLocations()
        expect(await homePage.$FromToValidate("Cochin").isDisplayed()).withContext("Expect From field should be cochin").toBe(true)
        expect(await homePage.$FromToValidate("Mumbai").isDisplayed()).withContext("Expect To field should be mumbai").toBe(true)
    })

    it("Selecting date for traveling",async()=>{
        await homePage.selectingDate()
        expect(await homePage.$dateValidate().isDisplayed()).withContext("Expect the date should displayed same as selected").toBe(true)
    })

    it("Selecting the number of travelers",async()=>{
        await homePage.addingTravelers()
        expect(await homePage.$travellersAndDateVAlidate().isDisplayed()).withContext("Expect the date and no of travellers should be same as added").toBe(true)
    })

    it("Click on Search flight button",async()=>{
        await homePage.clickOnSearchFlight()
    })



})

