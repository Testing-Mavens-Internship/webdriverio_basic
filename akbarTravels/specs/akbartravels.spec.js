import { akbarHome } from "../page-objects/home-page.js";
describe("End to end autopmation of booking a flight", () => {
  it("Launch the akbar travels website", async () => {
    await akbarHome.openURL();
    expect(await akbarHome.$header().waitForDisplayed())
      .withContext("Header of akbar travels is displayed")
      .toBe(true);
  });

  it("Click on the later button present on personalized update", async () => {
    await akbarHome.clickOnLaterPersonalizedUpdated();
    expect(await akbarHome.$login().waitForDisplayed())
      .withContext("Login is visible")
      .toBe(true);
  });

  it("Select from where you want to board the flight", async () => {
    await akbarHome.clickOnFromPlace();
    expect(await akbarHome.$fromValidation("Cochin ").isDisplayed())
      .withContext("expect Cochin is displayed at from location ")
      .toBe(true);
  });

  it("Select the destination where you want to go",async() =>{
    await akbarHome.clickToPlace();
    expect(await akbarHome.$toValidation("Mumbai ").isDisplayed())
    .withContext("expect Mumbai to be displayed at to location ")
    .toBe(true);
  });

  it("Select the departure date",async()=>{
    await akbarHome.clickOnDeparture();
    expect(await akbarHome.$depValidation("24").isDisplayed())
    .withContext("Departure date is being clicked")
    .toBe(true);
  });
  it("Select traveleres", async()=>{
    await akbarHome.clickOnTrvaeler();
    expect(await akbarHome.$travelerIncrement("Adult").waitForDisplayed())
    .withContext("Travelers are incremented by 1 adult and children by 2")
    .toBe(true);
  });

  it("Select flight type",async() =>{
    await akbarHome.clickOnFlightType();
    expect(await akbarHome.$flightType(" Premium Economy").isEnabled())
    .withContext('Premium economy is selected')
    .toBe(true)
  });

  it("Click on apply",async()=>{
    await akbarHome.clickOnApply();
    expect(await akbarHome.$travelerHeader().waitForDisplayed())
    .withContext("Travelers count should display after clicking Apply")
    .toBe(true);
  });
  it("Click on search flights", async()=>{
    await akbarHome.clickOnSearchFlights();
    expect(await akbarHome.$header().waitForDisplayed({timeout:20000, reverse: true}))
    .withContext("New header is shown when user clicks Search Flights button.")
    .toBe(true);
  })

});
