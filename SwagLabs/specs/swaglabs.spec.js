import { homePage } from "../pageobjects/home-page.js";
import { cartPage } from "../pageobjects/cart-page.js";
import { checkOutPage } from "../pageobjects/checkout-page.js";

let AtoZ="Name (A to Z)";
let ZtoA="Name (Z to A)";
let lowtoHigh="Price (low to high)";
let hightoLow="Price (high to low)";

 let title1="Products";
 let title2="Your Cart";
 let title3="Checkout: Your Information";
 let title4="Checkout: Overview";
 let title5="Checkout: Complete!";

 let firstName="Anchana";
 let lastName="Babu";
 let postalCode="686011";
 let product = "Sauce Labs Fleece Jacket";
 let productPrice = 0;


xdescribe('My Login application', () => {
    it('should launch the url', async () => {
        await homePage.openUrl()
        expect(await homePage.$header().isDisplayed()).withContext('expect home page logo is displayed ').toBe(true);
    })
    it('Enter username and password' ,async ()=>{
        await homePage.loginApplication()
        expect(await homePage.$header().isDisplayed()).withContext('expect Swag Labs text is visible ').toBe(true);
    })
    it("Sort the products",async()=>{
        await homePage.sort(hightoLow)
         expect(await homePage.sortValidation()).withContext("Expect the items should be sorted").toBe(true)
    })
    it("Click on the Highest price item",async()=>{
        await homePage.clickOnAddToCart()
        productPrice =  await homePage.$price(product).getText();  
        expect(await homePage.$remove().isDisplayed()).withContext("Expect Add to cart button text changes to remove").toBe(true)
    })
    it("Click on the cart icon",async()=>{
        await homePage.clickOnCartIcon()
       expect(await homePage.$productTitle(title2).isDisplayed()).withContext("Expect the Cart title on the homepage").toBe(true)
       expect(await homePage.$selectedCartItemName().isDisplayed()).withContext("Expect the cart contain name of the product added").toBe(true)
    })
    it("Click on the checkout button",async()=>{
        await cartPage.clickOnCheckoutButton()
        expect(await homePage.$productTitle(title3).isDisplayed()).withContext("Expect the checkout page conatin 'Checkout: Your Information' title").toBe(true)
       // expect(await cartPage.$checkOutProductname().isDisplayed()).withContext("Expect name of item in the cart").toBe(true)
    })
    it("Fill the checkout form",async()=>{
        await checkOutPage.fillCheckoutForm(firstName,lastName,postalCode)
        expect(await homePage.$productTitle(title4).isDisplayed()).withContext("Expect checkout overview page conatin the Checkout: Overview heading").toBe(true)
            
            let itemTotal = await checkOutPage.$priceField("Item total").getText();
            let itemTotalNew = await parseFloat(itemTotal.slice(13, 18));
            let tax = await checkOutPage.$priceField("Tax").getText();
            let taxNew = await parseFloat(tax.slice(6, 13));
            let total = await checkOutPage.$totalPrice().getText();
            let totalNew = await parseFloat(total.slice(8, 15));
            let productPriceNew = await parseFloat(productPrice.slice(1, 9));
            expect(await checkOutPage.verifyPrice(itemTotalNew, productPriceNew)).withContext("Expect item price equals to item total").toBe(true);
            expect(await checkOutPage.verifyTotalPrice(itemTotalNew, taxNew, totalNew)).withContext("Expect total price is addition of tax and item total").toBe(true);
          })

    it("Click on finish Button",async()=>{
        await checkOutPage.clickOnFinish()
        expect(await homePage.$productTitle(title5).isDisplayed()).withContext("Expect the Thank you page contain Checkout: Complete! heading").toBe(true)
        expect(await homePage.$thankYouTitle().isDisplayed()).withContext("Expect the Thank you page contain Thank you for your order heading ").toBe(true)

    })
})   
