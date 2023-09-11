const landingPage = require("../page-objects/landing-web-page.js")
const elementsPage = require("../page-objects/elements-checkbox-page.js")

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
    it("Click on checkbox and verify selection",async () => {
        await elementsPage.clickOnCheckBoxSection();
        let selected = ["home","desktop","notes","commands","documents","workspace","react","angular","veu","office","public","private","classified","general","downloads","wordFile","excelFile"]
        for(let item of selected){
            expect(await elementsPage.$verify(item).isDisplayed())
            .withContext("Expecting selected items")
            .toBe(true);
        }
    })
    it("Click on toggle and verify the sub elements",async ()=>{
        await elementsPage.clickOnToggle()
        let sub = ["Desktop","Documents","Downloads"]
        for(let list of sub){
            expect(await elementsPage.$subList(list).isDisplayed())
            .withContext("Expecting sublist elements")
            .toBe(true)
        }
    })

});
