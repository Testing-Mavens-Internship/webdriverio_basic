import {login} from "../pageobjects/login-page.js"
import { product } from "../pageobjects/products-page.js";

describe("Saucedemo Application Text Box automation", () => {
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

    it("Click on cart button and verify navigatio", async () => {
        await product.ClickCart();
        expect(await product.$yourCart().isDisplayed())
        .withContext("Expect your cart is displayed")
        .toBe(true)
    });


});
    

  
    