import { landingPage } from "../page-objects/landing-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { textBoxPage } from "../page-objects/text-box-page.js";

xdescribe("Demo QA Application Text Box automation", () => {
    it("load the demo qa url", async() => {
        await landingPage.openUrl();
        expect(await landingPage.$header().isDisplayed())
            .withContext("Expect header to be displayed")
            .toBe(true);
    });

    it("Click on the elements tile and verify the navigation", async() => {
        await landingPage.clickOnTile("Elements");
        expect(await elementsPage.$header())
            .withContext("Expect header to be displayed")
            .toBeDisplayed();

    });

    it("Click on Text Box button", async() => {
        await elementsPage.clickOnText();
        expect(await textBoxPage.$textBox())
            .withContext("Expect Text Box Page to be redirected")
            .toBeDisplayed();
    })

    it("Enter the details", async() => {
        await textBoxPage.fillUpTheForm();
        expect(await textBoxPage.$fullname()).withContext("Full name should be filled").toBeDisplayed();
        expect(await textBoxPage.$email()).withContext("email should be filled").toBeDisplayed();
        expect(await textBoxPage.$currentAddress()).withContext("Current address should be filled").toBeDisplayed();
        expect(await textBoxPage.$permanentAdress()).withContext("Permenent adress should be filled").toBeDisplayed();
        expect(await textBoxPage.$clickOnSubmitButton()).withContext("The submit button shoud be clicked ").toBeDisplayed();

    })

    it("Validate the submit button", async() => {
        await textBoxPage.verifySubmit();
        expect(await textBoxPage.$validate("name").getText())
            .withContext("Expect permanent address to be displayed")
            .toContain("tester1");
        expect(await textBoxPage.$validate("email").getText())
            .withContext("Expect permanent address to be displayed")
            .toContain("tester@mail.com");
        expect(await textBoxPage.$validate("currentAddress").getText())
            .withContext("Expect permanent address to be displayed")
            .toContain("Tester House1");
    })
});