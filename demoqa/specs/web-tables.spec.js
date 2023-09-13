import { landingPage } from "../page-objects/landing-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { webTablesPage } from "../page-objects/webtables-page.js";

let firstName = "devika";

let lastName = "s";

let email = "devika@gmail.com";

let age = 22;

let salary = 12345;

let department = "cse";

xdescribe("Demo QA Application Web Table automation", () => {
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
    expect(await webTablesPage.$header())
      .withContext("Expect web table header to be displayed")
      .toBeDisplayed();
  });

  it("CLick on add button and verify ", async () => {
    await webTablesPage.addButton();
    expect(await webTablesPage.$register())
      .withContext("Expect registration form to be displayed")
      .toBeDisplayed();
  });

  it("Fill registration form", async () => {
    await webTablesPage.registerForm(
      firstName,
      lastName,
      email,
      age,
      salary,
      department
    );
    expect(await webTablesPage.$addToTable().getText())
      .withContext("Expect first name to be displayed")
      .toContain(firstName);
    expect(await webTablesPage.$addToTable().getText())
      .withContext("Expect last name to be displayed")
      .toContain(lastName);
    expect(await webTablesPage.$addToTable().getText())
      .withContext("Expect email to be displayed")
      .toContain(email);
    expect(await webTablesPage.$addToTable().getText())
      .withContext("Expect age to be displayed")
      .toContain(age);
    expect(await webTablesPage.$addToTable().getText())
      .withContext("Expect salary to be displayed")
      .toContain(salary);
    expect(await webTablesPage.$addToTable().getText())
      .withContext("Expect department to be displayed")
      .toContain(department);
  });

  let newFirstName = "kichu";

  let newLastName = "d";

  let newEmail = "dfdc@gmail.com";

  let newAge = 25;

  let newSalary = 1000000;

  let newDepartment = "bme";

  it("Edit table", async () => {
    let count = await $$(`//span[@title="Edit"]`).length;

    await webTablesPage.editPage(
      count,
      newFirstName,
      newLastName,
      newEmail,
      newAge,
      newSalary,
      newDepartment
    );
    expect(await webTablesPage.$addToTable().getText())
      .withContext("Expect first name to be displayed")
      .toContain(newFirstName);
    expect(await webTablesPage.$addToTable().getText())
      .withContext("Expect last name to be displayed")
      .toContain(newLastName);
    expect(await webTablesPage.$addToTable().getText())
      .withContext("Expect email to be displayed")
      .toContain(newEmail);
    expect(await webTablesPage.$addToTable().getText())
      .withContext("Expect age to be displayed")
      .toContain(newAge);
    expect(await webTablesPage.$addToTable().getText())
      .withContext("Expect salary to be displayed")
      .toContain(newSalary);
    expect(await webTablesPage.$addToTable().getText())
      .withContext("Expect department to be displayed")
      .toContain(newDepartment);
  });

  it("Delete record", async () => {
    let record = await $$(`//span[@title="Delete"]`).length;
    await webTablesPage.deleteRecord(record);
    expect(
      await webTablesPage
        .$delete(record)
        .waitForDisplayed({ timeout: 20000, reverse: true })
    );
  });
});
