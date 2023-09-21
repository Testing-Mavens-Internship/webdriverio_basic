import { homePage } from "../page-objects/home-page.js";
import { bookingDetails } from "../page-objects/flight-booking-page.js";
import data from "../testdata/data.json" assert { type: "json" };
import { bookingViewPage } from "../page-objects/booking-view-page.js";

describe("Flipkart Autoamtion", () => {
  it("Launch the url", async () => {
    await homePage.loadUrl();
    expect(await homePage.$header().isDisplayed())
      .withContext("Expected header to be displayed")
      .toBe(true);
  });

  it("Click on travel button", async () => {
    await homePage.clickOnTravelButton("");
    expect(await homePage.$travelPageHeader().isDisplayed())
      .withContext("expected header to be displayed")
      .toBe(true);
  });

  it("Booking ticket", async () => {
    await bookingDetails.searchFlights(
      data.from,
      data.to,
      data.month,
      data.day,
      data.categoryAdults,
      data.categoryChildren,
      data.ticketClass
    );
    expect(await bookingDetails.$verifyPlaceaHeader(data.from).isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("Filter", async () => {
    expect(
      await bookingViewPage.filter(
        data.time,
        data.departureTimeShift,
        data.arrivalTimeShift
      )
    )
      .withContext("time to be afternoon")
      .toBe(true);
  });

  it("Validating sort", async() =>{
    expect(await bookingViewPage.sortPrice()).withContext("Expect the descending order").toBe(true);
     expect(await bookingViewPage.$verifyPriceArrow().isDisplayed())
       .withContext("Arrow is changed")
       .toBe(true);
   })
   
  it("Validating the Flight Info", async () => {
    await bookingViewPage.clickOnFlightDetail();
    expect(await bookingViewPage.$outputFlightDetails(data.from).isDisplayed())
      .withContext("Expect source to be kochi")
      .toBe(true);
    expect(await bookingViewPage.$outputFlightDetails(data.to).isDisplayed())
      .withContext("Expect destination to be bangalore")
      .toBe(true);
  });

  
  

  

  it("Click on Flight", async () => {
    await bookingViewPage.bookFlight(data.flightNumber);
    expect(await homePage.$closeIcon().isDisplayed())
      .withContext("Expect a popup to be displayed")
      .toBe(true);
  });
});
