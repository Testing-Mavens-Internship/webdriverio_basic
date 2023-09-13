import { cartPage } from "../page-objects/cart-page.js";
import { checkOutPage } from "../page-objects/checkout-page.js";
import { homePage } from "../page-objects/home-page.js";

xdescribe("Sauce demo automation",() => {
    it("load the sauce demo url", async () => {
        await homePage.openUrl()
        expect(await homePage.$header().isDisplayed())
            .withContext("Expect header to be displayed")
            .toBe(true);
    });
    it("Login and verify header",async ()=>{
        await homePage.loginUser()
        expect(await homePage.$header().isDisplayed())
        .withContext("Expecting header to be displayed")
        .toBe(true)
    })
    it("Sort and add item to cart",async ()=> {
        let val = await homePage.addProductToCart()
        expect(await homePage.$verify(val).isDisplayed())
        .withContext("Expecting remove button to be displayed")
        .toBe(true)
    })
    it("Click on cart and verify navigation",async ()=>{
        await cartPage.navigateToCart()
        let value = await homePage.sortProductPrice()
        expect(await cartPage.$verify(value).isDisplayed())
        .withContext("Expecting closen product price")
        .toBe(true)
    })
    it("Enter details and checkout and verify navigation",async ()=>{
        await checkOutPage.navigateToCheckout()
        expect(await checkOutPage.$header().isDisplayed())
        .withContext("Expecting header to be displayed as a proof of navigation")
        .toBe(true)
    })
    it("Finish Order and confirm message",async () => {
        await checkOutPage.finishOrdering()
        expect(await checkOutPage.$confirmation().isDisplayed())
        .withContext("Expecting confirmation message")
        .toBe(true)
    })
    it("Back home and verify navigation",async () =>{
        await checkOutPage.backHome()
        expect(await checkOutPage.$header().isDisplayed())
        .withContext("Expecting header")
        .toBe(true)
    })
})