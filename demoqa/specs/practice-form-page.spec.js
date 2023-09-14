import { landingPage } from "../page-objects/landing-page.js";
import  { practiceForm} from "../page-objects/practice-form-page.js";
let fName =  "Anisha";
let lName = "V A"
let email = "anisha@gmail.com";
let gender = "Female"
let mobile = 1234567890;
//let dob = 
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
    
    it("Fill form",async () => {
        await practiceForm.fillFormfield(fName,lName,email,gender,mobile,subject,hobbies,address) 
        // let values = ["Anisha","V A","anisha@gmail.com","24","12345","cse"];
        // for(let item of values){
        //   expect( await webTablesPage.$data(item).isDisplayed()).withContext("Done").toBe(true);
        // 
    });
});
