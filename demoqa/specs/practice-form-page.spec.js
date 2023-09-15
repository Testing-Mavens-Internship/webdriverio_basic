import { landingPage } from "../page-objects/landing-page.js";
import  { practiceForm} from "../page-objects/practice-form-page.js";
let nameFirst =  "Anisha";
let nameLast = "V A"
let email = "anisha@gmail.com";
let gender = "Female"
let mobileNumber = 1234567890;
let subject = "cse";
let hobbies = "asdfgh";
let address = "abc street" 
describe("Demo QA Application form automation", () => {
    it("load the demo qa url", async () => {
      await landingPage.openUrl();
      expect(await landingPage.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
    });
  
    it("Click on the elements tile and verify the navigation", async () => {
      await landingPage.clickOnTile("Forms");
      expect(await practiceForm.$pageHeader())
      .withContext("Expect header to be displayed")
      .toBeDisplayed();
    });

    it("Click on the Practice Forms tile and verify navigation", async () => {
        await practiceForm.practiceFormTile();
        expect(await practiceForm.$header("Practice Form"))
        .withContext("Practice Form header not displayeds")
        .toBeDisplayed();
      });
    
      it("Fill form",async()=>{

        await practiceForm.fillFormField(nameFirst,nameLast,email,mobileNumber,dob)
       
        await practiceForm.click();

        await practiceForm.currentAddress()

      })
});
