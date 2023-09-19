import { homePage } from "../page-objects/home-page.js";
import { travelPage } from "../page-objects/travel-page.js";
import { flightPage } from "../page-objects/flight-page.js";
import testdata from "../testdata/travel.json" assert { type: "json" };

describe("Automation of flight booking in flipkart", () => {
  it("Load the url of Flipkart", async () => {
    await homePage.openUrl();
    expect(await homePage.$loginPopUp().isDisplayed())
      .withContext("Expect login popup to be displayed")
      .toBe(true);
  });

  it("Close login PopUp", async () => {
    await homePage.clickOnClose();
    expect(await homePage.$loginPopUp().isDisplayed())
      .withContext("Expect login popup to be closed")
      .toBe(false);
    expect(await homePage.$logo().isDisplayed())
      .withContext("Expect Logo to be displayed")
      .toBe(true);
  });

  it("Click on Travels Icon", async () => {
    await homePage.clickOnMenuIcon("Travel");
    expect(await travelPage.$header("Travel").isDisplayed())
      .withContext("Expect Travel header to be displayed")
      .toBe(true);
  });

  it("Fill Up travel details and search flights", async () => {
    await travelPage.fillUpDetails(
      testdata.from,
      testdata.to,
      testdata.month,
      testdata.day,
      testdata.traveller,
      testdata.cabin,
      flightPage.$airport(1)
    );
    expect(await travelPage.$loadText("Looking for flights...").isDisplayed())
      .withContext("Expect flight looking animation to be displayed")
      .toBe(true);
  });

  it("Verify Departure and Arrival place", async() => {
    let displayedFrom = await flightPage.$airport(1).getText();
    let displayedTo = await flightPage.$airport(2).getText();

    expect(await flightPage.verifyAirport(testdata.fromPlace, displayedFrom))
      .withContext("Expect displayed departure airport to be same as searched")
      .toBe(true);
    expect(await flightPage.verifyAirport(testdata.toPlace, displayedTo))
      .withContext("Expect displayed arriving airport to be same as earlier")
      .toBe(true);
  })

  it("Verify loaded flight details", async () => {
    await flightPage.clickOnFilter("Non-stop");

    let flightArray = await flightPage.$$flightName().map((items) => items.getText());

    for (let flight of flightArray) {
      await flightPage.clickOnDetails(flight);

      expect(await flightPage.$fromCode(testdata.from).isDisplayed())
        .withContext(`expect from to be ${testdata.from}`)
        .toBe(true);
      expect(await flightPage.$destinationCode(testdata.to).isDisplayed())
        .withContext(`expect from to be ${testdata.to}`)
        .toBe(true);
    }
  });

  it("Click on price filter and verify price is sorted or not", async () => {
    await flightPage.clickOnPriceSort();

    let price = await flightPage
      .$$flightPrice()
      .map((price) => price.getText());
    let flightPrice = price.map((item) => item.split(",").join("").slice(1));

    expect(await flightPage.isPriceSorted(flightPrice))
      .withContext("Expect Flight price to be sorted")
      .toBe(true);
  });

  it("Click on departure time filter and Book Flight", async () => {
    await flightPage.clickOnFilter("Night");

    let flightBooking = await flightPage.$$flightName().map((items) => items.getText());
    console.log(flightBooking[0]);
    await flightPage.clickOnBook(flightBooking[0]);

    expect(await flightPage.$button("Request OTP").isDisplayed())
      .withContext("Expect Request otp to be displayed")
      .toBe(true);
  });
});
