import { loginPage } from "../page-objects/login-page.js";
import { homePage } from "../page-objects/home-page.js";
import randomName from 'random-letters'
import randomNumber from 'random-num'

let firstName = randomName(6);
let lastName = randomName(2);
let number = randomNumber(100000000,999999999);
let place = "Chennai"
let location = "Tamil Nadu, India"
let product = "MAX FASHIONS"
let item = "Blue jeans"
describe("End to end flow for the application eDelivery", () => {
    it("load the url", async () => {
      await loginPage.openUrl();
      expect(await loginPage.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
    });

    it("Signup and verify navigation", async () => {
        await loginPage.clickSignUp();
        expect(await loginPage.$validateSignUp().isDisplayed())
        .withContext("Expect register popup to be displayed")
        .toBe(true);
    })

    it("Fill form and validate navigation", async () => {
        await loginPage.fillFormField(firstName,lastName,firstName,number);
        expect(await loginPage.$validateContinue1().isDisplayed())
        .withContext("Expect popup to be displayed")
        .toBe(true);
        expect(await loginPage.$validateContinue2().isDisplayed())
        .withContext("Expect name to be displayed")
        .toBe(true);
    })
    it("Select service, location and validate navigation", async () => {
        await loginPage.selectServiceLocation(place);
        expect(await loginPage.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
    });
    it('Go to product page and verify navigation',async()=>{
        await homePage.selectProduct(product);
        expect(await homePage.$recommended().isDisplayed())
        .withContext("Expect 'Recommended' header to be displayed")
        .toBe(true);
    });
    it('select item and verify navigation',async()=>{
        await homePage.selectItem(item);
        // expect(await homePage.S().isDisplayed())
        // .withContext("Expect 'Recommended' header to be displayed")
        // .toBe(true);
    });


});