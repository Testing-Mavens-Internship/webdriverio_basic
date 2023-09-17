import { homeFlipkart } from "../page-objects/home-page.js";
import { travelPage } from "../page-objects/travel-page.js";
import { fligthDetails } from "../page-objects/flight-list-page.js";
describe("End to end autoamtion for flight booking in flipkart", () => {
  it("Launch the website", async () => {
    await homeFlipkart.openURL();
    expect(await homeFlipkart.$loginHeader().isDisplayed())
      .withContext("Expect login to pop up")
      .toBe(true);
  });

  it("Click on the close login button", async () => {
    await homeFlipkart.clickCloseLogin();
    expect(await homeFlipkart.$flipKartHeader().isDisplayed())
      .withContext("Expect to land on flipkart home page")
      .toBe(true);
  });

  it("Click on travel", async () => {
    await homeFlipkart.clickOnTravel();
    expect(await travelPage.$travelHeader().waitForDisplayed())
      .withContext('Expect "travel" type of flights')
      .toBe(true);
  });

  it("Select the from location", async () => {
    await travelPage.fromLocation();
    expect(await travelPage.$fromLocationValidation().waitForDisplayed())
      .withContext("From location is being clicked ")
      .toBe(true);
  });

  it("Select the to location", async () => {
    await travelPage.toLocation();
    expect(await travelPage.$toLocationValidaiton().waitForDisplayed())
      .withContext("To Location is selected and validation message displayed.")
      .toBe(true);
  });

  it("Select the departure daate", async () => {
    await travelPage.selectDepartDate();
    expect(
      await travelPage.$fromToDepartReturnClass("departfrom")
    ).toHaveTextContaining("Depart On");
  });

  it("Select the passenger", async () => {
    await travelPage.travelerClass();
    expect(
      await travelPage
        .$fromToDepartReturnClass("travellerclasscount")
        .isDisplayed()
    ).toBe(true);
  });

  it("Select the cabin type", async () => {
    await travelPage.selectCabinClass();
    expect(await travelPage.$cabinClass("e").isEnabled())
      .withContext("Economy class is selected for booking")
      .toBe(true);
  });

  it("Click on done", async () => {
    await travelPage.clickOnDone();
    expect(await travelPage.$fromToDepartReturnClass("datefrom").isDisplayed())
      .withContext("The traveler class is visible")
      .toBe(true);
  });

  it("Click on the search flight and valdiate the form, to , departure date", async () => {
    await travelPage.clickOnSearch();
    expect(
      await fligthDetails.$filterByText().waitForDisplayed({ timeout: 5000 })
    )
      .withContext("Loaded the flight details")
      .toBe(true);
    expect(await travelPage.$fromLocationValidation().waitForDisplayed())
      .withContext("From place is validated")
      .toBe(true);
    expect(await travelPage.$toLocationValidaiton().waitForDisplayed())
      .withContext("To place is validated")
      .toBe(true);
    expect(await travelPage.$dateValidation().waitForDisplayed())
      .withContext("From date is same as given")
      .toBe(true);
  });

  it("Click on the non-stop flight", async () => {
    await fligthDetails.clickOnOneStop();
    expect(await fligthDetails.$filter("1 stop").isEnabled())
      .withContext("The one stop filter is added to the screen")
      .toBe(true);
  });
  it("Click on the time  with wehich the user want to board the flight", async () => {
    await fligthDetails.clickOnTime();
    expect(await fligthDetails.$filter("Morning").isEnabled())
      .withContext("The morning tyime is added as the filter")
      .toBe(true);
  });
  it("Click on the non-stop flight", async () => {
    await fligthDetails.clickOnFlight();
    expect(await fligthDetails.$filter("SpiceJet").isEnabled())
      .withContext(
        "The spice jet travels is selected for the traveling is selected"
      )
      .toBe(true);
  });

  it("Click on the book button and login option must be displayed", async () => {
    await fligthDetails.clickOnBook();
    expect(
      await fligthDetails.$loginHeader().waitForDisplayed({ timeout: 3000 })
    )
      .withContext("Login page should be displayed")
      .toBe(true);
  });
});
