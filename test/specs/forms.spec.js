import LoginPage from '../pageobjects/login.page.js';
import { formsPage } from '../pageobjects/forms.js';
let name = 'Anchana';
let email = 'xyz@gmail.com';
let gender = 'Female';
let mobileNumber = 9447110461;
let dateOfBirth = '07 Jan 2001';
let hobbies = 'Music';


describe('My Login application', () => {
    it('should launch the url', async () => {
        await LoginPage.openUrl()
        expect(await LoginPage.$header().isDisplayed()).withContext('expect home page logo is displayed ').toBe(true);
    })
    it('click the forms tile and verify the navigation',async () =>{
        await LoginPage.clickOnTile("Forms")
        expect(await formsPage.$formsHeader().isDisplayed()).withContext('Expect forms header to be displayed').toBe(true);
    })
    it('click the forms title and verify the title',async () =>{
        await formsPage.clickOnPracticeFormTitle("Practice Form")
        expect(await formsPage.$practiceFormHeader().isDisplayed()).withContext('Expect Practice Form Title to be displayed').toBe(true);

    })
    
    
    it("Enter the details",async()=>{
        await formsPage.enterdetails(name,email,gender,mobileNumber,dateOfBirth,hobbies)
        expect(await formsPage.$submitButton().isDisplayed()).withContext('Expecting submit button to be clicked').toBe(true);
       

    })
})