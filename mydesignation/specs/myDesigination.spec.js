import { billing } from "../page_objects/billing_page.js";
import { cart } from "../page_objects/cart_page.js";
import { homePage } from "../page_objects/home_page.js";
firstName = tester1;

describe("My Desiganation Autaoamtion", () => {
    it("Launch the url", async() => {
        await homePage.openUrl();
        expect(await homePage.$header().isDisplayed())
            .withContext("Expected header to be displayed")
            .toBe(true);
    });

    it("Click On product and verify navigation", async() => {
        await homePage.clickOnProduct();
        expect(await homePage.$productheader().isDisplayed())
            .withContext("Expected header to be displayed")
            .toBe(true);
    });

    it("Click Add to cart verify navigation", async() => {
        await cart.addToCart();
        expect(await cart.$cartHeader().isDisplayed())
            .withContext("expected header to be displayed")
            .toBe(true);
    });

    it("Click on cart contents and checkout and verify navigation", async() => {
        await cart.clickOnCartContents();
        expect(await cart.$billingHeader().isDisplayed())
            .withContext("verify the header")
            .toBe(true);
    });
    it("User details valiadtions", async() => {
        await billing.billingValidation("billing_last_name_field", firstName);
    });
});