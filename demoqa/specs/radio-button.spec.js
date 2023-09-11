import { landingPage } from "../page-objects/landing-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { radioButtonPage } from "../page-objects/radio-button-page.js";

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

    it("Click on Radio button", async() => {
        await radioButtonPage.clickOnRadioButton();
        expect(await radioButtonPage.$headerText("Radio Button"))
            .withContext("Expect Radio Button Page to be redirected")
            .toBeDisplayed();
    })
    let option = "No"
    it("Click On radio buton options", async() => {
        await radioButtonPage.ClickOnRadioOptions(option);
        expect(await radioButtonPage.$radioButton())
            .withContext("Clicked")
            .toBeDisplayed(" you have selected" + option)


    })


})