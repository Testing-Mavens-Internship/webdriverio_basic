import { landingPage } from "../page-objects/home-page.js";

describe("Sausedemo Application Automation", () => {
    it("load the sausedemo url", async () => {
      await landingPage.openUrl();
      expect(await landingPage.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
    });

    let userName = "standard_user"
    let password = "secret_sauce"
    it("User login", async () => {
        await landingPage.login(userName,password)
        expect(await landingPage.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
    })

    it("sort products based on price high to low", async () => {
        await landingPage.clickSort();
        expect(await landingPage.clickSort()).toBe(true);
    }) 

    let product = "Sauce Labs Fleece Jacket"
    it("Click on add to cart", async () => {
        await landingPage.clickOnAddToCart(product);
        expect(await landingPage.$verifyRemove(product).isDisplayed())
        .withContext("Expect Remove to be displayed")
        .toBe(true);
    }) 
});