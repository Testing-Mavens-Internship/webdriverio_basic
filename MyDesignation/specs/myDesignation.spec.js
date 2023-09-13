import { landingPage } from "../page-objects/landing-page.js";
import { selectedProduct } from "../page-objects/selected-product-page.js";
import { proceedCheckout } from "../page-objects/proceed-checkout-page.js";
import { billingDetailsPage } from "../page-objects/billing-details-page.js";


let firstName="billing_first_name"
let lastName="billing_last_name"
let address1="billing_address_1"
let address2="billing_address_2"
let city="billing_city"
let pinCode="billing_postcode"
let phone="billing_phone"
let email="billing_email"




describe("MyDesignation application: ", () => {
    it("It should lauch the MyDesignation application", async () => {
       // let id
      await landingPage.launchUrl();
    //  expect(await landingPage.$header().isDisplayed()).withContext("The header conatin men,women,kid,Couple Tees & Combos,Accessories,Plus Size Store,Track Order,Custom Print, Wishlist").toBe
    expect(await landingPage.$header().isDisplayed()).withContext("Expect the landing page conatin application logo").toBe(true)
});
 
  it("Click on the item to be purchase",async()=>{
    await landingPage.clickOnItem()
    expect(await selectedProduct.$selectedProductHeader().isDisplayed()).withContext("Clicked item should be open with a new page with the selected product Heading").toBe(true)
  })
  it("Select the item size",async()=>{
    await selectedProduct.clickOnProductSize("M","32")
   // expect(await selectedProduct.$productSize1("M").isDisplayed()).withContext("Expect the selected value should be enable").toBe(true)
   // expect(await selectedProduct.$productSize2("32").isDisplayed()).withContext("Expect the selected value should be enable").toBe(true)
    expect( await selectedProduct.$productAddConformation().isDisplayed()).withContext("Expect the product name should be display on the top left while clicking on the add to cart button").toBe(true) 
 })
 it("Click on click to proceed button",async()=>{
    await proceedCheckout.clickOnProceedCheckout()
    expect(await proceedCheckout.$billingDetailsHeading().isDisplayed()).withContext("Expect the page should display with Billing Details heading").toBe(true)

 })
 it("Click on place order button",async()=>{
  await billingDetailsPage.clickOnPlaceOrderButton()
 // await billingDetailsPage.formValidation()
  let warning=await billingDetailsPage.$$billFormWarning().map((item)=>item.getText())
 // let warnings = warning.map((item) => item.replace("is a required field.", ""));
        for(let item of warning){
          expect(await billingDetailsPage.$billFormWarningFields(item).isDisplayed()).withContext(`Expect the warning contain empty mandatory field "${item}"`).toBe(true)
        
        }
      })

   it("Click on the first name field and enter the first name",async()=>{
      await billingDetailsPage.fillingInputFields(firstName,lastName,address1,address2,city,pinCode,phone,email)
      let arr=[firstName,lastName,address1,address2,city,pinCode,phone,email]
      for(let item of arr){
        expect(await billingDetailsPage.$inputFields(item).isDisplayed()).withContext(`Expect show warning of other fields when ${item} only fill and click on the place order`).toBe(true)
      }

     // expect(await billingDetailsPage.$billFormWarningFields(item).isDisplayed()).withContext(`Expect the warning contain empty mandatory field "${item}"`).toBe(true)
        })


 })

