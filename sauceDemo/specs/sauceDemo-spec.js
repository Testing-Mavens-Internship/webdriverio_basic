import { loginPage } from '../page-objects/login-page.js';
import { homePage } from '../page-objects/home-page.js';

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
      
})