const { formsPage } = require("../page-objects/forms-page")
const { landingPage } = require ('../page-objects/landing-page');

describe("Demo QA Application Text Box automation", () => {
    it("load the demo qa url", async () => { // it block shows the action to be performed
      await landingPage.openUrl();
      expect(await landingPage.$header().isDisplayed())
        .withContext("Expect header to be displayed") // error message if failed
        .toBe(true);
    });
  
    it("Click on the forms tile and verify the navigation", async () => {
      await landingPage.clickOnTile("Forms");
      expect(await formsPage.$header())
      .withContext("Expect header to be displayed")
      .toBeDisplayed();
    });

    it("click on practice form", async () => {
      await formsPage.ClickOnPracticeForm();
      expect(await formsPage.$studentform())
      .withContext("Expect student form to be displayed")
      .toBeDisplayed();
    });

    it("Click on text field", async () => {
      let firstName = "Athira";
      let lastName = "Menon";
      let email = "athira@gmail.com";
      let gender = "Male";
      let phoneNumber = 1234567890;
      await formsPage.clickOnTextBox(firstName, lastName, email, phoneNumber);
      expect(await formsPage.$text("firstName").getValue()).toBe(firstName);
      expect(await formsPage.$text("lastName").getValue()).toBe(lastName);
      expect(await formsPage.$text("userEmail").getValue()).toBe(email);
      expect(await formsPage.$text("userNumber").getValue()).toBe(phoneNumber);
    });

  });
  