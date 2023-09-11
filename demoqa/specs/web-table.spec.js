const {landingPage} = require('../page-objects/landing-page.js')
const {elementsPage} = require('../page-objects/elements-page.js')
const {textBoxPage} = require('../page-objects/textBox-page.js')
const {webTablePage} = require('../page-objects/webTables-page.js')
let nameFirst="Test";
let nameLast="Tester";
let email ="tester@gmail.com";
let age ="23";
let salary="10000";
let department="qwerty";
xdescribe("Demo QA Application Web Table automation", () => {
    it("load the demo qa url", async () => {
      await landingPage.openUrl();
      expect(await landingPage.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
    });
  
    it("Click on the elements tile and verify the navigation", async () => {
      await landingPage.clickOnTile("Elements");
      let a = elementsPage.$header().getText();
      console.log(a)
      let b=[];
      b=await webTablePage.$$example().map(item => item.getText())

      console.log(b);
      expect(await elementsPage.$header())
      .withContext("Expect header to be displayed")
      .toBeDisplayed();
    });
    it("Click on the web table option from menu list drop down", async () => {
      await elementsPage.clickOnMenuListElement("Web Tables");
      expect(await webTablePage.$header())
      .withContext("Expect header to be displayed")
      .toBeDisplayed();
    });
    it("Click on add button", async () => {
        await webTablePage.clickOnAddButton();
        expect(await webTablePage.$register())
        .withContext("Expect header to be displayed")
        .toBeDisplayed();
      });
  it("Enter details in all the fields in the Registration Form", async ()=>{
    //let l = await $$(`//div[@class="rt-tbody"]`).length
await webTablePage.fillForm(nameFirst,nameLast,email,age,salary,department)
expect(await webTablePage.$subval().getText()).withContext("Expect nameto be displayed").toContain(nameFirst);
expect(await webTablePage.$subval().getText()).withContext("Expect last name to be displayed").toContain(nameLast);
expect(await webTablePage.$subval().getText()).withContext("Expect email to be displayed").toContain(email);
expect(await webTablePage.$subval().getText()).withContext("Expect age to be displayed").toContain(age);
expect(await webTablePage.$subval().getText()).withContext("Expect salary to be displayed").toContain(salary);
expect(await webTablePage.$subval().getText()).withContext("Expect department to be displayed").toContain(department);
});
  it("Edit details of an exisiting record",async()=>{
    let a = await $$(`//span[@title="Edit"]`).length;
await webTablePage.editDetails(a,"name","nameL","email1@gmail.com","56","3000","dept")
expect(await webTablePage.$subval().getText()).withContext("Expect name to be displayed").toContain("name");
expect(await webTablePage.$subval().getText()).withContext("Expect last name to be displayed").toContain("nameL");
expect(await webTablePage.$subval().getText()).withContext("Expect emailto be displayed").toContain("email1@gmail.com");
expect(await webTablePage.$subval().getText()).withContext("Expect age to be displayed").toContain("56");
expect(await webTablePage.$subval().getText()).withContext("Expect salary to be displayed").toContain("3000");
expect(await webTablePage.$subval().getText()).withContext("Expect department to be displayed").toContain("dept");
  });
  it("Delete record",async()=>{
    let b = await $$(`//span[@title="Delete"]`).length;
    await webTablePage.deleteRecord(b);
    expect(await webTablePage.$delete(b).waitForDisplayed({timeout:20000,reverse:true}));
    
    //expect(await webTablePage.$subval().withContext("The record is deleted").toContain("name"));


  })
  });
  