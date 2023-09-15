import { homePage } from "../page-objects/home-page.js";
import names from "random-names-generator";
let firstName = names.random();
let lastName = names.random();
let eMail = firstName + "@gmail.com";
let phoneNumber = "9" + Math.floor(Math.random() * 1000000000);
describe("EDelivery site automation", () => {
  it("Launch URL", async () => {
    await homePage.launchUrl();
    expect(await homePage.$logo().isDisplayed())
      .withContext("Expect the logo to be displayed")
      .toBe(true);
  });

  it("Sign up with random details and verify", async () => {
    await homePage.enterDetails(firstName, lastName, eMail, phoneNumber);
  });

  it("Click login and verify the message and username", async () => {
    await homePage.VerifyUserName(firstName);
    expect(
      await homePage
        .$registeredSuccessfully()
        .waitForDisplayed({ timeout: 20000, reverse: true })
    )
      .withContext("Expect registered successfully message to be disappered")
      .toBe(true);
    expect(await homePage.$userName(firstName).isDisplayed())
      .withContext("Expect the username to be same as first name entered")
      .toBe(true);
  });

  it("Enter location and verify navigation", async () => {
    await homePage.selectChennai();
    expect(await homePage.$outlet("MAX FASHIONS").isDisplayed())
      .withContext("Expect Max Fashions to be displayed")
      .toBe(true);
  });

  it("Click on max fashions and verify", async () => {
    await homePage.chooseOutlet();
    expect(await homePage.$product("White shirt").isDisplayed()).withContext(
      "Expect white shirt to be displayed"
    );
  });
});
