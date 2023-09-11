import { cartPage } from "../page_objects/cart_page.js";
import { homePage } from "../page_objects/home_page.js"

describe("Swag Labs application Home Page Autaomation", () => {
    it("Launch the url", async() => {
        await homePage.openUrl()
        expect(await homePage.$header().isDisplayed()).withContext("Expected header to be displayed").toBe(true);
    })

    it("Load the URL and click on Login", async() => {
        await homePage.login()
        expect(await homePage.$header().isDisplayed()).withContext("Expected Header to be displayed").toBe(true);

    })
    it("Select the price sort from drop down", async() => {
        await homePage.priceSort()
        expect(await homePage.priceSort()).withContext("Expected to be true").toBe(true);

    })
    it("Click On Add Button And Verify the navigation", async() => {
        await homePage.clickOnAddToCart()
        expect(await homePage.$addButton('remove-sauce-labs-backpack').isDisplayed())
            .withContext("Remove button displayed").toBe(true);
    })
    it("Click on cart image and verify navigTion", async() => {
        await cartPage.clickOnAddToCartImage()
        expect(await cartPage.$yourCart().isDisplayed())
            .withContext("Your Cart Is displayed").toBe(true)
    })
});