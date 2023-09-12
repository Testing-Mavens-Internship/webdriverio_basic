import { loginPage } from '../page-objects/login-page.js';
import { homePage } from '../page-objects/home-page.js';
import {cartPage} from '../page-objects/cart-page.js'
import { yourInformationPage } from '../page-objects/yourInformantion-page.js';
import { checkOutOverview } from '../page-objects/checkOutOverview-page.js';
import { checkoutCompletePage } from '../page-objects/checkOutcomplete-page.js';
let firstName="Test"
let lastName="Tester"
let zipCode="78905"
let productChosen="Sauce Labs Fleece Jacket"
describe("Sauce Demo Application Text Box automation", () => {
    
    
    it("Load the url", async () => {
        await loginPage.openUrl();
            expect(await loginPage.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
      });
      it("Login into the application", async()=>{
        await loginPage.loginToApplication("standard_user","secret_sauce")
        expect(await loginPage.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
      
      })
      it("Sort all the products",async()=>{
        await homePage.sortProducts()
        expect(await homePage.sortProducts()).toBe(true)
      })
      it("Add item to cart",async()=>{

        await homePage.addToCart("Sauce Labs Fleece Jacket")
        
        expect(await homePage.$verifyRemove("Sauce Labs Fleece Jacket").isDisplayed())
        .withContext("Expect Remove not displayed")
        .toBe(true)
      })
      it("click on cart icon",async()=>{
        await homePage.clickOnCartIcon();
        expect(await homePage.$header().isDisplayed()).withContext("Header not displayed").toBe(true)
        expect(await homePage.$cartIcon().isDisplayed()).withContext("Cart icon not displayed").toBe(true)

      })
      it("Click on checkout button",async()=>{
        await cartPage.clickOnCheckoutButton();
      })
      it("Fill check out infromation",async()=>{
        await yourInformationPage.fillCheckoutInformation(firstName,lastName,zipCode)
        expect (await yourInformationPage.$header().isDisplayed()).withContext("Header not displayed").toBe(true)
        expect(await yourInformationPage.$secondaryHeader("Checkout: Overview").isDisplayed()).toBe(true)
      })
      it("Price comparison in product overview page",async()=>{
        await checkOutOverview.priceComparison("Sauce Labs Fleece Jacket");
        expect(await checkOutOverview.priceComparison()).toBe(true)
      })
      it("Click on Finish button",async()=>{
await checkOutOverview.finishButton();

expect (await checkOutOverview.$header().isDisplayed()).withContext("Header is displayed").toBe(true)
expect (await checkOutOverview.$secondaryHeader("Checkout: Complete!").isDisplayed()).withContext("Checkout: Overview is not displayed").toBe(true)
      })
      it("Click on Back to home button",async()=>{
        await checkoutCompletePage.clickBackHome();
        expect (await checkoutCompletePage.$header().isDisplayed()).toBe(true)
      })
      
})

