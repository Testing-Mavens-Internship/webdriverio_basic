import { textbox } from '../page-objects/text-box.js';
import { elementsPage } from '../page-objects/elements-page.js';
import { landingPage } from '../page-objects/landing-page';



xdescribe("Text box in element tile", () => {
    it("load the demo qa url", async () => { 
      await landingPage.openUrl();
      expect(await landingPage.$header().isDisplayed())
        .withContext("Expect header to be displayed") 
        .toBe(true);
    });
  
    it("Click on the elements tile and verify the navigation", async () => {
      await landingPage.clickOnTile("Elements");
      expect(await elementsPage.$header())
      .withContext("Expect header to be displayed")
      .toBeDisplayed();
    });

    it("Click on the textbox and verify navigatin", async () => {
        await elementsPage.clickOnTextBox();
        expect(await textbox.$header())
        .withContext("Expect text box to be displayed")
        .toBeDisplayed();
    });

    it("Click and enter name in the field", async () => {
        await textbox.clickFullName("userName");
        expect(await textbox.$text("userName").getValue()).toBe("Athira");
    });
    it("Click and enter email in the field", async () => {
        await textbox.clickEmail("userEmail");
        expect(await textbox.$text("userEmail").getValue()).toBe("athira@gmail.com");
    });
    it("Click and enter current address in the field", async () => {
        await textbox.clickCurrentAddress("currentAddress");
        expect(await textbox.$address("currentAddress").getValue()).toBe("abcd");
    });
    it("Click and enter permanent address in the field", async () => {
        await textbox.clickPermanentAddress("permanentAddress");
        expect(await textbox.$address("permanentAddress").getValue()).toBe("abcde");
    });
    it("Click on submit button", async () => {
        await textbox.clickSubmit();
        expect(await textbox.$validatingfields("name"))
        .withContext("Expect name to be displayed")
        .toBeDisplayed();
    });
    it("Validate the name", async () => {
        expect (await textbox.$validatingfields("Athira").isDisplayed()).toBe(true)
    });

    it("Validate the email", async () => {
        expect (await textbox.$validatingfields("athira@gmail.com").isDisplayed()).toBe(true)
    });

    it("Validate the current address", async () => {
        expect (await textbox.$validatingfields("abcd").isDisplayed()).toBe(true)
    });

    it("Validate the permanent address", async () => {
        expect (await textbox.$validatingfields("abcde").isDisplayed()).toBe(true)
    });
  });