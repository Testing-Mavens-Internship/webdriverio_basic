import { openingPage } from "../page-objects/opening-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { webTablePage } from "../page-objects/web-table-page.js";

let firstName = "Fathima";
let lastname = "Hanan";
let email = "hanan@gmail.com";
let age = 23;
let salary = 20000;
let department = "QA";

let email2 = "fathimahanan@gmail.com";
let department2 = "HR";

describe("Demo QA Application Web Tables automation", () => {
  it("load the demo qa url", async () => {
    await openingPage.openUrl();
    expect(await openingPage.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("Click on the elements tile and verify the navigation", async () => {
    await openingPage.clickOnTile("Elements");
    expect(await elementsPage.$header())
      .withContext("Expect header to be displayed")
      .toBeDisplayed();
  });

  it("Click on the elements drop down list", async () => {
    await elementsPage.clickOnList("Elements");
    expect(await elementsPage.$collapsedList().isDisplayed())
      .withContext("Expect list of Elements to be displayed")
      .toBe(true);
  });

  it("Click on the Web Table menu and verify the navigation", async () => {
    await elementsPage.clickOnSubList("Web Tables");
    expect(await webTablePage.$header())
      .withContext("Expect Web Table header to be displayed")
      .toBeDisplayed();
  });

  it("Click on Add and verify new user added", async () => {
    await webTablePage.clickOnAdd();
    expect(await webTablePage.$registrationTitle())
      .withContext("Expect Form title to be displayed")
      .toBeDisplayed();

    await webTablePage.fillForm(firstName, lastname, email, age, salary, department);

    expect(await webTablePage.$displayList(firstName).isDisplayed()).toBe(true);
    expect(await webTablePage.$displayList(lastname).isDisplayed()).toBe(true);
    expect(await webTablePage.$displayList(email).isDisplayed()).toBe(true);
    expect(await webTablePage.$displayList(age).isDisplayed()).toBe(true);
    expect(await webTablePage.$displayList(salary).isDisplayed()).toBe(true);
    expect(await webTablePage.$displayList(department).isDisplayed()).toBe(true);

  })

  it("Click on edit option and verify changes updated", async () => {
    await webTablePage.editUser(email2, department2);

    expect(await webTablePage.$displayList(email2).isDisplayed()).toBe(true);
    expect(await webTablePage.$displayList(department2).isDisplayed()).toBe(true);
  })

  it("Click on delete option and verify user removed", async () => {
    await webTablePage.deleteUser();

    expect(await webTablePage.$displayList(firstName).isDisplayed()).toBe(false);
    expect(await webTablePage.$displayList(lastname).isDisplayed()).toBe(false);
    expect(await webTablePage.$displayList(email).isDisplayed()).toBe(false);
    expect(await webTablePage.$displayList(age).isDisplayed()).toBe(false);
    expect(await webTablePage.$displayList(salary).isDisplayed()).toBe(false);
    expect(await webTablePage.$displayList(department).isDisplayed()).toBe(false);

  })
})