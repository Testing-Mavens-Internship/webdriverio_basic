import { openingPage } from "../page-objects/opening-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { uploadDownloadPage } from "../page-objects/upload-download-page.js";

describe("Demo QA Application Upload and download automation", () => {
  it("load the demo qa url", async () => {
    await openingPage.openUrl();
    expect(await openingPage.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("Click on the elements tile and verify the navigation", async () => {
    await openingPage.clickOnTile("Elements");
    expect(await elementsPage.$header())
      .withContext("Expect header to be displayed")
      .toBeDisplayed();
  });

  it("Click on the elements drop down list", async () => {
    await elementsPage.clickOnList("Elements");
    expect(await elementsPage.$collapsedList().isDisplayed())
      .withContext("Expect list of Elements to be displayed")
      .toBe(true);
  });

  it("Click on the upload  menu and verify the navigation", async () => {
    await elementsPage.clickOnSubList("Upload and Download");
    expect(await uploadDownloadPage.$header())
      .withContext("Expect page header to be displayed")
      .toBeDisplayed();
  });

  it("Upload File", async() => {
    await uploadDownloadPage.uploadFile();
    expect(await uploadDownloadPage.$verifyUpload().isDisplayed())
    .withContext("Expect the fake path to be dsiplayed")
    .toBe(true);
  });

  it("Dowload File", async() => {
    await uploadDownloadPage.downloadFile();
  });
})