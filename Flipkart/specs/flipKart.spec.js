import { landingPage } from "../page-objects/landing-page.js";
import { travelPage } from "../page-objects/travel-page.js";
import testData from "../testData/test-data.json" assert {type:"json"}

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
    })

})
