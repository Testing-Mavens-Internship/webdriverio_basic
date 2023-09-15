import { land } from "../pageobjects/landing.js";
import randomName from "random-name"
import randomNum from "random-num"
describe("End-to-end automation of eDelivery application", () => {
  it("Launch the url and verify header", async () => {
    await land.launchUrl();
    expect(await land.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("Enetr values in the text fields", async () => {
    await land.clickOnLogin();
    let firstName = randomName.first();
    let lastName = randomName.last();
     let email = (randomName.first()+"@gmail.com");
     let phone = randomNum(9000000000,9999999999)
     await land.enterText(firstName, lastName, email, phone);
  });

  it("Click on continue and verify navigation", async () => {
    await land.clickOnContinue();
    expect(await land.$verify().isDisplayed())
       .withContext("Expect login button to be displayed")
       .toBe(true);
  });
});
