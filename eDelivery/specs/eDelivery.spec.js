import { land } from "../pageobjects/landing.js";
import randomName from "random-name";
import randomNum from "random-num";
import { homePage } from "../pageobjects/home-page.js";
let firstName = randomName.first();
let lastName = randomName.last();
let email = firstName + "@gmail.com";
let phone = randomNum(9000000000, 9999999999);
describe("End-to-end automation of eDelivery application", () => {
  it("Launch the url and verify header", async () => {
    await land.launchUrl();
    expect(await land.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("Enetr values in the text fields", async () => {
    await land.clickOnLogin();
    await land.enterText(firstName, lastName, email, phone);
  });

  it("Click on continue and verify login of user", async () => {
    await land.clickOnContinue();
    expect(
      await land.$success().waitForDisplayed({ timeout: 20000, reverse: true })
    )
      .withContext("Expect success messgae to be disappears")
      .toBe(true);
    expect(await land.$user(firstName).isDisplayed())
      .withContext("Expect the user to be same as the login user")
      .toBe(true);
  });

  it("Select location and verify navigation", async () => {
    await homePage.selectLoaction("chennai");
    expect(await homePage.$header().isDisplayed())
      .withContext("Expect navigation to outlets page")
      .toBe(true);
  });

  it("Select outlet and verify navigation", async () => {
    await homePage.clickOnOutlet();
    expect(await homePage.$recommended().waitForDisplayed({ timeout: 20000}))
      .withContext("Expect navigation to items page")
      .toBe(true);
  });
});
