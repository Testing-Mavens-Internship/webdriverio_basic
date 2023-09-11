import { landingPage } from "../page-objects/landing-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { checkBoxpage } from "../page-objects/check-box-page.js";

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

    it("Click on Check Box Button", async() => {
        await checkBoxpage.clickOnCheckBox();
        expect(await checkBoxpage.$clickElements("Check Box").isDisplayed())
            .withContext("Check Box page to be displayed").toBe(true)
    })

    it("click on toggle and click checkbox Home", async() => {
        await checkBoxpage.clickOnToggleButton();
        await checkBoxpage.clickOnCheckBoxHome();
        let sample = [];
        sample = await checkBoxpage.$$output().map(item => item.getText())
        for (let item of await checkBoxpage.$$output()) {
            sample.push(await item.getText())
        }
        await console.log(sample);

        for (let item of sample) {
            expect(await checkBoxpage.$selectedElemts(item).isDisplayed())
                .withContext("Clicked check boxes should be displayed").toBe(true)
        }
    });

})