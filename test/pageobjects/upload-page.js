class UploadPage{
    constructor(){
        this.$uploadTitle=()=>$(`//span[text()="Upload and Download"]`);
        this.$uploadHeader = () => $('//div[text()="Upload and Download"]')
        this.$downloadButton = () => $('//a[@id="downloadButton"]');
        this.$chooseFileButton = () => $('//input[@id="uploadFile"]');
        this.$uploadMessage = () =>$(`//p[@id="uploadedFilePath"]`)
    }
    async clickOnUpload(){
        await this.$uploadTitle('Upload and Download').scrollIntoView({block: 'center'});
        await this.$uploadTitle('Upload and Download').click();

    }
    async uploadFile(){
        let image = "C:/Users/ANCHANA/OneDrive/Pictures/Screenshots/2023-03-08 (2).png";
        let remoteFilePath = await browser.uploadFile(image)
        await this.$chooseFileButton().setValue(remoteFilePath)
        await this.$uploadMessage().waitForDisplayed({timeout:1000})
    }
}
export const uploadPage = new UploadPage()
    