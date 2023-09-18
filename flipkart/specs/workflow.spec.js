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
        expect(await flightsPage.$filterCheck().isDisplayed())
          .withContext("Clear filter button is displayed")
          .toBe(true)
      })
      it("Details",async ()=>{
        await flightsPage.clickOnDetails()
      })
})