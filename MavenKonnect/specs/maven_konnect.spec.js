import { cartPage } from "../page-objects/cart_page.js";
import { details_page } from "../page-objects/details_page.js";
import { homePage } from "../page-objects/home_page.js";
let windowHandle;
let fullName = "Tester 1"
let emailId = "tester@gamail"
let nameOncard = "Tester"
let address = "Tester 1,tesre2"
let cardNumber = "1234"
let city = "NY"
let expMonth = "seprtember"
let state = "kerala"
let zip = "321233"
let expYear = "2023"
let cvv = "213"

describe("Maven Konnect Autoamtion", () => {
    it("Launch the url", async() => {
        await homePage.loadUrl();
        expect(await homePage.$header().isDisplayed())
            .withContext("Expected header to be displayed")
            .toBe(true);
    });
    it("Click on Contact Us And verify navigation", async() => {
        await homePage.clickOnContactUs();
        windowHandle = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandle[1]);
        expect(await homePage.$contactUsHeader().isDisplayed())
            .withContext("Expected Contact Us header to be displayed")
            .toBe(true);
    });
    it("Enter user details,click on send and Validate navigation", async() => {
        await details_page.enterUserDetails();
        if (await browser.isAlertOpen()) {
            await browser.acceptAlert();
        }
        expect(await homePage.$thankyouHeader().isDisplayed())
            .withContext("Thankyou expected header")
            .toBe(true);
    });
    /**Moving back to home page */
    it("close the existing window and back to home page ", async() => {
        await browser.closeWindow();
        await browser.switchToWindow(windowHandle[0]);
        expect(await homePage.$header().isDisplayed())
            .withContext("Expected header to be displayed")
            .toBe(true);
    });

    it("click on cart page and verify navigate", async() => {
        await homePage.$cartButton();
        expect(await homePage.$header().isDisplayed())
            .withContext("expected header to be displayed").toBe(true);

    })
    it("Fill the billing fileds", async() => {
        await cartPage.$continueToCheckoutButton(
            fullName,
            emailId,
            nameOncard,
            address,
            cardNumber,
            city,
            expMonth,
            state,
            zip,
            expYear,
            cvv
        );
        if (await browser.isAlertOpen()) {
            await browser.acceptAlert();
        }

        expect(await homePage.$thankyouHeader().isDisplayed())
            .withContext("Thankyou expected header")
            .toBe(true);


    })
});