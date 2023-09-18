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
      data.noOfChild
    );
    expect(await flightPage.$verifyName(data.from).isDisplayed()).toBe(true);
    expect(await flightPage.$verifyName(data.to).isDisplayed()).toBe(true);
  });

  it("filter and sort flight details and verify result", async () => {
    let sort = await flightPage.filterSort(data.filter);
    expect(sort).toBe(true);
  });

  it("Validate flight details", async () => {
    for (let index = 1; index < flightPage.$$flightDetails().length; index++) {
      await flightPage.flightValidation(index);
      expect(await flightPage.$validationCity(data.from).isDisplayed).toBe(
        true
      );
      expect(await flightPage.$validationCity(data.to).isDisplayed).toBe(true);
    }
  });

  it("Book flight", async () => {
    await flightPage.bookFlight();
    expect(await flightPage.$loginHeader().isDisplayed()).toBe(true);
  });
});
