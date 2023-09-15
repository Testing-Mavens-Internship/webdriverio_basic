import CommonPage from "../pageobjects/common.js";
import { homePage } from "../pageobjects/home-page.js";
import { cartPage } from "../pageobjects/cart-page.js";
import { checkOutPage } from "../pageobjects/checkout-page.js";

xdescribe('My Login application', () => {
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
        await checkOutPage.$errorMessage("Billing First name").waitForDisplayed({timeout:2000});
        expect(await checkOutPage.$errorMessage("Billing First name").isDisplayed()).withContext("Expect error messages are displayed ").toBe(true);
        await checkOutPage.$errorMessage("Billing Last name").waitForDisplayed({timeout:2000});
        expect(await checkOutPage.$errorMessage("Billing Last name").isDisplayed()).withContext("Expect error messages are displayed ").toBe(true);
        await checkOutPage.$errorMessage("Billing Street address").waitForDisplayed({timeout:2000});
        expect(await checkOutPage.$errorMessage("Billing Street address").isDisplayed()).withContext("Expect error messages are displayed ").toBe(true);
        await checkOutPage.$errorMessage("Billing Town / City").waitForDisplayed({timeout:2000});
        expect(await checkOutPage.$errorMessage("Billing Town / City").isDisplayed()).withContext("Expect error messages are displayed ").toBe(true);
        await checkOutPage.$errorMessage("Billing State").waitForDisplayed({timeout:2000});
        expect(await checkOutPage.$errorMessage("Billing State").isDisplayed()).withContext("Expect error messages are displayed ").toBe(true);
        await checkOutPage.$errorMessage("Billing PIN Code").waitForDisplayed({timeout:2000});
        expect(await checkOutPage.$errorMessage("Billing PIN Code").isDisplayed()).withContext("Expect error messages are displayed ").toBe(true);
        await checkOutPage.$errorMessage("Billing Phone").waitForDisplayed({timeout:2000});
        expect(await checkOutPage.$errorMessage("Billing Phone").isDisplayed()).withContext("Expect error messages are displayed ").toBe(true);
        await checkOutPage.$errorMessage("Billing Email address").waitForDisplayed({timeout:2000});
        expect(await checkOutPage.$errorMessage("Billing Email address").isDisplayed()).withContext("Expect error messages are displayed ").toBe(true);
        
    })

    it("Enter the details" , async () =>{
        await checkOutPage.enterDetails();
        expect(await checkOutPage.$errorMessage("Billing First name").waitForDisplayed({reverse:true})).withContext("Expect error messages disappeared ");
        expect(await checkOutPage.$enterFields("Billing Last name").waitForDisplayed({reverse:true})).withContext("Expect error messages disappeared ");
        expect(await checkOutPage.$errorMessage("Billing Street address").waitForDisplayed({reverse:true})).withContext("Expect error messages are displayed ");
        expect(await checkOutPage.$errorMessage("Billing Town / City").waitForDisplayed({reverse:true})).withContext("Expect error messages are displayed ");
        expect(await checkOutPage.$errorMessage("Billing State").waitForDisplayed({reverse:true})).withContext("Expect error messages are displayed ");
        expect(await checkOutPage.$errorMessage("Billing PIN Code").waitForDisplayed({reverse:true})).withContext("Expect error messages are displayed ");
        expect(await checkOutPage.$errorMessage("Billing Phone").waitForDisplayed({reverse:true})).withContext("Expect error messages are displayed ");
        expect(await checkOutPage.$errorMessage("Billing Email address").waitForDisplayed({reverse:true})).withContext("Expect error messages are displayed ");
    })
})


