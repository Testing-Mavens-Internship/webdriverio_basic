import { landingPage } from "../page-objects/landing-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import  { radioPage} from "../page-objects/radiobutton-page.js"
xdescribe("Demo QA Application radio button automation", () => {
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

    it("Click on the Radio button tile and verify the navigation", async () => {
      await elementsPage.clickOnTile("Radio Button");
      expect(await radioPage.$header("Radio Button"))
      .withContext("Expect web table header to be displayed")
      .toBeDisplayed();
    });
    let option = "Impressive";
    it("CLick on radio button and verify ",async () => {
        await radioPage.radioButton(option);
        expect(await radioPage.$button(option))
        .withContext("Expect clicked command to be displayed")
        .toBeDisplayed("You have selected"+option);
      });
});