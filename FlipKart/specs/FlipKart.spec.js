import { homePage } from "../pageobjects/home-page.js";
import { bookingPage } from "../pageobjects/booking-page.js";
import data from "../testData/test-data.json" assert {type:"json"};

describe('My Login application', () => {
    it('should launch the url', async () => {
        await homePage.openUrl()
        expect(await homePage.$header().isDisplayed()).withContext('expect header is displayed ').toBe(true);
    })

    it('search flight tickets', async () => {
        await homePage.clickOnTravel()
        expect(await homePage.$travelHeader().isDisplayed()).withContext('expect travel header is displayed ').toBe(true);
    })

    it('book flight tickets', async () => {
        await homePage.searchFlightTickets(data.from,data.to,data.clickFrom,data.clickTo,data.month,data.day,data.adults,data.children,data.cabinClass)
        expect(await homePage.$travelHeader().isDisplayed()).withContext('expect travel header is displayed ').toBe(true);
        expect(await homePage.$validateFrom().waitForDisplayed()).withContext('expect from place is displayed ').toBe(true);
        expect(await homePage.$validateTo().waitForDisplayed()).withContext('expect to place is displayed ').toBe(true);
        expect(await homePage.$validateDate().waitForDisplayed()).withContext('expect date is displayed ').toBe(true);
    })

    it('Apply filters', async () => {
        await bookingPage.applyFilters()
        expect(await bookingPage.$ticketPrice("₹30,653").isDisplayed()).withContext('expect highest price is displayed ').toBe(true);
    })
    it("Sorting of flight price", async ()=> {
        await bookingPage.sortPrice();
        expect (await bookingPage.sortPrice()).withContext("Expect price is displayed in decsending order").toBe(true);
      });

    it("Validate flight details",async()=>{
        for(let i=1;i<bookingPage.$$flightDetails().length;i++){
    await bookingPage.validateFlight(i)
    expect (await bookingPage.$airportValidation(from).isDisplayed).toBe(true)
    expect (await bookingPage.$airportValidation(to).isDisplayed).toBe(true)
     }
    })

    it('click on book button and validate', async () => {
        await bookingPage.bookFlight("₹30,653")
        expect(await bookingPage.$loginText().waitForDisplayed()).withContext('expect login text is displayed ').toBe(true);
    })        
})