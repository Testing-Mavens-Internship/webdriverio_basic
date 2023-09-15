class UploadDownload{
    constructor(){
        this.$header = () => $('div.main-header', 'Upload and Download');
        this.$downloadButton = () => $(`//a[@id="downloadButton"]`);
        this.$uploadButton = () => $(`//input[@id="uploadFile"]`);
        this.$uploadedFileName = () => $(`//p[contains(text(),"Flows.txt")]`);
    }
    /**
     * method to upload a file
     */
    async uploadFile(){
        const filePath = 'C:/Users/saifu/OneDrive/Desktop/Internship - TM/Flows.txt';
        const remoteFilePath = await browser.uploadFile(filePath);
        await this.$uploadButton().setValue(remoteFilePath);
        await this.$uploadedFileName().waitForDisplayed({timeout: 20000});
    }
    /**
     * Method to download file
     */
    async downloadFile(){
        await this.$downloadButton().click();
    }
}
export const uploadDownloadPage = new UploadDownload();