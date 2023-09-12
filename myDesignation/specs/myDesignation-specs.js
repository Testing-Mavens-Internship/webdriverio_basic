import { landingPage } from "../page-objects/landing-page.js";
import { productPage } from "../page-objects/product-page.js";
import { cartPage } from "../page-objects/cart-page.js";
import { billingDetailsPage } from "../page-objects/billingDetails-page.js";
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
it("Click on place order button ", async()=>{
await billingDetailsPage.clickOnPaceOrder()
errorArray= await billingDetailsPage.$$errorMessages().map(item => item.getText())
for (let item of errorArray) {
  expect(await billingDetailsPage.$errorMessage(item).isDisplayed()).withContext("text is not displayed").toBe(true);
  //await billingDetailsPage.fillForm(fname,lname,StreetAaddress1,StreetAaddress2,townCity,state,pinCode,phone,email)

}
})



});
