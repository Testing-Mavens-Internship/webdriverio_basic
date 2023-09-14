import { homePage } from "../page-objects/home-page.js";
import { contactUs } from "../page-objects/contactus-page.js";
import { checkOut } from "../page-objects/checkout-page.js";
let fullName = "Anisha";
let email = "anisha@gmail.com";
let phone = 1234567890;
let message = "smart watch";
let windowHandle;
let address = "abc street";
let city = "IJK";
let state = "kerala";
let zip = 680683;
let cardnumber = 1111222233334444;
let expmonth = "september";
let expyear = 2023;
let cvv = 123;
describe("End to end flow for the application mavenKonnect", () => {
    it("load the url", async () => {
      await homePage.openUrl();
      expect(await homePage.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
    });

    it("Click contact us button and verify navigation", async () => {
        await homePage.clickContactUs();
        windowHandle = await browser.getWindowHandles(); 
        await browser.switchToWindow(windowHandle[1]);
        expect(await contactUs.$contactHeader().isDisplayed())
        .withContext("Expect contact us header to be displayed")
        .toBe(true);   
    })

    it("fill form and verify navigation", async () => {
        await contactUs.fillForm(fullName,email,phone,message);
        expect(await contactUs.$verifyThankYou().isDisplayed())
        .withContext("Expect contact us header to be displayed")
        .toBe(true);   
    })

    it("close current window and go back to home page", async () => {
        await browser.closeWindow()
        await browser.switchToWindow(windowHandle[0]);
        expect(await homePage.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);   
    })

    it("click cart icon and verify navigation", async () => {
        await homePage.clickCart();
        expect(await checkOut.$checkOutHeader().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);   
    })

    it("Fill personal details and click submit", async () => {
        await checkOut.fillFormField(fullName,email,address,city,state,zip,fullName,cardnumber,expmonth,expyear,cvv);
         expect(await checkOut.$verifyThankYou().isDisplayed())
        .withContext("Expect contact us header to be displayed")
        .toBe(true);  
    })
});