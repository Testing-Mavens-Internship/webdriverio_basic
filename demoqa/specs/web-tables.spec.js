import { landingPage } from "../page-objects/landing-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { webTablesPage } from "../page-objects/webtables-page.js";

let firstName =  "Anisha";
let lastName = "V A";
let email = "anisha@gmail.com";
let age = 24;
let salary = 12345;
let department = "cse";
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

    it("Click on the web tables tile and verify the navigation", async () => {
      await elementsPage.clickOnTile("Web Tables");
      expect(await webTablesPage.$header("Web Tables"))
      .withContext("Expect web table header to be displayed")
      .toBeDisplayed();
    });

    it("CLick on add button and verify ",async () => {
      await webTablesPage.addButton();
      expect(await webTablesPage.$register())
      .withContext("Expect registration form to be displayed")
      .toBeDisplayed();
    });
    
    it("Fill registration form",async () => {
      await webTablesPage.registerForm(firstName,lastName,email,age,salary,department) 
      let values = ["Anisha","V A","anisha@gmail.com","24","12345","cse"];
      for(let item of values){
        expect( await webTablesPage.$data(item).isDisplayed()).withContext("Done").toBe(true);
      }
     })
    let newFirstName =  "Achu";
    let newLastName = "Ammu";
    let newEmail = "Achu@gmail.com";
    let newAge = 20;
    let newSalary = 1234545;
    let newDepartment = "bme";
    it ("Edit table",async() =>{
      let count = await $$(`//span[@title="Edit"]`).length;
      await webTablesPage.editPage(count,newFirstName,newLastName,newEmail,newAge,newSalary,newDepartment) 
      expect(await webTablesPage.$addToTable().getText()).withContext("Expect first name to be displayed").toContain(newFirstName)
      expect(await webTablesPage.$addToTable().getText()).withContext("Expect last name to be displayed").toContain(newLastName)
      expect(await webTablesPage.$addToTable().getText()).withContext("Expect email to be displayed").toContain(newEmail)
      expect(await webTablesPage.$addToTable().getText()).withContext("Expect age to be displayed").toContain(newAge)
      expect(await webTablesPage.$addToTable().getText()).withContext("Expect salary to be displayed").toContain(newSalary)
      expect(await webTablesPage.$addToTable().getText()).withContext("Expect department to be displayed").toContain(newDepartment)
   } );
   
   it("Delete record",async()=>{
    let record = await $$(`//span[@title="Delete"]`).length;
    await webTablesPage.deleteRecord(record);
    expect(await webTablesPage.$delete(record).waitForDisplayed({timeout:20000,reverse:true})); 
  })
});

