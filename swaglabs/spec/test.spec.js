
import {landing} from "../pageobject/login-page.js"
import { sort } from "../pageobject/sort.js";
import { cartPage } from "../pageobject/cart-page.js";
import { checkOutPage } from "../pageobject/checkout-page.js";

describe("Swaglabs  automation", () => {
    it("load the saucedemo url", async () => {
      await landing.openUrl();
    expect(await landing.$headerTitle().isDisplayed())
       .withContext("Expect header to be displayed")
       .toBe(true);
    });
    it("login to the application",async() =>{
        await landing.login();
        expect(await landing.$header().isDisplayed())
       .withContext("Expect header to be displayed")
       .toBe(true);
    });
    it("Sort price high to low", async () => {

        await sort.sorting();
    
        expect(await sort.$item1().isDisplayed())
    
          .withContext("Expect the product to be displayed")
    
          .toBe(true);
    
        expect(await sort.sortingValidation()).withContext("Expect price to be sorted").toBe(true);
    
      });
    
     
    
      it("Add item to cart", async () => {
    
        await sort.addToCart();
    
        expect(await sort.$button("REMOVE").isDisplayed())
    
          .withContext("Expect remove button to be displayed")
    
          .toBe(true);
    
      });
      it("click on cart icon", async () => {

        await cartPage.clickOnCart();
    
        expect(await landing.$header().isDisplayed())
    
          .withContext("Expect header to be displayed in cart page")
    
          .toBe(true);
    
        expect(await sort.$item1().isDisplayed())
    
          .withContext("Expect item to be displayed")
    
          .toBe(true);
    
      });
    
     
    
      it("Click on checkout", async () => {
    
        await cartPage.clickOnCheckout();
    
        expect(await checkOutPage.$sideHeading("Checkout: Your Information").isDisplayed()).withContext("Expect side heading to be displayed").toBe(true);
    
        expect(await landing.$header().isDisplayed()).withContext("Expect header to be displayed").toBe(true);
    
        
    
      })
      it("Enter details and click continue", async() => {

        await checkOutPage.enterDetails();
    
        expect(await landing.$header().isDisplayed()).withContext("Expect header to be displayed");
    
        expect(await sort.$item1().isDisplayed()).withContext("Expect product to be same").toBe(true);

        
    
      })
    
     
    
      it("Click on finish", async() => {
    
        await checkOutPage.clickFinish();
    
        
        expect(await checkOutPage.$orderComplete().isDisplayed()).withContext("Expect finish heading to be displayed").toBe(true);
    
        expect(await landing.$header().isDisplayed()).toBe(true);
    
      })
    
     
    
    })

  