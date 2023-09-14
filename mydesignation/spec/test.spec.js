import { landingPage } from "../pageobject/common.js";
import { addProduct } from "../pageobject/add-product.js";
import { viewCart } from "../pageobject/view-cart.js";
import { billingPage } from "../pageobject/billing-page.js";

describe("Mydesignation Automation", () => {
    it("load the mydesignation url", async () => {
      await landingPage.openUrl();
    expect(await landingPage.$headerTitle().isDisplayed())
       .withContext("Expect header to be displayed")
       .toBe(true);
    });

    it("add product", async () => {
        await addProduct.product();
        expect(await landingPage.$headerTitle().isDisplayed()).withContext("Expect header to be displayed").toBe(true);
        expect(await landingPage.$orderName().isDisplayed()).withContext("Expect Order name is displayed").toBe(true);
    });

    it("Select the size", async()=>{
        await addProduct.clickSize();
        expect(await addProduct.$checkIfSelectedShorts().isDisplayed()).withContext("Expect Shorts size to be displayed").toBe(true);
        expect(await addProduct.$checkIfSelectedTshirt().isDisplayed()).withContext("Expect Tshirt is selected is displayed").toBe(true);

    })

    it("Add to cart", async()=>{
        await addProduct.addToCart();
        expect(await addProduct.$headerCheck().isDisplayed()).withContext("Expect Shorts size to be displayed").toBe(true);
    })

    it("View cart", async()=>{
        await addProduct.viewCart();
        expect(await addProduct.$headerCheckCArt().isDisplayed()).withContext("Expect Shorts size to be displayed").toBe(true);

    })

    it("View Checkout", async()=>{
        await viewCart.checkOUt();
        expect(await viewCart.$headerCheckBilling().isDisplayed()).withContext("Expect Billing  to be displayed").toBe(true);

    })

    it("Billing page", async()=>{
        await billingPage.placeOrder();
        expect(await billingPage.$numberError().isDisplayed()).withContext("Expect Number error meassage to be displayed").toBe(true);
        expect(await billingPage.$errorDisplay("First name").isDisplayed()).withContext("Expect first name error meassage to be displayed").toBe(true);

    })

    it("Enter the input",async()=>{
        await billingPage.inputFields();
        expect(await billingPage.$errorDisplay("Last name").waitForDisplayed({reverse:true})).withContext("Expect  last name meassage to be displayed");
        expect(await billingPage.$errorDisplay("Street address").waitForDisplayed({reverse:true})).withContext("Expect  Street address meassage to be displayed");
        expect(await billingPage.$errorDisplay(" Town / City").waitForDisplayed({reverse:true})).withContext("Expect  town/city meassage to be displayed");
        expect(await billingPage.$errorDisplay("State").waitForDisplayed({reverse:true})).withContext("Expect  state meassage to be displayed");
        expect(await billingPage.$errorDisplay("PIN Code").waitForDisplayed({reverse:true})).withContext("Expect  PIN CODE meassage to be displayed");
        expect(await billingPage.$errorDisplay("Phone").waitForDisplayed({reverse:true})).withContext("Expect Phone number error message is displayed");
        expect(await billingPage.$errorDisplay("Email address").waitForDisplayed({reverse:true})).withContext("Expect Email address error message is displayed");
    })
})   