import { homeFlipkart } from "../page-objects/home-page.js";
import { travelPage } from "../page-objects/travel-page.js";
import { fligthDetails } from "../page-objects/flight-list-page.js";
import testdata from "./../tesdata/location.json" assert {type: "json"};
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
    expect(await travelPage.$loginButton().isDisplayed())
      .withContext('Expect "travel" type of flights')
      .toBe(true);
  });

  it("Select the from location", async () => {
    await travelPage.fromLocation(testdata.from, testdata.fromClick);
    expect(await travelPage.$fromLocationValidation(testdata.from).isDisplayed())
      .withContext("From location is being clicked ")
      .toBe(true);
  });

  it("Select the to location", async () => {
    await travelPage.toLocation(testdata.to, testdata.toClick);
    expect(await travelPage.$toLocationValidaiton(testdata.to).isDisplayed())
      .withContext("To Location is selected and validation message displayed.")
      .toBe(true);
  });

  it("Select the departure daate", async () => {
    await travelPage.selectDepartDate(testdata.month, testdata.day);
    //expect(await travelPage.$fromToDepartReturnClass("datefrom")).toHaveTextContaining(`Depart On ${testdata.day} Sep ,Thu`);
  });

  it("Select the passenger", async () => {
    await travelPage.travelerClass(testdata.travelers[1]);
    expect(await travelPage.$fromToDepartReturnClass("travellerclasscount").isDisplayed()).toBe(true);
  });

  it("Select the cabin type", async () => {
    await travelPage.selectCabinClass(testdata.cabin[0]);
    expect(await travelPage.$cabinClass(testdata.cabin[0]).isEnabled())
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
    expect(await fligthDetails.$filterByText().waitForDisplayed({ timeout: 5000 }))
      .withContext("Loaded the flight details")
      .toBe(true);
    expect(await travelPage.$fromLocationValidation(testdata.from).isEqual(await fligthDetails.$location(testdata.from)))
      .withContext("From place is validated")
    expect(await travelPage.$toLocationValidaiton(testdata.to).isEqual(await fligthDetails.$location(testdata.to)))
      .withContext("To place is validated")
    expect(await travelPage.$dateValidation().isDisplayed())
      .withContext("From date is same as given")
      .toBe(true);
  });

  it("Click on the non-stop flight", async () => {
    await fligthDetails.clickOnStop(testdata.stops[0]);
    expect(await fligthDetails.$filter(testdata.stops[0]).isEnabled())
      .withContext("The non stop filter is added to the screen").toBe(true);
  });
  it("Click on the time  with which the user want to board the flight", async () => {
    expect(await fligthDetails.getFromTime(testdata.time[3])).toBe(true)
    expect(await fligthDetails.$filter(testdata.time[3]).isEnabled()).withContext("The morning time is added as the filter").toBe(true);

  });
  it("Click on the airline to travel", async () => {
    await fligthDetails.clickOnFlightFilter(testdata.airlines[2]);
    expect(await fligthDetails.$filter(testdata.airlines[2]).isEnabled())
      .withContext("The vistara travels is selected for the traveling is selected").toBe(true);
  });

  it("Get the price of the flight and validate whether the prices are in descending order ", async () => {
    await fligthDetails.clickOnPriceFilter();
    expect(await fligthDetails.getPriceAndSort())
      .withContext("Price is sorted in descending order")
      .toBe(true);
  });

  it("Click on the details of the flight, validate the airline selected, validate the from location,to location", async () => {
    let count = await fligthDetails.getCount()
    for (let i = 1; i <= count; i++) {
      await fligthDetails.clickOnFlightDetails(i);
      expect(await fligthDetails.$filter(testdata.airlines[2]).isEqual(await fligthDetails.$flightName(testdata.airlines[2])))
      expect(await fligthDetails.$clickDetailsFrom(testdata.fromClick).isEqual(await fligthDetails.$location(testdata.fromClick)))
      expect(await fligthDetails.$clickDetailsTo(testdata.toClick).isEqual(await fligthDetails.$location(testdata.toClick)))
    }
  })

  it("Click on the book button and login option must be displayed", async () => {
    await fligthDetails.clickOnBook();
    expect(await fligthDetails.$loginHeader().waitForDisplayed({ timeout: 3000 }))
      .withContext("Login page should be displayed")
      .toBe(true);
  });
});
