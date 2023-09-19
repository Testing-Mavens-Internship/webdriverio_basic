import { launchPage } from "../page-object/launch-page.js";
import { flightPage } from "../page-object/flight-page.js";
import data from "../text-data/dataSheet.json" assert { type: "json" };

// let from = "Mumbai";
// let to = "Hyderabad";
// let ticketCharge = "₹10,329";

describe("Buy a flight ticket for 5 members in flipkart travel page:", () => {
  it("launch the flipkart travel website", async () => {
    await launchPage.openUrl(launchPage.$logo());
    expect(await launchPage.$logo().isDisplayed())
      .withContext("Expect the flipkart logo to be displayed")
      .toBe(true);
  });

  it("fill the flight details", async () => {
    await launchPage.fillDetails(data.from, data.to);
    expect(await flightPage.$logo().isDisplayed())
    .withContext("Expect the flipkart logo to be displayed")
    .toBe(true);
    // expect(await flightPage.$verifyDetails(data.from).isDisplayed()).withContext("Expect the depart place to be displayed").toBe(true);
    // expect(await flightPage.$verifyDetails(data.to).isDisplayed()).withContext("Expect the arrival place to be displayed").toBe(true);
  
  });
 
  it('verify the flights', async() => {
   let count = await flightPage.$$records().length;
      for(let i=1;i<=count;i++){
        await flightPage.verifyFlightDetails(i);
        expect(await flightPage.$flightDetail(data.fromCode,i).isDisplayed()).withContext('Expect BOM to be displayed').toBe(true);
        expect(await flightPage.$flightDetail(data.toCode,i).isDisplayed()).withContext('Expect BOM to be displayed').toBe(true);
      }
  })

  it("Apply filter and sort the price details", async () => {
    await flightPage.applyTimeFilter(data.time[1]);
    expect(await flightPage.sortPrice())
      .withContext("Expect the highest price to be displayed")
      .toBe(true);
    expect(await flightPage.verifyTime(data.time[1])).withContext('Expect the time to between the given sort time').toBe(true);
  });

  it("Click on the book button", async () => {
    await flightPage.ClickOnBookButton();
    expect(await flightPage.$loginText().isDisplayed())
      .withContext("Expect the request otp button is visible")
      .toBe(true);
  });
});
