class UploadDownloadPage{
    constructor(){
        this.$pageHeader = () => $('div.main-header', 'Elements');
        this.$upload = () => $('//input[@id="uploadFile"]');
        this.$download = () => $('//a[@id="downloadButton"]');
        this.$verifyUpload = () => $('//p[@id="uploadedFilePath"]');
    }
    /**
     * Method to upload file
     */
    async clickUpload(){
        let image = "C:/Users/anish/OneDrive/Desktop/IMG-20211227-WA0025.jpg"
        let remoteFilePath = await browser.uploadFile(image)
        await this.$upload().setValue(remoteFilePath)
        await this.$verifyUpload().waitForDisplayed({timeout:1000})
    }
    /**
     * Method to download file
     */
    async clickDownload(){
        await browser.cdp('Page', 'setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: 'C:/Users/anish/Downloads/(.jpeg)',
        });
        await this.$download().click();
    }

}
export const uploadDownload = new UploadDownloadPage()