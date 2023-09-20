import { homePage } from "../page-objects/home-page.js";
import { travelPage } from "../page-objects/travel-page.js";
import { flightPage } from "../page-objects/flight-page.js";
import data from "../test-data/test.json" assert { type: "json" };

describe("End to end automation of flipkart", () => {
  it("load the url", async () => {
    await homePage.openUrl();
    expect(await homePage.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("select travel and verify navigation", async () => {
    await homePage.selectProduct(data.section);
    expect(await travelPage.$secondHeader(data.section).isDisplayed())
      .withContext("Expected second header to be displayed")
      .toBe(true);
  });

  it("Search for flights and verify navigation", async () => {
    await travelPage.searchFlight(
      data.from,
      data.to,
      data.month,
      data.day,
      data.noOfAdults,
      data.noOfChild,
      data.cabin,
      flightPage.$verifyName(data.from)
    );
    expect(await flightPage.$verifyName(data.from).isDisplayed()).toBe(true);
    expect(await flightPage.$verifyName(data.to).isDisplayed()).toBe(true);
  });

  it("Sort flight details and verify result", async () => {
    let sort = await flightPage.sortPrice();
    expect(sort).toBe(true)
  }); 

  it("Apply filter to stop and airline",async () => {
   await flightPage.filter(data.filterStops,data.filterAirline)
   let count = await flightPage.$$getAirLine(data.filterAirline).length;
    for(let index = 1; index<=count; index++){
      expect(await flightPage.$validateAirLine(data.filterAirline,index).isDisplayed()).toBe(true)
      expect(await flightPage.$validateStop(data.validateStop).isDisplayed()).toBe(true);
    }
  });

  it("Validate filtered departure time", async () => {
    let time = await flightPage.validateDeparture(data.filterDeparture)
    expect(time).toBe(true)
  })

  it("Validate flight details", async () => {
    let count = await flightPage.$$getFlightDetails().length;
    for (let index = 1; index <= count; index++) {
      await flightPage.flightValidation(index);
      expect(await flightPage.$validationPlace(data.shortFrom,index).isDisplayed()).toBe(true);
      expect(await flightPage.$validationPlace(data.shortTo,index).isDisplayed()).toBe(true);
    }
  });

  it("Book flight", async () => {
    await flightPage.bookFlight();
    expect(await flightPage.$loginHeader().isDisplayed()).toBe(true);
  });
});
