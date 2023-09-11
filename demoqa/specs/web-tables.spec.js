import { landingPage } from "../page-objects/landing-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { webTablesPage } from "../page-objects/web-tables-page.js";


xdescribe("Demo QA Application Web Tables automation", () => {
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

    it("Click on Web Tables",async () =>{
        await elementsPage.clickOnWebTables();
        expect(await webTablesPage.$header().isDisplayed()).withContext("Expect header to be displayed").toBe(true);
    });

    it("Enter details and click on submit", async () => {
        await webTablesPage.clickOnAdd();
        await webTablesPage.enterDetails('firstName','lastName','userEmail','age','salary','department');
        await webTablesPage.clickOnSubmit();
        expect(await webTablesPage.$output1('Abcd').isDisplayed()).toBe(true);
        expect(await webTablesPage.$output1('efgh').isDisplayed()).toBe(true);
        expect(await webTablesPage.$output1('abcd@gmail.com').isDisplayed()).toBe(true);
        expect(await webTablesPage.$output1(20).isDisplayed()).toBe(true);
        expect(await webTablesPage.$output1(15000).isDisplayed()).toBe(true);
        expect(await webTablesPage.$output1('testing').isDisplayed()).toBe(true);
        expect(await webTablesPage.$editButton().isDisplayed()).toBe(true);
    });

    it("Editing the existing details and verifying it", async () => {
        await webTablesPage.clickOnEdit();
        await webTablesPage.editDetails('firstName','lastName','userEmail','age','salary','department');
        expect(await webTablesPage.$output1('Saifu').isDisplayed()).toBe(true);
        expect(await webTablesPage.$output1('jp').isDisplayed()).toBe(true);
        expect(await webTablesPage.$output1('saifu@gmail.com').isDisplayed()).toBe(true);
        expect(await webTablesPage.$output1(21).isDisplayed()).toBe(true);
        expect(await webTablesPage.$output1(18000).isDisplayed()).toBe(true);
        expect(await webTablesPage.$output1('tester').isDisplayed()).toBe(true);
    });

    it("Deleting an existing record from the table", async() => {
        await webTablesPage.clickOnDelete();
        expect(await webTablesPage.$output1('Saifu').waitForDisplayed({timeout:20000, reverse: true}));
    });

});