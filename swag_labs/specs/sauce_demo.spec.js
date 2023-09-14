import { cartPage } from "../page_objects/cart_page.js";
import { homePage } from "../page_objects/home_page.js"
import { information } from "../page_objects/information_page.js";
import { overview } from "../page_objects/overview_page.js";

let productPrice = 0;

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
        expect(await homePage.$addButton('remove-sauce-labs-fleece-jacket').isDisplayed())
            .withContext("Remove button displayed").toBe(true);
        productPrice = await homePage.$productPrice().getText()

    })
    it("Click on cart image and verify navigTion", async() => {
        await cartPage.clickOnAddToCartImage()
            // $yourCart().waitForDisplayed({ timeout: 3000 })
        expect(await cartPage.$yourCart().isDisplayed())
            .withContext("Your Cart Is displayed").toBe(true);
        // expect(await cartPage.$verifySelectedItem().isDisplayed())
        //.withContext("Selected item to  be displayed").toBe(true);
        // expect(await cartPage.$checkout().isDisplayed())
        //     .withContext("verify whether checkout is displyaed").tobe(true);
    })
    it("Click on checkout and verify navigation", async() => {
        await cartPage.clickOnCheckoutButton();
        expect(await cartPage.$header2().isDisplayed())
            .withContext("verify checout information is displayed").toBe(true);

    })
    it("Add user details and verify navigation", async() => {
        await information.clickOnUserDetails()
        expect(await information.$header3().isDisplayed())
            .withContext("verify whether the checkout over view is displyed").toBe(true);
    })
    it("Overview", async() => {
        let itemTotal = await overview.$itemTotal().getText();
        let itemTotalNew = await parseFloat(itemTotal.slice(13, 18));
        let tax = await overview.$tax().getText();
        let taxNew = await parseFloat(tax.slice(6, 13));
        let total = await overview.$total().getText();
        let totalNew = await parseFloat(total.slice(8, 15));
        let productPriceNew = await parseFloat(productPrice.slice(1, 9));
        expect(await overview.verifyPrice(itemTotalNew, productPriceNew)).withContext("Expect item price equals to item total")
            .toBe(true);
        expect(await overview.verifyTotalPrice(itemTotalNew, totalNew, taxNew)).withContext("Expect total price is addition of tax and item total")
            .toBe(true);
    })



});