import LoginPage from '../pageobjects/login.page.js';
import { elementsPage } from '../pageobjects/element-page.js';
import { checkBoxPage } from '../pageobjects/check-box.js';
let titleName = ["Desktop","Documents","Downloads","Notes","Commands","WorkSpace","Office","Word File.doc","Excel File.doc","React","Angular","Veu","Public","Private","Classified","General"]
let resultName = ["home","desktop","notes","commands","documents","workspace","react","angular","veu","office","public","private","classified","general","downloads","wordFile","excelFile"]

xdescribe('My Login application', () => {
    it('should launch the url', async () => {
        await LoginPage.openUrl()
        expect(await LoginPage.$header().isDisplayed()).withContext('expect home page logo is displayed ').toBe(true);
    })

    it('click the element title and verify the navigation',async () =>{
        await LoginPage.clickOnTile("Elements")
        expect(await elementsPage.$header().isDisplayed()).withContext('Expect header to be displayed').toBe(true);
    })
    it('click on check box button',async ()=>{
        await checkBoxPage.clickOnCheckBoxButton("Check Box")
        expect(await checkBoxPage.$checkBoxTitle().isDisplayed()).withContext('Expect check box button to be clicked').toBe(true);

    })
    it('click on toggle icon,check box and validate the result',async ()=>{
        await checkBoxPage.clickOnToggleIcon();
        await checkBoxPage.clickOnCheckBox();
        for(let j=0;j<titleName.length;j++){
            expect(await checkBoxPage.$dropDowns(titleName[j]).isDisplayed()).withContext('Expect dropdowns to be listed').toBe(true);
            expect(await checkBoxPage.$selectCheckBox(titleName[j]).isDisplayed()).withContext('Expect selected dropdowns to be listed').toBe(true);


        }
        for(let k=0;k<resultName.length;k++){
            expect(await checkBoxPage.$successMessage(resultName[k]).isDisplayed()).withContext('Expect success message to be displayed').toBe(true);
        }
        
    })
})