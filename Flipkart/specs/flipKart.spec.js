import { landingPage } from "../page-objects/landing-page.js";
import { travelPage } from "../page-objects/travel-page.js";
import testData from "../testData/test-data.json" assert {type:"json"}
import { flightPage } from "../page-objects/flight-page.js";

describe("Flipkart Application:",()=>{
    it("Launch the Website",async()=>{
        await landingPage.launchUrl()
        expect(await landingPage.$loginPageHeader().isDisplayed()).withContext("Expect the login header on login pop up").toBe(true)
    })
    it("Click on close icon on login pop up",async()=>{
        await landingPage.clickOnCloseIcon()
        expect(await landingPage.$mainHeader().isDisplayed()).withContext("Expect Flipkart Logo").toBe(true)
    })
    it("Click on travel button",async()=>{
            await landingPage.clickOnTravelButton()
        expect(await landingPage.$travelHeader().isDisplayed()).withContext("expect travel header should display").toBe(true)   
    })
    it("Selecting location",async()=>{
            await travelPage.searchFlight(testData.directionFrom,testData.directionTo,testData.locationFrom,testData.locationTo,testData.locationNameFrom,testData.locationNameTo,testData.date,testData.Adult,testData.Children,testData.noOfAdult,testData.noOFChildren,testData.className)
            expect(await travelPage.$flightRouteValidation().isDisplayed()).withContext("Expect listed flight should travel from Kochi to Los Angles").toBe(true)
    })
    it("Sorting the flight Price",async()=>{
       // await flightPage.flightSort()
        expect(await flightPage.flightSort()).withContext("Expect price should be listed in descending order").toBe(true)
    })
    it("Click on Departure checkbox",async()=>{
        await flightPage.clickOnCheckBox(testData.Time)
        expect(await flightPage.timeRange(testData.startTime,testData.endTime)).withContext("Expect it should show only morning flights").toBe(true)
        
    })

    // it("Click on Airlines check box",async()=>{
    //     await flightPage.clickOnCheckBox(testData.airlines)
    // })
    it("Click on Book Button",async()=>{
        await flightPage.clickOnBook()
        expect(await flightPage.$loginPageHeader().isDisplayed()).withContext("Expect the login Header").toBe(true)
    })

})
