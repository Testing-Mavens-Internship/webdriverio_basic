
class UploadDownload {
    constructor() {
        this.$header = () => $(`//div[text()="Upload and Download"]`);
        this.$downloadButton = () => $(`//a[@id="downloadButton"]`);
        this.$uploadButton = () => $(`//input[@id="uploadFile"]`);
        this.$verifyUpload = () => $('//p[@id="uploadedFilePath"]');
    }
    /**
     * method for downloading file
     */
    async clickOndownload(){
        await this.$downloadButton().click();
        await browser.pause(1000);
    }
    async verifyDownload(expectedExtension, downloadedFileName){
        let fileExtension = downloadedFileName.split('.').pop();
        if(fileExtension === expectedExtension){
            return true;
        }

    }
    /**
     * method for uploading file
     */
    async uploadFile(){
        let file = "C:/Users/fathi/Downloads/sandberry.jpg";
        let filePath = await browser.uploadFile(file);
        await this.$uploadButton().setValue(filePath);
        await this.$verifyUpload().waitForDisplayed({timeout:1000})
    }
}

export const uploadDownloadPage = new UploadDownload();