import fs from 'fs';
import path from 'path';

class UploadAndDownload {
    constructor() {
        this.$uploadAndDownload = () => $(`//span[text()="Upload and Download"]`);
        this.$uploadDownloadHeader = () => $(`//div[text()="Upload and Download"]`);
        this.$uploadButton = () => $(`//input[@id="uploadFile"]`);
        this.$path = () => $(`//p[@id="uploadedFilePath"]`);
        this.$downloadButton = () => $(`//a[@id="downloadButton"]`);
    }

    async ClickOnUploadAndDownload() {
        await this.$uploadAndDownload().scrollIntoView();
        await this.$uploadAndDownload().click();
    }

    async clickOnUploadButton() {
        const filePath = 'c:/Users/adhit/Downloads/d3_adb_13_9_2023 16_57_21.json';
        const remotefilepath = await browser.uploadFile(filePath);
        await this.$uploadButton().setValue(remotefilepath);
        await browser.pause(3000);
    }

    async clickOnDownloadButton() {
        await this.$downloadButton().click();
        await browser.pause(3000);

        // Specify the download folder
        const downloadFolder = 'c:/Users/adhit/Downloads/TestExample';

        // List files in the directory
        const files = fs.readdirSync(downloadFolder);

        // Iterate through the files and check their extensions
        for (const file of files) {
            const filePath = path.join(downloadFolder, file);
            const fileExtension = path.extname(file).toLowerCase();

            console.log(`File: ${file}, Extension: ${fileExtension}`);
            // Implement logic to check the file and its extension
            if (fileExtension === '.jpeg') {
                // Handle JPEG files
            } else if (fileExtension === '.csv') {
                // Handle CSV files
            }
        }
    }
}

export const uploadAndDownload = new UploadAndDownload();
