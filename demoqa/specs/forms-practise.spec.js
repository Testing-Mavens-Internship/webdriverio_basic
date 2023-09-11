import { landingPage } from '../page-objects/landing-page.js';
import { elementsPage } from '../page-objects/elements-page.js';
import { formsPage } from '../page-objects/formsPractice-page.js';
let nameFirst="Test";
let nameLast="Tester";
let email ="tester@gmail.com";
let mobileNumber ="1234567891"
let dob ="18 Sep 2023";
let subject="Civics";

describe("Demo QA Application forms page automation", () => {
  
    it("load the demo qa url", async () => {
      await landingPage.openUrl();
      expect(await landingPage.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
    });
    it("Click on the forms tile and verify the navigation", async () => {
        await landingPage.clickOnTile("Forms");
        expect(await landingPage.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
      });
      
  
      it("Click on the Practice form option from menu list drop down", async () => {
        await elementsPage.clickOnMenuListElement("Practice Form");
        expect(await formsPage.$header())
        .withContext("Expect header to be displayed")
        .toBeDisplayed();
      });
    
  
      it("Fill form",async()=>{
        await formsPage.fillForm(nameFirst,nameLast,email,mobileNumber,dob)
        await formsPage.click();
        await formsPage.currentAddress()
      })
    



});