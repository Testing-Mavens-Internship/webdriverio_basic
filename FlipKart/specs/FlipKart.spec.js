import { homePage } from "../pageobjects/home-page.js";
import { bookingPage } from "../pageobjects/booking-page.js";
let from = "BOM";
let to = "COK";

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
        await homePage.searchFlightTickets(from,to)
        expect(await homePage.$travelHeader().isDisplayed()).withContext('expect travel header is displayed ').toBe(true);
        expect(await homePage.$validateFrom().waitForDisplayed()).withContext('expect from place is displayed ').toBe(true);
        expect(await homePage.$validateTo().waitForDisplayed()).withContext('expect to place is displayed ').toBe(true);
        expect(await homePage.$validateDate().waitForDisplayed()).withContext('expect date is displayed ').toBe(true);
    })

    it('Apply filters', async () => {
        await bookingPage.applyFilters()
        expect(await bookingPage.$ticketprice("₹30,653").isDisplayed()).withContext('expect highest price is displayed ').toBe(true);
    })

    it('click on book button and validate', async () => {
        await bookingPage.bookFlight("₹30,653")
        expect(await bookingPage.$loginText().isDisplayed()).withContext('expect login text is displayed ').toBe(true);
    })        
})