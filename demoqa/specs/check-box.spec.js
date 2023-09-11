import { checkBox } from ("../page-objects/check-box-page.js");
import { landingPage } from ("../page-objects/landing-page.js");
import { elementsPage } from ("../page-objects/elements-page.js");
let name = ["Desktop", "Documents", "Downloads", "Notes", "Commands", "WorkSpace", "Office", "Word File.doc",
    "Excel File.doc", "React", "Angular", "Veu", "Public", "Private", "Classified", "General"]



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
      .withContext("Expect elements header to be displayed")
      .toBeDisplayed();
  });

  it("Click on the checkBox and verify the navigation", async () => {
    await checkBox.clickOnCheckBoxButton();
    expect(await checkBox.$header())
      .withContext("Expect Text Box to be displayed")
      .toBeDisplayed();
  });

  it("Click on the toggle buttons", async () => {
    let folder = ["Home", "Desktop", "Documents", "Downloads", "WorkSpace", "Office"];
        for(let i of folder){
          await checkBox.clickOnToggleButton(i);
          expect(await checkBox.$clickToggle(i))
      .withContext(`Expect ${i} Toggle Button is clicked `)
      .toBeDisplayed();
      }
    });
      it('click on toggle icon, checkbox  and validate the message', async () => {
        await checkBox.clickOnCheckBox();
        //let length = await checkBox.$$check().length;
        for (let k of name) {
          expect(await checkBox.$subLabel(k).isDisplayed()).withContext(`Expect ${k} folder is displaying`).toBe(true);
          
          //expect(await checkBox.$$check(name[k]).isDisplayed()).withContext("Expect clicked folder  to be displayed").toBe(true)
        }      
  });
});
