import { billingPage } from "../page-objects/billingdetails-page.js";
import { cartPage } from "../page-objects/cart-page.js";
import { homePage } from "../page-objects/home-page.js";
import { productPage } from "../page-objects/productDetails.js";

let firstName = "devika";
let lastName = "s";
let streetAddress = "manjanikara";
let appartment = "vrindhavan";
let town = "omalloor";
let state = "Kerala";
let pinCode = 689647;
let phone = 9999999999;
let email = "devika@gmail.com";



describe("Mydesignation Application automation", () => {

    it("load the mydesignation url", async () => {
      await homePage.openUrl();
      expect(await homePage.$title().isDisplayed()).withContext("Expect Title to be displayed").toBe(true);
    });

    it("Click on the desired product and verify navigation", async () => {
      await homePage.viewProduct();
      expect(await productPage.$details("Gojo Co-Ords Set for Men").isDisplayed()).withContext("Expect product to be clicked").toBe(true);
    });

    it("Click on the size of desired product", async () => {
      let size = "M"
      let ssize ="32"
      await productPage.sizeOfProduct(size,ssize);
      expect(await productPage.$addCart("Add to cart").isDisplayed()).withContext("Expect product size to be clicked").toBe(true);
    });
  
    it("click on add to cart",async()=>{
      await productPage.addToCart();
      expect(await productPage.$viewText(" Gojo Co-Ords Set for Men” has been added to your cart. ").isDisplayed()).withContext("Expect product size to be clicked").toBe(true);

    });
    
    it("click on view cart and verify navigation",async()=>{
      await productPage.viewTheCart();
      expect(await cartPage.$viewCartPage().isDisplayed()).withContext("Expect header to be displayed").toBe(true);
    
    });

    it("click on proceed to checkout and verify navigation",async()=>{
      await cartPage.proceedToCheckout();
      expect(await billingPage.$billing().isDisplayed()).withContext("Expect header to be displayed").toBe(true);
    
});

  
  it("Click place order button", async () => {

    await billingPage.clickOnPlaceOrder();
    errorMessage = await billingPage.$$verifyFillForm().map(item => item.getText());
    for(let item of errorMessage){
    expect(await billingPage.$errorMessages(item).isDisplayed()).withContext("Expected error message to be displayed").toBe(true);}

  })


it("Enter input details",async () => {
  let firstName = "devika";
  await billingPage.enterInputValues(firstName);
  expect(await billingPage.$eachErrorMessage('billing_first_name').waitForDisplayed({reverse:true})).withContext("Expect the error message is not to be displayed");
});




it("enter first name and verify error message", async () => {

  await fillForm.fillFirstName(firstName);
  await fillForm.clickPlaceOrder();
  expect(await fillForm.$eachErrorMessage("Billing First name").waitForDisplayed({timeout : 5000, reverse : true}));

})

it("enter last name and verify error message", async () => {

  await fillForm.fillFirstName(firstName);
  await fillForm.fillLastName(lastName);
  await fillForm.clickPlaceOrder();
  expect(await fillForm.$eachErrorMessage("Billing First name").waitForDisplayed({timeout : 5000, reverse : true}));
  expect(await fillForm.$eachErrorMessage("Billing Last name").waitForDisplayed({timeout : 5000, reverse : true}));

})

it("enter StreetAddress and verify error message", async () => {

  await fillForm.fillFirstName(firstName);
  await fillForm.fillLastName(lastName);
  await fillForm.fillStreetAddress(streetAddress,appartment);
  await fillForm.clickPlaceOrder();
  await browser.pause(2000)

  expect(await fillForm.$eachErrorMessage("Billing First name").waitForDisplayed({timeout : 5000, reverse : true}));
  expect(await fillForm.$eachErrorMessage("Billing Last name").waitForDisplayed({timeout : 5000, reverse : true}));
  expect(await fillForm.$eachErrorMessage("Billing Street address").waitForDisplayed({timeout : 5000, reverse : true}));

})

it("enter Town and verify error message", async () => {

  await fillForm.fillFirstName(firstName);
  await fillForm.fillLastName(lastName);
  await fillForm.fillStreetAddress(streetAddress,appartment);
  await fillForm.fillTown(town);
  await fillForm.clickPlaceOrder();

  expect(await fillForm.$eachErrorMessage("Billing First name").waitForDisplayed({timeout : 5000, reverse : true}));
  expect(await fillForm.$eachErrorMessage("Billing Last name").waitForDisplayed({timeout : 5000, reverse : true}));
  expect(await fillForm.$eachErrorMessage("Billing Street address").waitForDisplayed({timeout : 5000, reverse : true}));
  expect(await fillForm.$eachErrorMessage("Billing Town / City").waitForDisplayed({timeout : 5000, reverse : true}));

})

it("select state and verify error message", async () => {

  await fillForm.fillFirstName(firstName);
  await fillForm.fillLastName(lastName);
  await fillForm.fillStreetAddress(streetAddress,appartment);
  await fillForm.fillTown(town);
  await fillForm.fillState(state);
  await fillForm.clickPlaceOrder();

  expect(await fillForm.$eachErrorMessage("Billing First name").waitForDisplayed({timeout : 5000, reverse : true}));
  expect(await fillForm.$eachErrorMessage("Billing Last name").waitForDisplayed({timeout : 5000, reverse : true}));
  expect(await fillForm.$eachErrorMessage("Billing Street address").waitForDisplayed({timeout : 5000, reverse : true}));
  expect(await fillForm.$eachErrorMessage("Billing Town / City").waitForDisplayed({timeout : 5000, reverse : true}));
  expect(await fillForm.$eachErrorMessage("Billing State").waitForDisplayed({timeout : 5000, reverse : true}));

})

it("enter pincode and verify error message", async () => {

  await fillForm.fillFirstName(firstName);
  await fillForm.fillLastName(lastName);
  await fillForm.fillStreetAddress(streetAddress,appartment);
  await fillForm.fillTown(town);
  await fillForm.fillPinCode(pinCode);
  await fillForm.clickPlaceOrder();

  expect(await fillForm.$eachErrorMessage("Billing First name").waitForDisplayed({timeout : 5000, reverse : true}));
  expect(await fillForm.$eachErrorMessage("Billing Last name").waitForDisplayed({timeout : 5000, reverse : true}));
  expect(await fillForm.$eachErrorMessage("Billing Street address").waitForDisplayed({timeout : 5000, reverse : true}));
  expect(await fillForm.$eachErrorMessage("Billing Town / City").waitForDisplayed({timeout : 5000, reverse : true}));
  expect(await fillForm.$eachErrorMessage("Billing PIN Code ").waitForDisplayed({timeout : 5000, reverse : true}));

})

it("enter phone and verify error message", async () => {

  await fillForm.fillFirstName(firstName);
  await fillForm.fillLastName(lastName);
  await fillForm.fillStreetAddress(streetAddress,appartment);
  await fillForm.fillTown(town);
  await fillForm.fillPinCode(pinCode);
  await fillForm.fillPhone(phone);
  await fillForm.clickPlaceOrder();

  expect(await fillForm.$eachErrorMessage("Billing First name").waitForDisplayed({timeout : 5000, reverse : true}));
  expect(await fillForm.$eachErrorMessage("Billing Last name").waitForDisplayed({timeout : 5000, reverse : true}));
  expect(await fillForm.$eachErrorMessage("Billing Street address").waitForDisplayed({timeout : 5000, reverse : true}));
  expect(await fillForm.$eachErrorMessage("Billing Town / City").waitForDisplayed({timeout : 5000, reverse : true}));
  expect(await fillForm.$eachErrorMessage("Billing PIN Code ").waitForDisplayed({timeout : 5000, reverse : true}));
  expect(await fillForm.$eachErrorMessage("Billing Phone ").waitForDisplayed({timeout : 5000, reverse : true}));

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

  expect(await fillForm.$eachErrorMessage("Billing First name").waitForDisplayed({timeout : 5000, reverse : true}));
  expect(await fillForm.$eachErrorMessage("Billing Last name").waitForDisplayed({timeout : 5000, reverse : true}))
  expect(await fillForm.$eachErrorMessage("Billing Street address").waitForDisplayed({timeout : 5000, reverse : true}));
  expect(await fillForm.$eachErrorMessage("Billing Town / City").waitForDisplayed({timeout : 5000, reverse : true}));
  expect(await fillForm.$eachErrorMessage("Billing PIN Code ").waitForDisplayed({timeout : 5000, reverse : true}));
  expect(await fillForm.$eachErrorMessage("Billing Phone ").waitForDisplayed({timeout : 5000, reverse : true}));
  expect(await fillForm.$eachErrorMessage("Billing Email address").waitForDisplayed({timeout : 5000, reverse : true}));

});

});