import { flightsPage } from "../page-objects/flights-page.js";
import { homePage } from "../page-objects/home-page.js";
import { travelPage } from "../page-objects/travel-page.js";

describe("Automation workflow of Flipkart website",()=>{
    it("Load the Flipkart and verify", async () => {
        await homePage.openUrl();
        expect(await homePage.$header().isDisplayed())
          .withContext("Expect header to be displayed")
          .toBe(true);
      });
      it("Close login and verify",async ()=>{
        await homePage.close()
        expect(await homePage.$header().isDisplayed())
          .withContext("Expect header to be displayed")
          .toBe(true);
      })
      it("Click on travel button and verify navigation",async ()=>{
        await homePage.clickOnTravel()
        expect(await homePage.$page("Travel").isDisplayed())
          .withContext("Expected Travel to be displayed")
          .toBe(true)
      })
      it("Set location and verify",async ()=>{
        await travelPage.setFrom()
        expect(await travelPage.$route("Kochi").isDisplayed())
          .withContext("Expecting kochi to be displayed")
          .toBe(true)
        expect(await travelPage.$route("Mumbai").isDisplayed())
          .withContext("Expecting Mumbai to be displayed")
          .toBe(true)
      })
      it("Select non stop and verify ",async ()=>{
        await flightsPage.selectNonStop()
        expect(await flightsPage.$page("Clear filters").isDisplayed())
          .withContext("Clear filter button is displayed")
          .toBe(true)
      })
      it("Click on Flight details and verify route",async ()=>{
        await flightsPage.clickOnDetails()
        let count = await flightsPage.$$flights().length
        for(let i=1;i<=count;i++){
          expect(await flightsPage.$routeCheck("COK",i).isDisplayed())
          .withContext("Expecting COK to be displayed")
          .toBe(true)
          expect(await flightsPage.$routeCheck("BOM",i).isDisplayed())
          .withContext("Expecting BOM to be displayed")
          .toBe(true)
        }
      })
      it("Filter by departure and verify",async ()=>{
        await flightsPage.filterByTime("Morning")
        let len=flightsPage.$$getTime().length
        for(let i=1;i<=len;i++){
          if(i%2!=0){
              let time = flightsPage.$$getTime().getText()
              if(time>="06:00"){
                  expect(flightsPage.$verifyTime(i).isDisplayed())
                    .withContext("Expecting Time to be displayed")
                    .toBe(true)
              }
          }
        }
      })
})