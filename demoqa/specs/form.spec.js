const landingPage = require("../page-objects/landing-web-page.js")
const elementsPage = require("../page-objects/elements-form-page.js")

describe("Demo QA Application Text Box automation", () => {
    it("load the demo qa url", async () => {
        await landingPage.openUrl();
        expect(await landingPage.$header().isDisplayed())
            .withContext("Expect header to be displayed")
            .toBe(true);
    });

    it("Click on the elements tile and verify the navigation", async () => {
        await landingPage.clickOnTile("Forms");
       
        expect(await elementsPage.$header("Forms"))
            .withContext("Expect header to be displayed")
            .toBeDisplayed();
    });
    it("Click on practice form and enter details",async ()=>{
        await elementsPage.clickOnFormSection()
        expect(await elementsPage.$header().isDisplayed()).toBe(true)
        
    })
    it("Enter data to input fields",async ()=>{
        await elementsPage.enterDetails()
    })
    // it("Enter the subject",async ()=>{
    //     await elementsPage.enterSubject()
    // })
    
    
});
