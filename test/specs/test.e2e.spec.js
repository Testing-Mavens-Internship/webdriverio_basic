
import LoginPage from '../pageobjects/login.page.js';
import { elementsPage } from '../pageobjects/element-page.js';

xdescribe('My Login application', () => {
    it('should launch the url', async () => {
        await LoginPage.openUrl()
        expect(await LoginPage.$header().isDisplayed()).withContext('expect home page logo is displayed ').toBe(true);
    })
    it('click the element title and verify the navigation',async () =>{
        await LoginPage.clickOnTile("Elements")
        expect(await elementsPage.$header().isDisplayed()).withContext('Expect header to be displayed').toBe(true);
    })
    it('click the check box title and verify the title',async () =>{
        await elementsPage.clickOnTextBox("Text Box")
        expect(await elementsPage.$textBoxTitle().isDisplayed()).withContext('Expect Text Box Title to be displayed').toBe(true);

    })
    it('set value on the text fields',async () =>{
        await elementsPage.setOnTextBoxField()
        expect(await elementsPage.$setFullName().isDisplayed()).withContext('Expected full name').toBe(true);
        expect(await elementsPage.$setEmailId().isDisplayed()).withContext('Expected email id').toBe(true);
        expect(await elementsPage.$setCurrentAddress().isDisplayed()).withContext('Expected current address').toBe(true);
        expect(await elementsPage.$setPermanentAddress().isDisplayed()).withContext('Expected permanent address').toBe(true);

        // await elementsPage.$setEmailId()
        // await elementsPage.$setCurrentAddress()
        // await elementsPage.$setPermanentAddress()
    })
    it('click on submit button',async ()=>{
        await elementsPage.clickOnSubmitButton()
        expect(await elementsPage.$submitButton().isDisplayed()).withContext('Expected submit button to be clicked').toBe(true);
        expect(await elementsPage.$sampleName().isDisplayed()).withContext('Expected result to be Anchana Babu').toBe(true);
        expect(await elementsPage.$sampleEmail().isDisplayed()).withContext('Expected result to be xyz@gmail.com').toBe(true);
        expect(await elementsPage.$sampleEmail().isDisplayed()).withContext('Expected result to be Anjanayem p.o kottayam').toBe(true);
        expect(await elementsPage.$sampleEmail().isDisplayed()).withContext('Expected result to be Testing mavens,carnival infopark').toBe(true);


    })
    

})

