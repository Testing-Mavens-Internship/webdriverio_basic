import { edeliveryHomePage } from "../pageobjects/home-page.js";
import { register } from "../pageobjects/register.js";
// import randomName from 'random-name';
// import randomEmail from 'random-letters';
// import randomNumber from 'random-number';
import { faker } from "@faker-js/faker";

let firstName = faker.person.firstName();
let lastName = faker.person.lastName();
// let email = faker.internet.email();
let email = firstName + "@gmail.com";
let phone = "9" + faker.number.int({ min: 99999999, max: 999999999 });

describe("random number generating in edelivery page signup", () => {
  it("loading the url", async () => {
    await edeliveryHomePage.openUrl();

    expect(await edeliveryHomePage.$logo().isDisplayed())
      .withContext("Expect E Delivery logo to be displayed")
      .toBe(true);
  });

  it("Click on login and click on signup now", async () => {
    await edeliveryHomePage.clickOnLogin();
    expect(await edeliveryHomePage.$signup().isDisplayed())
      .withContext("Expect E Delivery signup button to be displayed")
      .toBe(true);
    await edeliveryHomePage.clickOnSignup();
    expect(await register.$registerButton().isDisplayed())
      .withContext("Expect continue button in register popup")
      .toBe(true);
  });

  it("fill register popup", async () => {
    await register.fillForm(firstName, lastName, email, phone);
    expect(await edeliveryHomePage.$successfullToastMessage().isDisplayed())
      .withContext("Expect registered succefully toast message to be displayed")
      .toBe(true);
    expect(await edeliveryHomePage.$userHeader().isDisplayed())
      .withContext("Expect user header with username to be displayed")
      .toBe(true);
  });

  it("select services and set the location", async () => {
    await edeliveryHomePage.selectServices();
    await edeliveryHomePage.setLocation();
  });
});
