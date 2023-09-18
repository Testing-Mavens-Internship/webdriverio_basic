import { flightsPage } from "../page-objects/flights-page.js";
import { homePage } from "../page-objects/home-page.js";
import data from "../testdata/data.json" assert { type: "json" };
let count;
describe("Flipkart flight booking automation", () => {
  it("Launch url", async () => {
    await homePage.launchUrl();
    expect(await homePage.$logo().isDisplayed())
      .withContext("Expect logo to be displayed")
      .toBe(true);
  });

  it("click on travel option and verify navigation", async () => {
    await homePage.clickOnTravel();
    expect(await homePage.$details("01").isDisplayed())
      .withContext("Expect from input field to be displayed")
      .toBe(true);
  });

  it("Enter details and search", async () => {
    await homePage.searchFlights(
      data.from,
      data.to,
      data.month,
      data.day,
      data.categoryAdults,
      data.categoryChildren,
      data.ticketClass
    );
    expect(await flightsPage.$bookButton().isDisplayed())
      .withContext("Expect travel header to be displayed")
      .toBe(true);
    count = await flightsPage.getCount();
    for (let i = 1; i <= count; i++) {
      await flightsPage.$flightDetails(i).click();
      expect(await flightsPage.$outputFlightDetails(data.from).isDisplayed())
        .withContext("Expect source to be kochi")
        .toBe(true);
      expect(await flightsPage.$outputFlightDetails(data.to).isDisplayed())
        .withContext("Expect destination to be bangalore")
        .toBe(true);
    }
  });

  it("Select departure time and verify it", async () => {
    await flightsPage.selectDepartureTime(data.departureTime);
    expect(await flightsPage.verifyDepartureTime(data.time1, data.time2))
      .withContext("Expect departure time is same as selected")
      .toBe(true);
  });

  it("Verify the sorting option", async () => {
    expect(await flightsPage.verifySort())
      .withContext("Expect flights are sorted in descending order")
      .toBe(true);
  });

  it("Click on book button and verify", async () => {
    await flightsPage.clickOnBook();
    expect(await flightsPage.$loginPopUP().isDisplayed())
      .withContext("Expect login pop up to be displayed")
      .toBe(true);
  });
});
