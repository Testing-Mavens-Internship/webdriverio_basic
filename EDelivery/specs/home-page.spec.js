import { landingPage } from "../../EDelivery/page-objects/landing-page.js";

xdescribe("End-to-end automation of eDelivery application", () => {
  it("Launch the url and verify header", async () => {
    await landingPage.launchUrl();
    expect(await landingPage.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("Click on signup", async () => {
    await landingPage.clickOnLogin();
    expect(await landingPage.$verifySignUp().iDisplayed()).withContext("Expect header to be displayed").toBe(true);
  });

  

  
});