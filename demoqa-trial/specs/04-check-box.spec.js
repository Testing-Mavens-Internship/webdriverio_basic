import { openingPage } from "../page-objects/opening-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { checkBoxPage } from "../page-objects/check-box-page.js";

let homeList = ['Desktop', 'Documents', 'Downloads'];
let desktopList = ['Notes', 'Commands'];
let documentList = ['WorkSpace', 'Office'];
let workSpaceList = ['React', 'Angular', 'Veu'];
let officeList = ['Public', 'Private', 'Classified', 'General'];
let downloadsList = ['Word File.doc', 'Excel File.doc'];

let checkBoxItems = ['Home',
  'Desktop',
  'Notes',
  'Commands',
  'Documents',
  'WorkSpace',
  'React',
  'Veu',
  'Office',
  'Public',
  'Private',
  'Classified',
  'General',
  'Downloads']


xdescribe("Demo QA Application Check Box automation", () => {
  it("load the demo qa url", async () => {
    await openingPage.openUrl();
    expect(await openingPage.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("Click on the elements tile and verify the navigation", async () => {
    await openingPage.clickOnTile("Elements");
    expect(await elementsPage.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("Click on the elements drop down list", async () => {
    await elementsPage.clickOnList("Elements");
    expect(await elementsPage.$collapsedList().isDisplayed())
      .withContext("Expect list of Elements to be displayed")
      .toBe(true);
  });


  it("Click on the Check Box menu and verify the navigation", async () => {
    await elementsPage.clickOnSubList("Check Box");

    // let a = await checkBoxPage.$header().getText();
    // await console.log("Header: " + a );
    expect(await checkBoxPage.$header().isDisplayed())
      .withContext("Expect Check Box header to be displayed")
      .toBe(true);
  });

  it("Click on Toggle Icon of Home and Validate expansion", async () => {
    await checkBoxPage.clickOnToggleIcon('Home');

    for (let item of homeList) {
      expect(await checkBoxPage.$checkBoxName(item).isDisplayed())
        .withContext(`Expect ${item} to be displayed`)
        .toBe(true);
    }
  })

  it("Click on Toggle Icon of Desktop and Validate expansion", async () => {
    await checkBoxPage.clickOnToggleIcon('Desktop');

    for (let item of desktopList) {
      expect(await checkBoxPage.$checkBoxName(item).isDisplayed())
        .withContext(`Expect ${item} to be displayed`)
        .toBe(true);
    }

  })

  it("Click on Toggle Icon of Documents and Validate expansion", async () => {
    await checkBoxPage.clickOnToggleIcon('Documents');

    for (let item of documentList) {
      expect(await checkBoxPage.$checkBoxName(item).isDisplayed())
        .withContext(`Expect ${item} to be displayed`)
        .toBe(true);
    }

  })

  it("Click on Toggle Icon of WorkSpace and Validate expansion", async () => {
    await checkBoxPage.clickOnToggleIcon('WorkSpace');

    for (let item of workSpaceList) {
      expect(await checkBoxPage.$checkBoxName(item).isDisplayed())
        .withContext(`Expect ${item} to be displayed`)
        .toBe(true);
    }

  })

  it("Click on Toggle Icon of Office and Validate expansion", async () => {
    await checkBoxPage.clickOnToggleIcon('Office');

    for (let item of officeList) {
      expect(await checkBoxPage.$checkBoxName(item).isDisplayed())
        .withContext(`Expect ${item} to be displayed`)
        .toBe(true);
    }

  })

  it("Click on Toggle Icon of Downloads and Validate expansion", async () => {
    await checkBoxPage.clickOnToggleIcon('Downloads');

    for (let item of downloadsList) {
      expect(await checkBoxPage.$checkBoxName(item).isDisplayed())
        .withContext(`Expect ${item} to be displayed`)
        .toBe(true);
    }
  })

  it(`Click on CheckBoxes and verify it's Checked `, async () => {
    await checkBoxPage.clickOnCheckBox('Home');

    for (item of checkBoxItems) {
      let displayResult = await item.toLowerCase();

      expect(await checkBoxPage.$checkBox(item).isEnabled())
        .withContext(`${item} should be checked`)
        .toBe(true);

      expect(await checkBoxPage.$displayedResult(displayResult).isDisplayed())
        .withContext(`Expect ${displayResult} to be displayed`)
        .toBe(true);
    }

    expect(await checkBoxPage.$checkBox('Word File.doc').isEnabled())
      .withContext('Word File.doc should be checked')
      .toBe(true);

    expect(await checkBoxPage.$displayedResult('wordFile').isDisplayed())
      .withContext('Expect wordFile to be displayed')
      .toBe(true);
    expect(await checkBoxPage.$checkBox('Excel File.doc').isEnabled())
      .withContext('Excel File.doc should be checked')
      .toBe(true);

    expect(await checkBoxPage.$displayedResult('excelFile').isDisplayed())
      .withContext('Expect ExcelFile to be displayed')
      .toBe(true);

  })


})