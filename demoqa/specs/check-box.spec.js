const { landingPage } = require('../page-objects/landing-page.js')
const { elementsPage } = require('../page-objects/elements-page.js')
const { checkBoxPage } = require('../page-objects/checkBox-page.js')

xdescribe("DEMOQA Check Box automation", () => {
  it("load the demo qa url", async () => {
    await landingPage.openUrl();
    expect(await landingPage.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });
  it("Click on the Elements tile and verify the navigation to Elements page", async () => {
    await landingPage.clickOnTile("Elements");

    expect(await elementsPage.$header())
      .withContext("Expect header to be displayed")
      .toBeDisplayed();
  })
  it("Click on the Check Box option from side bar menu", async () => {
    await elementsPage.clickOnMenuListElement("Check Box");
    expect(await checkBoxPage.$header())
      .withContext("Expect header to be displayed")
      .toBeDisplayed();
  });


  it("Click on expand more icon near Home check box and verify whether the sub nodes are being displayed", async () => {
    let toggleHomeValidation = [];
    toggleHomeValidation = await checkBoxPage.$$togglHomeValidation().map(item => item.getText())
    await checkBoxPage.clickOnHomeToggle();
    for (let item of toggleHomeValidation) {
      expect(await checkBoxPage.$homeOutputText(item).isDisplayed()).withContext("text is not displayed").toBe(true);
    }


  })

  it("Click on expand more icon near Desktop,Documents, Downloads,WorkSpace and Office check boxes and verify whether the sub nodes are displayed", async () => {
    let toggleHomeValidation = [];
    toggleHomeValidation = await checkBoxPage.$$togglHomeValidation().map(item => item.getText())
    await checkBoxPage.clickOnSUbnodesOfHome("Desktop");
    await checkBoxPage.clickOnSUbnodesOfHome("Documents");
    await checkBoxPage.clickOnSUbnodesOfHome("Downloads");
    await checkBoxPage.subToggleOfDocuments("WorkSpace")
    await checkBoxPage.subToggleOfDocuments("Office")

    for (let item of toggleHomeValidation) {
      expect(await checkBoxPage.$homeOutputText(item).isDisplayed()).withContext("text is not displayed").toBe(true);
    }

  })

  it("Click on check box of Home and verify whether the all the subnodes are beiing selected", async () => {
    let textArray = [];
    textArray = await checkBoxPage.$$text().map(item => item.getText())
    await checkBoxPage.clickHomeCheckBox();
    for (let item of textArray) {
      expect(await checkBoxPage.$output(item).isDisplayed()).withContext("text is not displayed").toBe(true);
    }
  })
  it("Click on check box of Desktop node and verify whether the all the subnodes are beiing selected", async () => {
    let newtArray = [];

    await checkBoxPage.clickHomeCheckBox();
    await checkBoxPage.clickOncheckBoxOfSubNodesOfHome("Desktop");

    newtArray = await checkBoxPage.$$outputText().map(item => item.getText())
    for (let item of newtArray) {

      expect(await checkBoxPage.$output(item).isDisplayed()).withContext("text is not displayed").toBe(true);
    }


  })
  it("Click on Documents node and verify whether the all the subnodes are beiing selected", async () => {

    let newtArray2 = [];


    await checkBoxPage.clickOncheckBoxOfSubNodesOfHome("Desktop");

    await checkBoxPage.clickOncheckBoxOfSubNodesOfHome("Documents");
    newtArray2 = await checkBoxPage.$$outputText().map(item => item.getText())
    for (let item of newtArray2) {
      expect(await checkBoxPage.$output(item).isDisplayed()).withContext("text is not displayed").toBe(true);
    }

  })
  it("Click on Downloads node and verify whether the all the subnodes are beiing selected", async () => {

    let newtArray3 = [];


    await checkBoxPage.clickOncheckBoxOfSubNodesOfHome("Documents");

    await checkBoxPage.clickOncheckBoxOfSubNodesOfHome("Downloads");
    newtArray3 = await checkBoxPage.$$outputText().map(item => item.getText())
    for (let item of newtArray3) {
      expect(await checkBoxPage.$output(item).isDisplayed()).withContext("text is not displayed").toBe(true);
    }

  })


});