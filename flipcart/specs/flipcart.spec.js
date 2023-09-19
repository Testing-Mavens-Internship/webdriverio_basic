import { homePage } from "../pageobjects/home-page.js";
import { travelPage } from "../pageobjects/travel-page.js";
import data from "../testdata/data.json" assert { type: "json" };

describe("End-to-End automation of Flipcart application", () => {
  it("Lauch Flipcart url", async () => {
    await homePage.lauchUrl();
    expect(await homePage.$login().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("Click on close button", async () => {
    await homePage.clickOnClose();
    expect(await homePage.$header().waitForDisplayed({ timeout: 1000 }))
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("Click on travel button and verify navigation to travel page", async () => {
    await homePage.clickOnTravel(travelPage.$travel());
    expect(await travelPage.$travel().isDisplayed())
      .withContext("Expect navigation to travel page")
      .toBe(true);
  });

  it("Enter the from and to loaction", async () => {
    await travelPage.enterLoaction(
      data.departure,
      data.arrival,
      data.month,
      data.date,
      data.adults,
      data.children
    );
    expect(await travelPage.$travel().isDisplayed())
      .withContext("Expect the header to be displayed")
      .toBe(true);
  });

  it("Select departure time", async () => {
    expect(await travelPage.departTimeFilter(data.time[3]))
      .withContext("Expect depart time to be between given time")
      .toBe(true);
    expect(await travelPage.$night(data.time[3]).isEnabled())
      .withContext("Expect depart time to be selected")
      .toBe(true);
  });

  it("Verify sorting of price", async () => {
    expect(await travelPage.sortPrice())
      .withContext("Expect price to be in decsending order")
      .toBe(true);
  });

  it("verify the flights", async () => {
    let count = await travelPage.getCount();
    for (let i = 1; i <= count; i++) {
      await travelPage.verifyFlightDetails(i);
      expect(await travelPage.$flightDetail(data.fromCode, i).isDisplayed())
        .withContext("Expect COK to be displayed")
        .toBe(true);
      expect(await travelPage.$flightDetail(data.toCode, i).isDisplayed())
        .withContext("Expect BOM to be displayed")
        .toBe(true);
    }
  });

  it("Click on book and verify navigation", async () => {
    await travelPage.clickOnBook();
    expect(await travelPage.$login().isDisplayed())
      .withContext("Expect login page to be displayed")
      .toBe(true);
  });
});
