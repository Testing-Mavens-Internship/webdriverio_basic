import { landingPage } from "../page-objects/landing-page.js";
import { productPage } from "../page-objects/product-page.js";
import { cartPage } from "../page-objects/cart-page.js";
import { billingDetailsPage } from "../page-objects/billingDetails-page.js";
import { paymentPage } from "../page-objects/payment-page.js";
let product="Gojo Co-Ords Set for Men"
let errorArray=[]
let fname="Test"
let lname="Tester"
let StreetAaddress1="Street1 Lane1"
let StreetAaddress2="Road Place"
let townCity="City"
let pinCode="898989"
let phone="9898989898"
let email="test@gmail.com"
let state="KL"
describe("MYDESIGNATION automation", () => {
  it("Load url", async () => {
    await landingPage.openUrl();
    expect(await landingPage.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });
  // it("Validating whether all the menu items are displayed", async()=>{

  //   let menuItems = [];
  //   let newArray=[];
  //   menuItems = await landingPage.$$navigationBar().map(item => item.getText())

  //       newArray = await menuItems.map(item=>item.replace("\nNEW",""))
  //   for (let item of newArray) {
  //     expect(await landingPage.$menuItem(item).isDisplayed()).withContext("menu item  is not displayed").toBe(true);

  //   }
  //         })

  it("click on a product and validate navigation ", async () => {
    await landingPage.clickOnProduct();
    expect(
      await productPage.$productPageHeading("Gojo Co-Ords Set for Men")
        .isDisplayed()).withContext("Header is not displayed").toBe(true);
});
it("Select the size of of the product and click on Add to cart Button.Validate navigation",async()=>{
    await productPage.addToCart("S","32");
    expect(await cartPage.$productNameInCart(product).isDisplayed()).withContext("product name does not match").toBe(true)
})
it("click on proceed to checkout button and validate navigation",async()=>{
  await cartPage.clickOnProceedToCheckOutButton();
  expect(await billingDetailsPage.$secondaryHeader().isDisplayed()).toBe(true)
  //expect(await billingDetailsPage.$placeOrderButton().isDisplayed()).toBe(true)
  

})
it("Click on place order button without filling mandatory fields", async()=>{
await billingDetailsPage.clickOnPaceOrder()
errorArray= await billingDetailsPage.$$errorMessages().map(item => item.getText())
for (let item of errorArray) {
  expect(await billingDetailsPage.$errorMessage(item).isDisplayed()).withContext("text is not displayed").toBe(true);
}


})
it("Click on place order without filling one mandatory field each",async()=>{
 errorArray= await billingDetailsPage.$$errorMessages().map(item => item.getText())
 
  await billingDetailsPage.clickOnPlaceorderWithoutFIllingOneMandatoryFIeldEach("billing_first_name",fname)
 expect(await billingDetailsPage.$errorMessageNew("Billing First name").waitForDisplayed({timeout:2000, reverse: true}));
 await billingDetailsPage.clickOnPlaceorderWithoutFIllingOneMandatoryFIeldEach("billing_last_name",lname)
 expect(await billingDetailsPage.$errorMessageNew("Billing Last name").waitForDisplayed({timeout:2000, reverse: true}));
 await billingDetailsPage.clickOnPlaceorderWithoutFIllingOneMandatoryFIeldEach("billing_address_1",StreetAaddress1)
 expect(await billingDetailsPage.$errorMessageNew("Billing Street address").waitForDisplayed({timeout:2000, reverse: true}));
 await billingDetailsPage.clickOnPlaceorderWithoutFIllingOneMandatoryFIeldEach("billing_address_2",StreetAaddress1)
 expect(await billingDetailsPage.$errorMessageNew("Billing Street address").waitForDisplayed({timeout:2000, reverse: true}));
 await billingDetailsPage.clickOnPlaceorderWithoutFIllingOneMandatoryFIeldEach("billing_city",StreetAaddress1)
 expect(await billingDetailsPage.$errorMessageNew("Billing Town / City").waitForDisplayed({timeout:2000, reverse: true}));
 await billingDetailsPage.clickOnPlaceorderWithoutFIllingOneMandatoryFIeldEach("billing_postcode","682021")
 expect(await billingDetailsPage.$errorMessageNew("Billing PIN Code").waitForDisplayed({timeout:2000, reverse: true}));
 await billingDetailsPage.clickOnPlaceorderWithoutFIllingOneMandatoryFIeldEach("billing_phone","8989898989")
 expect(await billingDetailsPage.$errorMessagePhone("Billing Phone").waitForDisplayed({timeout:2000, reverse: true}));
 await billingDetailsPage.clickOnPlaceorderWithoutFIllingOneMandatoryFIeldEach("billing_email","test@gmail.com")
 expect(await billingDetailsPage.$errorMessageNew("Billing Email address").waitForDisplayed({timeout:2000, reverse: true}));
 await billingDetailsPage.clickOnPlaceorderWithoutFIllingOneMandatoryFIeldEach("billing_email","test@gmail.com")
 expect(await billingDetailsPage.$errorMessageNew("Billing Email address").waitForDisplayed({timeout:2000, reverse: true}));
})
it("Enter place order after entering state",async()=>{
  await billingDetailsPage.stateValidation(state)
  expect(await billingDetailsPage.$errorMessageNew("Billing State").waitForDisplayed({timeout:20000, reverse: true}));
})


it("Click on the place order button after entering all the madatory fiels",async()=>{
  await billingDetailsPage.fillForm(fname,lname,StreetAaddress1,StreetAaddress2,townCity,state,pinCode,phone,email)
  await paymentPage.$payNowButton().waitForDisplayed({timeout:3000})
expect(await paymentPage.$payNowButton().isDisplayed()).withContext("Pay Now button is not visible").toBe(true)
})


});
