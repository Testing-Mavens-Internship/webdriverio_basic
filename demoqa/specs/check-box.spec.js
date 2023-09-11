import { elementsPage } from "../page-objects/elements-page.js";
import { landingPage } from "../page-objects/landing-page.js";
import { checkBoxPage } from "../page-objects/check-box-page.js";

xdescribe("Demo QA Application Check Box automation", () => {
    it("load the demo qa url", async () => {
      await landingPage.openUrl();
      expect(await landingPage.$header().isDisplayed())
        .withContext("Expect landing page header to be displayed")
        .toBe(true);
    });

    it("Click on the elements tile and verify the navigation", async () => {
        await landingPage.clickOnTile("Elements");
        expect(await elementsPage.$header().isDisplayed())
        .withContext("Expect elements page header to be displayed").toBe(true); 
    });

    it("Click on check box", async() => {
        await elementsPage.clickOnCheckBox();
        expect(await checkBoxPage.$header().isDisplayed()).withContext("expect check box page header to be displayed").toBe(true);
    });

    it("click on toggle and click checkbox Home", async () =>{
        await checkBoxPage.clickOnToggle();
        await checkBoxPage.clickOnHome();
        let r = [];
        r = await checkBoxPage.$$result().map(item => item.getText())
        console.log(r);
        for(let item of r){
            expect(await checkBoxPage.$output(item).isDisplayed()).withContext("expect values to be displayed").toBe(true);
        }
    });

    it("click on toggle and click checkbox Desktop", async () =>{
        await checkBoxPage.clickOnHome();
        await checkBoxPage.clickOnDesktop();
        let r = [];
        r = await checkBoxPage.$$result().map(item => item.getText())
        console.log(r);
        for(let item of r){
            expect(await checkBoxPage.$output(item).isDisplayed()).withContext("expect values to be displayed").toBe(true);
        }
    });

    it("click on toggle and click checkbox Documents", async () =>{
        await checkBoxPage.clickOnDesktop();
        await checkBoxPage.clickOnDocuments();
        let r = [];
        r = await checkBoxPage.$$result().map(item => item.getText())
        console.log(r);
        for(let item of r){
            expect(await checkBoxPage.$output(item).isDisplayed()).withContext("expect values to be displayed").toBe(true);
        }
    });

    it("click on toggle and click checkbox Downloads", async () =>{
        await checkBoxPage.clickOnDocuments();
        await checkBoxPage.clickOnDownloads();
        let r = [];
        r = await checkBoxPage.$$result().map(item => item.getText())
        console.log(r);
        for(let item of r){
            expect(await checkBoxPage.$output(item).isDisplayed()).withContext("expect values to be displayed").toBe(true);
        }
    });

});
