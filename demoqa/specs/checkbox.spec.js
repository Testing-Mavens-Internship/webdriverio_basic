import { landingPage } from "../page-objects/landing-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { checkBox } from "../page-objects/checkbox.js";
let a = [
  "home",
  "desktop",
  "notes",
  "commands",
  "documents",
  "workspace",
  "react",
  "angular",
  "veu",
  "office",
  "public",
  "private",
  "classified",
  "general",
  "downloads",
  "wordFile",
  "excelFile",
];

xdescribe("Demo QA Application checkbox automation", () => {
  it("load the demo qa url", async () => {
    await landingPage.openUrl();
    expect(await landingPage.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("Click on the elements tile and verify the navigation", async () => {
    await landingPage.clickOnTile("Elements");
    expect(await elementsPage.$header("Elements"))
      .withContext("Expect header to be displayed")
      .toBeDisplayed();
  });

  it("Click on the  checkbox sidebar and verify the navigation", async () => {
    await elementsPage.clickOnTile("Check Box");
    expect(await checkBox.$header("Check Box"))
      .withContext("Expect header to be displayed")
      .toBeDisplayed();
  });

  it("Click on the  checkbox button and verify the navigation", async () => {
    await checkBox.boxCheck();
    expect(await checkBox.$box().isDisplayed())
      .withContext("Expect box selection to be displayed")
      .toBe(true);
    //for(let i =0;i<a.length;i++){
    // expect(await checkBox.$description(a[i]).isDisplayed()).withContext("Expect home message  is displayed").toBe(true)
    // }
    // expect(await checkBox.$box().isDisplayed()).withContext("Expect box selection to be displayed").toBe(true)
    expect(await checkBox.$description("home").isDisplayed())
      .withContext("Expect home message  is displayed")
      .toBe(true);
    expect(await checkBox.$description("desktop").isDisplayed())
      .withContext("Expect desktop message  is displayed")
      .toBe(true);
    expect(await checkBox.$description("notes").isDisplayed())
      .withContext("Expect note message  is displayed")
      .toBe(true);
    expect(await checkBox.$description("commands").isDisplayed())
      .withContext("Expect command message  is displayed")
      .toBe(true);
    expect(await checkBox.$description("documents").isDisplayed())
      .withContext("Expect document message  is displayed")
      .toBe(true);
    expect(await checkBox.$description("workspace").isDisplayed())
      .withContext("Expect workspace message  is displayed")
      .toBe(true);
    expect(await checkBox.$description("react").isDisplayed())
      .withContext("Expect react message  is displayed")
      .toBe(true);
    expect(await checkBox.$description("angular").isDisplayed())
      .withContext("Expect angular message  is displayed")
      .toBe(true);
    expect(await checkBox.$description("veu").isDisplayed())
      .withContext("Expect veu message  is displayed")
      .toBe(true);
    expect(await checkBox.$description("office").isDisplayed())
      .withContext("Expect office message  is displayed")
      .toBe(true);
    expect(await checkBox.$description("public").isDisplayed())
      .withContext("Expect public message  is displayed")
      .toBe(true);
    expect(await checkBox.$description("private").isDisplayed())
      .withContext("Expect private message  is displayed")
      .toBe(true);
    expect(await checkBox.$description("classified").isDisplayed())
      .withContext("Expect classified message  is displayed")
      .toBe(true);
    expect(await checkBox.$description("general").isDisplayed())
      .withContext("Expect general message  is displayed")
      .toBe(true);
    expect(await checkBox.$description("downloads").isDisplayed())
      .withContext("Expect  downloads message  is displayed")
      .toBe(true);
    expect(await checkBox.$description("wordFile").isDisplayed())
      .withContext("Expect wordfile message  is displayed")
      .toBe(true);
    expect(await checkBox.$description("excelFile").isDisplayed())
      .withContext("Expect excelfile message  is displayed")
      .toBe(true);
  });

  it("Click on the toggle and verify the navigation", async () => {
    await checkBox.togglebutton();
    for (let i = 0; i < a.length; i++) {
      expect(await checkBox.$viewtext(a[i]).isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
    }
  });
});
