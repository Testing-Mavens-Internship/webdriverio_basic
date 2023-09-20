import { launchPage } from "../page-object/launch-page.js";
import { flightBookingPage } from "../page-object/flight-page.js";
import data from "../text-data/dataSheet.json" assert { type: "json" };


// let from = "New Delhi";
// let to = "Mumbai";
// let ticketCharge = "₹15,119";

describe("Buy a flight ticket for 5 members in flipkart travel page:", () => {

  
  it("launch the flipkart travel website", async () => {
    await launchPage.openUrl();
    expect(await launchPage.$logo().isDisplayed())
      .withContext("Expect the logo to be displayed")
      .toBe(true);
  });


  it("fill the flight details", async () => {
    await launchPage.fillForm(data.from, data.to);
    expect(await flightBookingPage.$logo().isDisplayed())
      .withContext("Expect the flipkart logo to be displayed")
      .toBe(true);
    expect(await flightBookingPage.$verifyDetails(data.from).waitForDisplayed())
      .withContext("Expect the depart place to be displayed")
      .toBe(true);
    expect(await flightBookingPage.$verifyDetails(data.to).waitForDisplayed())
      .withContext("Expect the arrival place to be displayed")
      .toBe(true);
  });

  it("verify the flights", async () => {
    let count = await flightBookingPage.$$records().length;
    for (let i = 1; i <= count; i++) {
      await flightBookingPage.verifyFlightDetails(i);
      expect(await flightBookingPage.$flightDetail(data.fromCode, i).isDisplayed())
        .withContext("Expect BOM to be displayed")
        .toBe(true);
      expect(await flightBookingPage.$flightDetail(data.toCode, i).isDisplayed())
        .withContext("Expect BOM to be displayed")
        .toBe(true);
    }
  });
  it("Apply filter and sort the price details", async () => {
  await flightBookingPage.applyTimeFilter(data.time[1]);
 let sort = await flightBookingPage.sortPrice()
   expect(sort)
      .withContext("Expect the highest price to be displayed")
      .toBe(true);
    expect(await flightBookingPage.verifyTime(data.time[1]))
      .withContext("Expect the time to between the given sort time")
      .toBe(true);
  });
  
  it("Click on the book button", async () => {
    await flightBookingPage.ClickOnBookButton();
    expect(await flightBookingPage.$loginText().isDisplayed())
      .withContext("Expect the request otp button is visible")
      .toBe(true);
  });
});
