class UploadDownload {
    constructor() {
        this.$header = () => $(`//div[text()="Upload and Download"]`);
        this.$downloadButton = () => $(`//a[@id="downloadButton"]`);
        this.$uploadButton = () => $(`//input[@id="file-upload-button"]`);
    }
}

export const uploadDownloadPage = new UploadDownload();