import { landingPage } from "../page-objects/landing-page.js";
import { registerForm } from "../page-objects/register-page.js";
import random from "random-letters";


let firstName = random(4);
let lastName = random(5);
let phoneNumber = Math.floor(Math.random() * 9000000000) + 1000000000;

describe("End to end automation of eDelivery website", () => {
  it("Load the site", async () => {
    await landingPage.loadPage();
    expect(await landingPage.$header().isDisplayed())
      .withContext("Header is not displayed")
      .toBe(true);
  });
  it("Click on login button and Register button", async () => {
    await landingPage.register();
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
  it("Select category and delivery location", async () => {
    await landingPage.selectCategoryAndLocation();
    expect(await landingPage.$validationIcon().isDisplayed()).toBe(true);
  });
});
