import { landingPage } from '../page-objects/landing-page.js';
import { elementsPage } from '../page-objects/elements-page.js';
import { webTablesPage } from '../page-objects/web-tables-page.js';

describe("Demo QA Application Text Box automation", () => {
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

  it("Click on the webtiles and verify the navigation", async () => {
    await webTablesPage.clickOnWebTables();
    expect(await webTablesPage.$Button('add'))
    .withContext("Expect Text Box to be displayed")
    .toBeDisplayed();
  });

  it("Click on the add button", async () => {
    await webTablesPage.clickOnAdd();
    expect(await webTablesPage.$registerationForm())
    .withContext("Expect Registeration from to be displayed ")
    .toBeDisplayed();
  });

  it("Enter the Details", async() => {
    await webTablesPage.fillForm('firstName', 'lastName' , 'userEmail', 'age', 'salary' , 'department');
    expect(await webTablesPage.$Button('Submit'))
    .withContext("Expect Submit Button is not clicked yet.")
    .toBeDisplayed();
  });

  it("click the submit button and Viewing the input field", async() =>{
    await webTablesPage.clickSubmit()
    expect(await webTablesPage.$output('Hello').isDisplayed()).toBe(true);
    expect(await webTablesPage.$output('World').isDisplayed()).toBe(true);
    expect(await webTablesPage.$output('tester@gmail.com').isDisplayed()).toBe(true);
    expect(await webTablesPage.$output(22).isDisplayed()).toBe(true);
    expect(await webTablesPage.$output('1234').isDisplayed()).toBe(true);
    expect(await webTablesPage.$output('tester').isDisplayed()).toBe(true);
  });

  it("Click on the edit icon", async() =>{
    await webTablesPage.clickEditIcon();
    expect(await webTablesPage.$registerationForm())
    .withContext("Expect Registeration from to be displayed ")
    .toBeDisplayed();
    await webTablesPage.$registerationForm().waitForDisplayed({timeout : 20000});
  });

  it("Click on the edit icon and entering the values" ,async() =>{
    await webTablesPage.editForm('firstName', 'lastName' , 'userEmail', 'age', 'salary' , 'department');

    expect(await webTablesPage.$output("Hey").isDisplayed()).toBe(true);
    expect(await webTablesPage.$output("Javascript").isDisplayed()).toBe(true);
    expect(await webTablesPage.$output("sreerag@gmail.com").isDisplayed()).toBe(true);
    expect(await webTablesPage.$output(30).isDisplayed()).toBe(true);
    expect(await webTablesPage.$output("2452").isDisplayed()).toBe(true);
    expect(await webTablesPage.$output("automation").isDisplayed()).toBe(true);
  });

  it("Click on the delete icon and verifying the values" , async() =>{
    await webTablesPage.clickDeleteIcon();
    expect(await webTablesPage.$output("Hey").isDisplayed()).toBe(false);
    expect(await webTablesPage.$output("Javascript").isDisplayed()).toBe(false);
    expect(await webTablesPage.$output("sreerag@gmail.com").isDisplayed()).toBe(false);
    expect(await webTablesPage.$output(30).isDisplayed()).toBe(false);
    expect(await webTablesPage.$output("2452").isDisplayed()).toBe(false);
    expect(await webTablesPage.$output("automation").isDisplayed()).toBe(false);
    
  });
});
