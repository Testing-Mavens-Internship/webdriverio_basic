import { homePage } from "../page-objects/home-page.js";

describe("Automation workflow of edelivery website",()=>{
    it("Load the eDelivery and verify", async () => {
        await homePage.openUrl();
        expect(await homePage.$header().isDisplayed())
          .withContext("Expect header to be displayed")
          .toBe(true);
      });
      it("Click on login button and verify navigation",async ()=>{
        await homePage.clickOnLoginButton()
        expect(await homePage.$loginHeader().isDisplayed())
            .withContext("Expecting Login header")
            .toBe(true)
      })
      it("Click on signup button verify navigation",async ()=>{
        await homePage.clickOnSignUpButton()
        expect(await homePage.$loginHeader("Register").isDisplayed())
            .withContext("Expecting header as register")
            .toBe(true)
      })
      it("Enter name and verify",async ()=>{
        await homePage.setName()
        expect(await homePage.$inputField("First Name").isDisplayed())
        .toBe(true)
      })
})