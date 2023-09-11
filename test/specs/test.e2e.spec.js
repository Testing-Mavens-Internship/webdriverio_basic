import {loginpage} from '../pageobjects/login.page.js';
import { elementsPage } from '../pageobjects/element-page.js';
import { webtablepage } from '../pageobjects/web-table.js';


xdescribe('My Login application', () => {
    it('should launch the url', async () => {
        await loginpage.openUrl()
        expect(await loginpage.$header().isDisplayed()).withContext('expect home page logo is displayed ').toBe(true);
    })
    it('click the element title and verify the navigation',async () =>{
        await loginpage.clickOnTile("Elements")
        let a=await elementsPage.$header().getText();
        console.log(a);
        let b=[];
        b=await webtablepage.$$cards('Element').map(item => item.getText())
        console.log(b);
        expect(await elementsPage.$header().isDisplayed()).withContext('Expect header to be displayed').toBe(true);
    })
    it('click the check box title and verify the title',async () =>{
        await elementsPage.clickOnTextBox("Text Box")
        expect(await elementsPage.$textBoxTitle().isDisplayed()).withContext('Expect Text Box Title to be displayed').toBe(true);

    })

    it('set value on the form fields',async () =>{
        await elementsPage.setOnTextBoxField()
        expect(await elementsPage.$setFullName().isDisplayed()).withContext("Expect Full Name to be entered").toBe(true);
        expect(await elementsPage.$setEmail().isDisplayed()).withContext("Expect Email to be entered").toBe(true);
        expect(await elementsPage.$setPermenantAddress().isDisplayed()).withContext("Expect Permenant Address to be entered").toBe(true);
        expect(await elementsPage.$setCurrentAddress().isDisplayed()).withContext("Expect Current Address to be entered").toBe(true);
        

    })
    it(`click on the Submit Buttton`,async()=>{
        await elementsPage.submitTextBox()
        expect(await elementsPage.$resultName().isDisplayed()).withContext("Expect to be Adhithya Somaraj").toBe(true)
        expect(await elementsPage.$resultEmail().isDisplayed()).withContext("Expect to be adhithyasomaraj@gmail.com").toBe(true)
        expect(await elementsPage.$resultCurrentAddress().isDisplayed()).withContext("Expect to be Adivakkal House Kanjiram p.o Kottayam").toBe(true)
        expect(await elementsPage.$resultPermenantAddress().isDisplayed()).withContext("Expect to be Adivakkal House Kanjiram p.o Kottayam").toBe(true)
    
    })
})

