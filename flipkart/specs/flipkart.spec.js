import { landingPage } from "../page-objects/landing-page.js";
import { travelPage } from "../page-objects/travel-page.js";
import { searchResultsPage } from "../page-objects/searchResults-page.js";

import data from "../testData/testData.json" assert { type: "json" };

describe("End to end automation of flipkart", () => {
  it("Load the website", async () => {
    await landingPage.loadPage();
    expect(await landingPage.$header().isDisplayed()).toBe(true);
  });
  it("clcik on travel icon and validate navigation to travel page", async () => {
    let travelHeader=travelPage.$travelHeader()
    await landingPage.clickOnTravel(travelHeader);
    expect(await travelPage.$travelHeader().isDisplayed()).toBe(true);
  });
  it("Search for flights", async () => {
    await travelPage.searchForFlight(
      data.departureCity,
      data.arrivalCity,
      data.month,
      data.day,
      data.adults,
      data.children,
      data.economy
    );
    expect(
      await searchResultsPage.$cityDeparture(data.departureCity).isDisplayed()
    ).toBe(true);
    expect(
      await searchResultsPage.$cityArrival(data.arrivalCity).isDisplayed()
    ).toBe(true);
  });
  it("Validate whether the prices are sorted according to selection", async () => {
    let sortValidation = await searchResultsPage.sortPrice();
    expect(await sortValidation).toBe(true);
  });
  it("Validate flight timing",async()=>{
   let time= await searchResultsPage.flightTiming(data.timing[1])
   expect(await time).toBe(true)
  })
  it("Validate the airlines name",async()=>{
    await searchResultsPage.chooseAirline(data.airlinesName)
    for(let i=1;i<= await searchResultsPage.$$flightName(data.airlinesName).length;i++){
expect(await searchResultsPage.$airlinesName(data.airlinesName,i).isDisplayed()).toBe(true)
    }
  })
  it("Validate flight details", async () => {

    for (let i = 1; i <= await searchResultsPage.$$flightDetails().length; i++) {
      
      await searchResultsPage.flightValidation(i,data.departure,data.arrival);

      expect(
        await searchResultsPage.$validationCity(data.departure,i).isDisplayed()
      ).toBe(true);
      expect(await searchResultsPage.$validationCity(data.arrival,i).isDisplayed()).toBe(true);
    }
  });


  it("Choose flight", async () => {
    await searchResultsPage.chooseFlight();
    expect(await searchResultsPage.$loginHeader().isDisplayed()).toBe(true);
  });
});
