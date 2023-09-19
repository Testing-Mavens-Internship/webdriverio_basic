import { flightPage } from "../pageobjects/flight-page.js";
import { homePage } from "../pageobjects/home-page.js";
import data from "../testdata/testdata.json" assert{type :"json"};

describe("automate flipkart", () => {
  it("Open the flipkart website", async () => {
    await homePage.OpenUrl();
    expect(await homePage.$flipkartHeader().isDisplayed())
      .withContext("Expect the header to be displayed")
      .toBe(true);
  });

  it("Select Flight ", async () => {
    await homePage.clickOnFlight(flightPage.$flightHeader());
    expect(await flightPage.$flightHeader().isDisplayed())
      .withContext("Travel header is expected ")
      .toBe(true);
  });

  it("Fill details", async () => {
    await flightPage.fillDetails(
      data.fromDestination,
      data.toDestination,
      data.month,
      data.day,
      data.adultNumber
    );
    expect(await flightPage.$fromToHeader().isDisplayed())
      .withContext("from to header is displayed")
      .toBe(true);
  });

  it("sort price", async () => {
    // await flightPage.filter();
    let sortValue = await flightPage.sortPrice();
    expect(await sortValue).toBe(true);
    let count = await flightPage.bookCount();
    for (let i = 1; i <= count; i++) {
      await flightPage.$flightDetails(i).click();
      expect(
        await flightPage.$outputFlightDetails(data.fromDestination).isDisplayed()
      ).toBe(true);
      expect(
        await flightPage.$outputFlightDetails(data.toDestination).isDisplayed()
      ).toBe(true);
    }
  });

  it("apply timing filter", async () => {
    let flightTiming = await flightPage.flightTiming(data.departureTime);
    expect(flightTiming).toBe(true);
  });
});
