import { homePage } from "../page-objects/home-page.js";
import randomName from 'random-letters'
import randomNumber from 'random-num'

let firstName = randomName(6);
let lastName = randomName(2);
let number = randomNumber(100000000,999999999);

describe("End to end flow for the application eDelivery", () => {
    it("load the url", async () => {
      await homePage.openUrl();
      expect(await homePage.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
    });

    it("Signup and verify navigation", async () => {
        await homePage.clickSignUp();
        expect(await homePage.$validateSignUp().isDisplayed())
        .withContext("Expect register popup to be displayed")
        .toBe(true);
    })

    it("Fill form and validate navigation", async () => {
        await homePage.fillFormField(firstName,lastName,firstName,number);
        expect(await homePage.$validateContinue1().isDisplayed())
        .withContext("Expect popup to be displayed")
        .toBe(true);
        expect(await homePage.$validateContinue2().isDisplayed())
        .withContext("Expect name to be displayed")
        .toBe(true);
    })
    it("Select service, location and validate navigation", async () => {
        await homePage.selectServiceLocation();
        // expect(await homePage.$validateContinue1().isDisplayed())
        // .withContext("Expect popup to be displayed")
        // .toBe(true);
});
});