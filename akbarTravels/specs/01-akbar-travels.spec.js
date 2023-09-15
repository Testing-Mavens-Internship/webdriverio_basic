import { flightPage } from "../page-objects/flight-page.js";

describe("Akbar Travels Application Automation", () => {
  it("Load the url of Akbar Travels", async () => {
    await flightPage.openUrl();
    expect(await flightPage.$logo().isDisplayed())
      .withContext("Expect Logo to be displayed")
      .toBe(true);
  });

  it("Click on FLights Icon", async () => {
    await flightPage.clickOnMenuIcon("Flights");
    expect(await flightPage.$header("Book Flight Tickets").isDisplayed())
      .withContext("Expect Header to be displayed")
      .toBe(true);
  });

  it("Click On search type of flight", async () => {
    await flightPage.clickOnSearchType("One Way");

    expect(await flightPage.searchType("One Way").isSelected())
      .withContext("Expect One Way to be selected")
      .toBe(true);
  });
});
