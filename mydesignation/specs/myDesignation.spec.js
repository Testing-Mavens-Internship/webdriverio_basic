import CommonPage from "../pageobjects/common.js";
import { homePage } from "../pageobjects/home-page.js";
import { cartPage } from "../pageobjects/cart-page.js";
import { checkOutPage } from "../pageobjects/checkout-page.js";

let name = "Anchana";
let lastName = "Babu";
let streetAddress = "Payyappady";
let city = "Puthuppally";
let state = "Kerala";
let pinCode = "686011";
let phone = "9447110461";
let emailAddress = "abc@gmail.com";

describe('My Login application', () => {
    it('should launch the url', async () => {
        await homePage.openUrl()
        expect(await homePage.$header().isDisplayed()).withContext('expect home page logo is displayed ').toBe(true);
    })
    it('select item and validate', async () => {
        await homePage.selectItem()
        expect(await homePage.$subHeader("Sukuna Co-Ords Set for Women").isDisplayed()).withContext('expect text is displayed ').toBe(true);

    })
    it('select sizes and click on add to cart ', async () => {
        await homePage.selectSizes()
        await homePage.clickOnCartIcon()
        expect(await homePage.$productName().isDisplayed()).withContext('expect selected product is displayed ').toBe(true);

    })

    it("Click on the checkout button", async () => {
        await cartPage.clickOnCheckoutButton()
        expect(await cartPage.$billingHeader().isDisplayed()).withContext("Expect billing header is displayed").toBe(true);

    })
    it("Click on place order button", async () => {
        await checkOutPage.clickOnPlaceOrderButton()
        expect(await checkOutPage.$errorMessage("Billing First name").isDisplayed()).withContext("Expect error messages are displayed ").toBe(true);

    })




})


