import { landingPage } from "../page-objects/landing-page.js";
import { registerForm } from "../page-objects/register-page.js";
import { outletPage } from "../page-objects/outlet-page.js";
import { checkOutPage } from "../page-objects/checkOut-page.js";
import random from "random-letters";

let firstName = random(4);
let lastName = random(5);
let phoneNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
let outletName = "MAX FASHIONS";
describe("End to end automation of eDelivery website", () => {
  it("Load the site", async () => {
    await landingPage.loadPage();
    expect(await landingPage.$header().isDisplayed())
      .withContext("Header is not displayed")
      .toBe(true);
  });
  it("Click on login button and Register button", async () => {
    await landingPage.register();
    await landingPage.$loginButton().waitForDisplayed({ timeout: 2000 });
    expect(await landingPage.$logoValidation().isDisplayed())
      .withContext("Login pop up is not displayed")
      .toBe(true);
    expect(await landingPage.$registerValidation().isDisplayed())
      .withContext("Register pop up is not displayed")
      .toBe(true);
  });
  it("Enter details to register", async () => {
    await registerForm.fillForm(firstName, lastName, firstName, phoneNumber);
    expect(await registerForm.$loginMessage().isDisplayed())
      .withContext("Unsuccessful login")
      .toBe(true);
    expect(await registerForm.$nameValidation(firstName).isDisplayed())
      .withContext("First name is not displayed")
      .toBe(true);
  });
  it("Select category and delivery location and verify navigation to the outlets page", async () => {
    await landingPage.selectCategoryAndLocation();
    expect(await landingPage.$validationIcon().isDisplayed()).toBe(true);
  });
  it("Select an outlet and verify navigation ", async () => {
    await outletPage.slectOutlet(outletName);
    expect(await outletPage.$outletName(outletName).isDisplayed())
      .withContext("Outlet is not there")
      .toBe(true);
  });
  it("Select an item,increase the qauntity and the item to cart", async () => {
    let comparison = await outletPage.addTocart("White shirt");
    expect(await comparison).toBe(true);
  });
  it("Check out from cart page", async () => {
    await checkOutPage.checkOut();
    expect(await checkOutPage.$checkoutHeader().isDisplayed()).toBe(true);
  });
});
