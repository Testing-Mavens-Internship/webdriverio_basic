import { launchPage } from "../page-object/launch-page.js";
import { flightPage } from "../page-object/flight-page.js";
import data from "../text-data/dataSheet.json" assert { type: "json" };

let from = "Mumbai";
let to = "Hyderabad";
let ticketCharge = "₹10,329";

describe("Buy a flight ticket for 5 members in flipkart travel page", () => {
  it("launch the flipkart travel website", async () => {
    await launchPage.openUrl();
    expect(await launchPage.$logo().isDisplayed())
      .withContext("Expect the flipkart logo to be displayed")
      .toBe(true);
  });

  it("fill the flight details", async () => {
    await launchPage.fillDetails(data.from, data.to);
    expect(await flightPage.$verifyDetails(data.from).isDisplayed())
      .withContext("Expect the depart place to be displayed")
      .toBe(true);
    expect(await flightPage.$verifyDetails(data.to).isDisplayed())
      .withContext("Expect the arrival place to be displayed")
      .toBe(true);
    expect(await flightPage.$verifyDetails("Oct").isDisplayed())
      .withContext("Expect the  depart on date to be displayed")
      .toBe(true);
  });

  it("Apply filter and book flight ticket", async () => {
    await flightPage.applyTimeFilter();
    expect(await flightPage.$ticketPrice(data.ticketCharge).isDisplayed())
      .withContext("Expect the highest price to be displayed")
      .toBe(true);
  });

  it("Click on the book button", async () => {
    await flightPage.ClickOnBookButton(data.ticketCharge);
    expect(await flightPage.$loginText().isDisplayed())
      .withContext("Expect the request otp button is visible")
      .toBe(true);
  });
});
