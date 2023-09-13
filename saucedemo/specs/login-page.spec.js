import { cart } from "../pageobjects/cart-page.js";
import {login} from "../pageobjects/login-page.js"
import { product } from "../pageobjects/products-page.js";
import { over } from "../pageobjects/overview-page.js"

xdescribe("Saucedemo Application Text Box automation", () => {
    it("load the saucedemo url", async () => {
      await login.openUrl();
      expect(await login.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
    });

    it("Click on text box and validate", async () => {
        let userName = "standard_user";
        let password = "secret_sauce";
        await login.ClickField(userName, password);
        expect(await login.$header('Products').isDisplayed())
        .withContext('Expect header to be displayed')
        .toBe(true)
    });

    it("Click on sort and validate", async () => {
        await product.clickOnSort();
        expect (await product.clickOnSort()).withContext('Expect function to be true').toBe(true)
    });
    
    it("Click on add to cart", async () =>{
        await product.ClickOnCart();
        expect(await product.$cartButton('remove-sauce-labs-backpack').isDisplayed())
        .withContext('Expect remove button')
        .toBe(true)
    });

    it("Click on cart button and verify navigation", async () => {
        await product.ClickCart();
        expect(await product.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
        expect(await product.$yourCart().isDisplayed())
        .withContext("Expect your cart is displayed")
        .toBe(true)
    });

    it("Click on checkout and verify navigation", async () => {
        await cart.clickOnCheckout();
        expect(await cart.$info().isDisplayed())
        .withContext("Expect checkout page is displayed")
        .toBe(true)
        expect(await cart.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
    });

    it("Click on text box", async () => {
        let firstName = "Hello";
        let lastName = "World";
        let zipcode = "123456"
        await cart.fillForm(firstName, lastName, zipcode);
      expect(await cart.$continue("first-name").getValue()).toBe(firstName);
      expect(await cart.$continue("last-name").getValue()).toBe(lastName);
      expect(await cart.$continue("postal-code").getValue()).toBe(zipcode);
      
    });

    it("Click on continue and verify navigation", async () => {
        await cart.clickOnContinue();
        expect(await cart.$overview().isDisplayed())
        .withContext("Expect overview page is displayed")
        .toBe(true)
        expect(await cart.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
    });

    it("Price comparison in product overview page", async () => {
        let a=  await over.priceComparison("Sauce Labs Fleece Jacket");
         expect(await a).toBe(true);
       });

    it("Total price comparison in overview page", async () => {
        await over.totalPrice();
        expect(await over.totalPrice()).withContext('Expect function to be true').toBe(true)
    });

    it("Click on finish and verify navigation", async () => {
        await over.clickOnFinish();
        expect(await over.$end().isDisplayed())
        .withContext("Expect checkout complete page is displayed")
        .toBe(true)
        expect(await over.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
    });

    it("Click on back home and verify navigation", async () => {
        await over.clickOnHome();
        expect(await product.$header('Products').isDisplayed())
        .withContext('Expect header to be displayed')
        .toBe(true)
        expect(await product.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
    });


});
    

  
    