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
    await landingPage.clickOnTravel();
    expect(await landingPage.$travelHeader().isDisplayed()).toBe(true);
  });
  it("Search for flights", async () => {
    await travelPage.searchForFlight(
      data.departureCity,
      data.arrivalCity,
      data.month,
      data.day,
      data.adults,
      data.children
    );
    expect(
      await searchResultsPage.$cityDeparture(data.departureCity).isDisplayed()
    ).toBe(true);
    expect(
      await searchResultsPage.$cityArrival(data.arrivalCity).isDisplayed()
    ).toBe(true);
  });
  it("Validate flight details", async () => {
    for (let i = 1; i < searchResultsPage.$$flightDetails().length; i++) {
      await searchResultsPage.flightValidation(i);

      expect(
        await searchResultsPage.$validationCity(data.departure).isDisplayed
      ).toBe(true);
      expect(
        await searchResultsPage.$validationCity(data.arrival).isDisplayed
      ).toBe(true);
    }
  });
  it("Validate whether the prices are sorted according to selection", async () => {
    let sortValidation = await searchResultsPage.sortPrice();
    expect(await sortValidation).toBe(true);
  });
  it("Choose flight", async () => {
    await searchResultsPage.chooseFlight();
    expect(await searchResultsPage.$loginHeader().isDisplayed()).toBe(true);
  });
});
