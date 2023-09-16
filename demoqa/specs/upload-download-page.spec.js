import { elementsPage } from "../pageobjects/elements-page.js";
import { landingPage } from "../pageobjects/landing-page.js"
import {radioButtonPage} from "../pageobjects/radio-button.js"
import {uploadDownload} from "../pageobjects/upload-download-page.js"


describe("Demoqa application radio button automation ", () => {
it("load the demoqa url",async() =>{
    await landingPage.openUrl();
    expect (await landingPage.$header().isDisplayed()).withContext("expect the page to load").toBe(true);
});

it("Click on element tile",async() => {
    await landingPage.clickOnTile("Elements");
    expect (await elementsPage.$header().isDisplayed()).withContext("expect the element button header to be displayed").toBe(true);
});  

it("click on the upload and download button tile", async() => {
    await elementsPage.clickOnList("Upload and Download");
    expect (await uploadDownload.$uploadButton().isDisplayed()).withContext("expect the radio button header to be displayed").toBe(true);
});

it ("Uploading a file", async () =>{
    await uploadDownload.clickUpload();
    expect (await uploadDownload.$verifyUpload().isDisplayed()).withContext("expect the path of uploaded file to be displayed").toBe(true);

});
});