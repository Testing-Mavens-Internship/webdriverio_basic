import { homePage } from "../pageobjects/home-page.js";
describe('My Login application', () => {
    it('should launch the url', async () => {
        await homePage.openUrl()
        await homePage.$header().waitForDisplayed({timeout:12000});
        expect(await homePage.$header().waitForDisplayed()).withContext('expect header is displayed ').toBe(true);
    })

    it('book flight tickets', async () => {
        await homePage.bookFlightTickets()
        expect(await homePage.$validateFrom().waitForDisplayed()).withContext('expect header is displayed ').toBe(true);
        expect(await homePage.$validateTo().waitForDisplayed()).withContext('expect header is displayed ').toBe(true);
    })
})



































