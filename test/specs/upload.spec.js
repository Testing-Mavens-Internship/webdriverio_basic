import LoginPage from '../pageobjects/login.page.js';
import { elementsPage } from '../pageobjects/element-page.js';
import { uploadPage } from '../pageobjects/upload-page.js';

xdescribe('My Login application', () => {
    it('should launch the url', async () => {
        await LoginPage.openUrl()
        expect(await LoginPage.$header().isDisplayed()).withContext('expect home page logo is displayed ').toBe(true);
    })

    it('click the element title and verify the navigation',async () =>{
        await LoginPage.clickOnTile("Elements")
        expect(await elementsPage.$header().isDisplayed()).withContext('Expect header to be displayed').toBe(true);
    })

    it('click on upload and download',async () =>{
        await uploadPage.clickOnUpload()
        expect(await uploadPage.$uploadHeader().isDisplayed()).withContext('Expect header to be displayed').toBe(true);
    })

    it("click upload and verify navigation", async () => {
        await uploadPage.uploadFile();
        expect(await uploadPage.$uploadMessage().isDisplayed()).toBe(true);
    })

})