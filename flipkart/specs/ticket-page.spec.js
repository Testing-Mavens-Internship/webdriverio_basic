import { launchPage } from "../page-object/launch-page.js";
import { flightBookingPage } from "../page-object/flight-page.js";
//import data from "../text-data/dataSheet.json" 

let from = "New Delhi";
let to = "Mumbai";
let ticketCharge = "₹15,119";

describe("Buy a flight ticket for 5 members in flipkart travel page:", () => {
  it("launch the flipkart travel website", async () => {
    await launchPage.openUrl();
    expect(await launchPage.$logo().isDisplayed())
      .withContext("Expect the logo to be displayed")
      .toBe(true);
  });

  it("fill the details of flight ", async () => {
    await launchPage.fillForm(from,to);
    expect(await flightBookingPage.$verifyDetails(from).isDisplayed())
      .withContext("Expect the depart place to be displayed")
      .toBe(true);
    expect(await flightBookingPage.$verifyDetails(to).isDisplayed())
      .withContext("Expect the arrival place to be displayed")
      .toBe(true);
    expect(await flightBookingPage.$verifyDetails("Oct").isDisplayed())
      .withContext("Expect the  depart on date to be displayed")
      .toBe(true);
  });

  it("Apply filter and book flight ticket", async () => {
    await flightBookingPage.applyTimeFilter();
    expect(await flightBookingPage.$ticketPrice(ticketCharge).isDisplayed())
      .withContext("Expect the highest price to be displayed")
      .toBe(true);
  });

  it("Click on the book button", async () => {
    await flightBookingPage.ClickOnBookButton(ticketCharge);
    expect(await flightBookingPage.$loginText().isDisplayed())
      .withContext("Expect the request otp button is visible")
      .toBe(true);
  });
});
