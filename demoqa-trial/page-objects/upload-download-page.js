class UploadDownload {
    constructor() {
        this.$header = () => $(`//div[text()="Upload and Download"]`);
        this.$downloadButton = () => $(`//a[@id="downloadButton"]`);
        this.$upload = () => $('//input[@id="uploadFile"]')
        this.$verifyUpload = () => $('//p[@id="uploadedFilePath"]');
    }
    async clickUpload(){
        let image = "C:/Users/SREERAG/Desktop/studies/New folder/images.jpeg"
        let remoteFilePath = await browser.uploadFile(image)
        await  this.$upload().setValue(remoteFilePath)
        await this.$verifyUpload().waitForDisplayed({timeout:1000})
    }
}

export const uploadDownloadPage = new UploadDownload();