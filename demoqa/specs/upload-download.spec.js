import { landingPage } from "../page-objects/landing-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { uploadDownloadPage } from "../page-objects/upload-download-page.js";
xdescribe("Demo QA Application upload and download automation", () => {
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

  it("Click on upload and download sidemenu and verify navigation", async () => {
    await elementsPage.clickOnUploadAndDownload();
    expect(await uploadDownloadPage.$header().isDisplayed())
      .withContext("Expect upload and download page header to be displayed")
      .toBe(true);
  });

  it("Upload file and verify",async()=>{
    await uploadDownloadPage.uploadFile();
    expect(await uploadDownloadPage.$uploadedFileName().isDisplayed()).withContext("Expect file name to be displayed").toBe(true);
  });

  it("Download file and verify",async()=>{
    
  })
})
