import { fillForm } from "../page-objects/fill-form-page.js";
import { homePage } from "../page-objects/home-page.js";
import { productDetails } from "../page-objects/product-details-page.js";
import { viewCart } from "../page-objects/view-cart-page.js";

let productName = "Sukuna Co-Ords Set for Women";
let tShirt = "XS";
let shorts = 30;
let errorMessage = [];
let firstName = "Anisha";
let lastName = "VA";
let streetAddress = "214 abc street";
let appartment = "AK Arcades";
let town = "kakkanad";
let state = "Kerala";
let pinCode = 680683;
let phone = 1234567890;
let email = "anisha@gmail.com";
describe("MYDESIGNATION Application Automation", () => {
    it("load the url", async () => {
      await homePage.openUrl();
      expect(await homePage.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
    });

    it("Select product", async () => {
      await homePage.selectProduct(productName);
      expect(await homePage.$verifyProduct(productName).isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
    });

    it("Select size and verify add to cart button", async () => {
      await productDetails.selectSize(tShirt,shorts);
      expect(await productDetails.$addToCartButton().isDisplayed())
      .withContext("Expected add to cart button is enabled")
      .toBe(true);
    })

    it ("Click on add to cart", async () => {
      await productDetails.clickAddToCart(productName);
      expect(await productDetails.$verifyAddToCart(productName).isDisplayed())
      .withContext("Expected a message showing product added to the cart")
      .toBe(true);
    })
    it ("Click on view cart", async () => {
      await productDetails.clickViewCart();
      expect(await viewCart.$verifyCartPage().isDisplayed())
      .withContext("Expected 'Shopping cart' to be displayed")
      .toBe(true);
      expect (await viewCart.$verifyProduct(productName,tShirt,shorts).isDisplayed())
      .withContext("Expect product to be displayed")
      .toBe(true);
    })

    it("Click on proceed to chech out and verify navigation", async () => {
      await viewCart.clickProceedCheckout();
      expect(await fillForm.$verifyProceedCheckout().isDisplayed())
      .withContext("Expected 'Billing Details' to be displayed")
      .toBe(true);
    });

    it("Click place order button", async () => {
      await fillForm.clickPlaceOrder();
      errorMessage =await fillForm.$$verifyFillForm().map(item => item.getText());
      for(let item of errorMessage){
      expect(await fillForm.$verifyErrorMessages(item).isDisplayed())
      .withContext("Expected error message to be displayed")
      .toBe(true);}
    })

    it("enter first name and verify error message", async () => {
      await fillForm.fillFirstName(firstName);
      await fillForm.clickPlaceOrder();
      expect(await fillForm.$verifyEachErrorMessage("Billing First name").waitForDisplayed({timeout : 5000, reverse : true}));
    })
    it("enter last name and verify error message", async () => {
      await fillForm.fillFirstName(firstName);
      await fillForm.fillLastName(lastName);
      await fillForm.clickPlaceOrder();
      expect(await fillForm.$verifyEachErrorMessage("Billing First name").waitForDisplayed({timeout : 5000, reverse : true}));
      expect(await fillForm.$verifyEachErrorMessage("Billing Last name").waitForDisplayed({timeout : 5000, reverse : true})); 
    })
    it("enter StreetAddress and verify error message", async () => {
      await fillForm.fillFirstName(firstName);
      await fillForm.fillLastName(lastName);
      await fillForm.fillStreetAddress(streetAddress,appartment);
      await fillForm.clickPlaceOrder();
      await browser.pause(2000)
      expect(await fillForm.$verifyEachErrorMessage("Billing First name").waitForDisplayed({timeout : 5000, reverse : true}));
      expect(await fillForm.$verifyEachErrorMessage("Billing Last name").waitForDisplayed({timeout : 5000, reverse : true})); 
      expect(await fillForm.$verifyEachErrorMessage("Billing Street address").waitForDisplayed({timeout : 5000, reverse : true})); 
    })
    it("enter Town and verify error message", async () => {
      await fillForm.fillFirstName(firstName);
      await fillForm.fillLastName(lastName);
      await fillForm.fillStreetAddress(streetAddress,appartment);
      await fillForm.fillTown(town);
      await fillForm.clickPlaceOrder();
      expect(await fillForm.$verifyEachErrorMessage("Billing First name").waitForDisplayed({timeout : 5000, reverse : true}));
      expect(await fillForm.$verifyEachErrorMessage("Billing Last name").waitForDisplayed({timeout : 5000, reverse : true})); 
      expect(await fillForm.$verifyEachErrorMessage("Billing Street address").waitForDisplayed({timeout : 5000, reverse : true})); 
      expect(await fillForm.$verifyEachErrorMessage("Billing Town / City").waitForDisplayed({timeout : 5000, reverse : true})); 
    })
    it("select state and verify error message", async () => {
      await fillForm.fillFirstName(firstName);
      await fillForm.fillLastName(lastName);
      await fillForm.fillStreetAddress(streetAddress,appartment);
      await fillForm.fillTown(town);
      await fillForm.fillState(state);
      await fillForm.clickPlaceOrder();
      expect(await fillForm.$verifyEachErrorMessage("Billing First name").waitForDisplayed({timeout : 5000, reverse : true}));
      expect(await fillForm.$verifyEachErrorMessage("Billing Last name").waitForDisplayed({timeout : 5000, reverse : true})); 
      expect(await fillForm.$verifyEachErrorMessage("Billing Street address").waitForDisplayed({timeout : 5000, reverse : true})); 
      expect(await fillForm.$verifyEachErrorMessage("Billing Town / City").waitForDisplayed({timeout : 5000, reverse : true})); 
      expect(await fillForm.$verifyEachErrorMessage("Billing State").waitForDisplayed({timeout : 5000, reverse : true})); 
    })
    it("enter pincode and verify error message", async () => {
      await fillForm.fillFirstName(firstName);
      await fillForm.fillLastName(lastName);
      await fillForm.fillStreetAddress(streetAddress,appartment);
      await fillForm.fillTown(town);
      await fillForm.fillPinCode(pinCode);
      await fillForm.clickPlaceOrder();
      expect(await fillForm.$verifyEachErrorMessage("Billing First name").waitForDisplayed({timeout : 5000, reverse : true}));
      expect(await fillForm.$verifyEachErrorMessage("Billing Last name").waitForDisplayed({timeout : 5000, reverse : true})); 
      expect(await fillForm.$verifyEachErrorMessage("Billing Street address").waitForDisplayed({timeout : 5000, reverse : true})); 
      expect(await fillForm.$verifyEachErrorMessage("Billing Town / City").waitForDisplayed({timeout : 5000, reverse : true})); 
      expect(await fillForm.$verifyEachErrorMessage("Billing PIN Code ").waitForDisplayed({timeout : 5000, reverse : true})); 
    })
    it("enter phone and verify error message", async () => {
      await fillForm.fillFirstName(firstName);
      await fillForm.fillLastName(lastName);
      await fillForm.fillStreetAddress(streetAddress,appartment);
      await fillForm.fillTown(town);
      await fillForm.fillPinCode(pinCode);
      await fillForm.fillPhone(phone);
      await fillForm.clickPlaceOrder();
      expect(await fillForm.$verifyEachErrorMessage("Billing First name").waitForDisplayed({timeout : 5000, reverse : true}));
      expect(await fillForm.$verifyEachErrorMessage("Billing Last name").waitForDisplayed({timeout : 5000, reverse : true})); 
      expect(await fillForm.$verifyEachErrorMessage("Billing Street address").waitForDisplayed({timeout : 5000, reverse : true})); 
      expect(await fillForm.$verifyEachErrorMessage("Billing Town / City").waitForDisplayed({timeout : 5000, reverse : true})); 
      expect(await fillForm.$verifyEachErrorMessage("Billing PIN Code ").waitForDisplayed({timeout : 5000, reverse : true})); 
      expect(await fillForm.$verifyEachErrorMessage("Billing Phone ").waitForDisplayed({timeout : 5000, reverse : true})); 
    })
    it("enter email and verify error message", async () => {
      await fillForm.fillFirstName(firstName);
      await fillForm.fillLastName(lastName);
      await fillForm.fillStreetAddress(streetAddress,appartment);
      await fillForm.fillTown(town);
      await fillForm.fillPinCode(pinCode);
      await fillForm.fillPhone(phone);
      await fillForm.fillEmail(email);
      await fillForm.clickPlaceOrder();
     })


});