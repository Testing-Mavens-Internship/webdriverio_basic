const landingPage = require("../page-objects/landing-web-page.js")
const elementsPage = require("../page-objects/elements-web-page.js")

xdescribe("Demo QA Application Text Box automation", () => {
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

    it("Click on Web Table", async () => {
        await elementsPage.clickOnDropDown("Web Tables");
        expect(await elementsPage.$subHeadWebTable())
            .withContext("Expected sublist header as Web Table")
            .toBeDisplayed();
    })

    it("Click on add button and add details",async ()=>{
        await elementsPage.clickOnAddButton()
        await elementsPage.enterDetails()
        expect(await elementsPage.$validate("Joyal"))
        .withContext("First name matched")
        .toBeDisplayed()
        expect(await elementsPage.$validate("Francis"))
        .withContext("Last Name matched")
        .toBeDisplayed()
        expect(await elementsPage.$validate("22"))
        .withContext("Age matched")
        .toBeDisplayed()
        expect(await elementsPage.$validate("joyalfrancis23@gmail.com"))
        .withContext("Email matched")
        .toBeDisplayed()
        expect(await elementsPage.$validate("2400000"))
        .withContext("Salary matched")
        .toBeDisplayed()
        expect(await elementsPage.$validate("IT"))
        .withContext("Department matched")
        .toBeDisplayed()
        await elementsPage.$webTableCheck().waitForDisplayed({timeout:20000})
    })

    it("Edit a record and verify it has been edited",async()=>{
        await elementsPage.editARecord()
        expect(await elementsPage.$validate("19"))
        .withContext("Age edited")
        .toBeDisplayed();
        await elementsPage.$validate("19").waitForDisplayed({timeout:20000})
    })

    it("Delete a record",async()=>{
        await elementsPage.deleteARecord()
        expect(await elementsPage.$validate("19").waitForDisplayed({timeout:20000,reverse:true}))
        
    })

});
