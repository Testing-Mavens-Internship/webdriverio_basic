import { homePage } from "../page-objects/home-page.js"
import { travelPage } from "../page-objects/travel-page.js";
import { flightPage } from "../page-objects/flight-page.js";
let section = "Travel";
let from = "Mumbai";
let to = "Hyderabad";
let month = "October 2023";
let day = "27";
let airLine = "SpiceJet"
describe("End to end automation of flipkart", () => {
    it("load the url", async () => {
        await homePage.openUrl();
        expect(await homePage.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
    });

     it("select travel and verify navigation", async () => {
        await homePage.selectProduct(section)
        expect(await travelPage.$secondHeader(section).isDisplayed())
        .withContext("Expected second header to be displayed")
        .toBe(true);
    });

    it("Search for flights and verify navigation", async () => {
    await travelPage.searchFlight(from,to,month,day);
    expect(await flightPage.$cityName(from).isDisplayed()).toBe(true);
    expect(await flightPage.$cityName(to).isDisplayed()).toBe(true)
    });

    it("Select flight", async () => {
    await flightPage.chooseFlight(airLine);
    expect(await flightPage.$loginHeader().isDisplayed()).toBe(true);
    });
});
