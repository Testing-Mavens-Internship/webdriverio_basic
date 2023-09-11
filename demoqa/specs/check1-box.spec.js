const {landingPage} = require('../page-objects/landing-page.js')
const {elementsPage} = require('../page-objects/elements-page.js')
const {checkBoxPage}=require('../page-objects/checkBox-page.js')
xdescribe("DEMOQA Check Box automation",()=>{
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
      })
      it("Click on the web table option from menu list drop down", async () => {
        await elementsPage.clickOnMenuListElement("Check Box");
        expect(await checkBoxPage.$header())
        .withContext("Expect header to be displayed")
        .toBeDisplayed();
      });

it("Click on click on check box", async()=>{
    let textArray=[];
    textArray= await checkBoxPage.$$text().map(item => item.getText())
    await checkBoxPage.clickHomeCheckBox();
    for(let item of textArray){
        expect(await checkBoxPage.$output(item).isDisplayed()).withContext("text is not displayed").toBe(true);
   }
})
it("Click on toggle near Home check box",async()=>{
  // let toggleHomeValidation =[];
  // toggleHomeValidation= await checkBoxPage.$$togglHomeValidation().map(item => item.getText()) 
  await checkBoxPage.clickOnHomeToggle();
//   for(let item of checkBoxPage.toggleHomeValidation){
//     expect(await checkBoxPage.$togglHomeValidation(item).isDisplayed()).withContext("text is not displayed").toBe(true);
// }
expect(await checkBoxPage.$subNodesOfHome("Desktop").isDisplayed())
.withContext("Expect Desktop to be displayed")
.toBe(true);
expect(await checkBoxPage.$subNodesOfHome("Documents").isDisplayed())
.withContext("Expect Desktop to be displayed")
.toBe(true);
expect(await checkBoxPage.$subNodesOfHome("Downloads").isDisplayed())
.withContext("Expect Desktop to be displayed")
.toBe(true);

})
it("Click on subnodes of Home", async()=>{
await checkBoxPage.unclickOnSUbnodesOfHome("Desktop","Documents","Downloads");

// await checkBoxPage.unclickOnSUbnodesOfHome("Documents");
// await checkBoxPage.unclickOnSUbnodesOfHome("Downloads");
})
it("Click on home's sub nodes toggle",async()=>{
 
await checkBoxPage.clickOnSUbnodesOfHome("Desktop");
await checkBoxPage.clickOnSUbnodesOfHome("Documents");
await checkBoxPage.clickOnSUbnodesOfHome("Downloads");
expect(await checkBoxPage.$subNodesOfDesktop("Notes").isDisplayed())
.withContext("Expect Desktop to be displayed")
.toBe(true);
expect(await checkBoxPage.$subNodesOfDesktop("Commands").isDisplayed())
.withContext("Expect Desktop to be displayed")
.toBe(true);
expect(await checkBoxPage.$subNodesOfDesktop("WorkSpace").isDisplayed())
.withContext("Expect Desktop to be displayed")
.toBe(true);expect(await checkBoxPage.$subNodesOfDesktop("Office").isDisplayed())
.withContext("Expect Desktop to be displayed")
.toBe(true);expect(await checkBoxPage.$subNodesOfDesktop("Word File.doc").isDisplayed())
.withContext("Expect Desktop to be displayed")
.toBe(true);
expect(await checkBoxPage.$subNodesOfDesktop("Excel File.doc").isDisplayed())
.withContext("Expect Desktop to be displayed")
.toBe(true);

})
it("Click on Documents sub toggle",async()=>{
  await checkBoxPage.subToggleOfDocuments("WorkSpace")
  await checkBoxPage.subToggleOfDocuments("Office")
  expect(await checkBoxPage.$subNodesOfWorkSpaceAndOffice("React").isDisplayed())
.withContext("Expect Desktop to be displayed")
.toBe(true);expect(await checkBoxPage.$subNodesOfWorkSpaceAndOffice("Angular").isDisplayed())
.withContext("Expect Desktop to be displayed")
.toBe(true);expect(await checkBoxPage.$subNodesOfWorkSpaceAndOffice("Veu").isDisplayed())
.withContext("Expect Desktop to be displayed")
.toBe(true);expect(await checkBoxPage.$subNodesOfWorkSpaceAndOffice("Public").isDisplayed())
.withContext("Expect Desktop to be displayed")
.toBe(true);expect(await checkBoxPage.$subNodesOfWorkSpaceAndOffice("Private").isDisplayed())
.withContext("Expect Desktop to be displayed")
.toBe(true);expect(await checkBoxPage.$subNodesOfWorkSpaceAndOffice("Classified").isDisplayed())
.withContext("Expect Desktop to be displayed")
.toBe(true);expect(await checkBoxPage.$subNodesOfWorkSpaceAndOffice("General").isDisplayed())
.withContext("Expect Desktop to be displayed")
.toBe(true);
})


});