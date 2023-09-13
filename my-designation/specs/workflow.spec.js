import { billingPage } from "../page-objects/billing-page.js";
import { cartPage } from "../page-objects/cart-page.js";
import { homePage } from "../page-objects/home-page.js";
import { productPage } from "../page-objects/product-page.js";

describe("My Designation Automation",()=>{
    it("load the my-designation url", async () => {
        await homePage.openUrl()
        expect(await homePage.$header().isDisplayed())
            .withContext("Expect header to be displayed")
            .toBe(true);
        expect(await homePage.$menuBar().isDisplayed())
            .withContext("Expect menubar to be displayed")
            .toBe(true);
    });
    it("Select a product and verify navigation",async ()=>{
        await homePage.clickOnItem()
        expect(await productPage.$productName().isDisplayed())
            .withContext("Expected product name to be displayed")
            .toBe(true)
    })
    it("Select product size, add them to cart and verify navigation",async()=>{
        await productPage.addToCart()
        expect(await productPage.$cart("Gojo Co-Ords Set for Men").isDisplayed())
            .withContext("Expected product name to be displayed")
            .toBe(true)
    })
    it("Proceed to checkout and verify navigation",async ()=>{
        await cartPage.proceedToCheckOut()
        expect(await cartPage.$subHeader("Billing Details").isDisplayed())
            .withContext("Expected billing details to be displayed")
            .toBe(true)
    })
    it("Enter details and verify",async ()=>{
        let warnings = [];
        warnings = await billingPage.$$warningMessages().map(item => item.getText());
        for(let item of warnings){
            expect(await item.isDisplayed()).withContext("Expecting warning messages").toBe(true)
        }

        await billingPage.enterFirstName()
        expect(await billingPage.$verifyIndividual("Billing First name").isDisplayed())
            .withContext("Expecting first name")
            .toBe(true)

        await billingPage.enterLastName()
        expect(await billingPage.$verifyIndividual("Billing Last name").isDisplayed())
            .withContext("Expecting last name")
            .toBe(true)
        
        await billingPage.enterAddress()
        expect(await billingPage.$verifyIndividual("Billing Street address").isDisplayed())
            .withContext("Expecting address")
            .toBe(true)

        await billingPage.enterCity()
            expect(await billingPage.$verifyIndividual("Billing Town / City").isDisplayed())
                .withContext("Expecting city")
                .toBe(true)
        
        await billingPage.enterState()
            expect(await billingPage.$verifyIndividual("Billing State").isDisplayed())
                .withContext("Expecting state")
                .toBe(true)

        await billingPage.enterPostCode()
            expect(await billingPage.$verifyIndividual("Billing PIN Code").isDisplayed())
                .withContext("Expecting post code")
                    .toBe(true)

        await billingPage.enterPhone()
            expect(await billingPage.$verifyIndividual("Billing Phone").isDisplayed())
                .withContext("Expecting phone number")
                    .toBe(true)

        await billingPage.enterEmail()
            expect(await billingPage.$verifyIndividual("Billing Email address").isDisplayed())
                .withContext("Expecting email address")
                    .toBe(true)

    })

    
})