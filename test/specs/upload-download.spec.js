import { loginpage } from "../pageobjects/login.page.js";
import { elementsPage } from "../pageobjects/element-page.js";
import { uploadAndDownload } from "../pageobjects/upload-download-page.js";


fdescribe('My Login application', () => {
    it('should launch the url', async () => {
        await loginpage.openUrl()
        expect(await loginpage.$header().isDisplayed()).withContext('expect home page logo is displayed').toBe(true);
    })

    it('click the element title and verify the navigation',async () =>{
        await loginpage.clickOnTile("Elements")
        expect(await elementsPage.$header().isDisplayed()).withContext('Expect header to be displayed').toBe(true);
    })

    it("click on the check box menu on side navigation",async()=>{
        await uploadAndDownload.ClickOnUploadAndDownload()
        expect(await uploadAndDownload.$uploadDownloadHeader().isDisplayed()).withContext("Expect display upload and download header").toBe(true)
    })
    it("click on the upload button",async()=>{
        await uploadAndDownload.clickOnUploadButton()
        expect(await uploadAndDownload.$path().isDisplayed()).withContext("expect upload file path should be display").toBe(true)
    })
    it("Click on download Button",async()=>{
        await uploadAndDownload.clickOnDownloadButton()

    })
})