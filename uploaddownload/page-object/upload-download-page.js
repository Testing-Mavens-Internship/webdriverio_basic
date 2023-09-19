class UploadDownload{
    constructor()
    {
        this.$uploadAndDownload=()=>$(`//span[text()="Upload and Download"]`);
        this.$clickOnUpload=()=>$(`//input[@id="uploadFile"]`);
        this.$verifyUpload = () => $('//p[@id="uploadedFilePath"]');
    }
    async clickOnUploadDownload(){
        await this.$uploadAndDownload().scrollIntoView({block:'center'});
        await this.$uploadAndDownload().click();
    }
    async clickUpload(){
        let image = "C:/Users/hp/OneDrive/Pictures/Screenshots/Bug002(1).png"
        let remoteFilePath = await browser.uploadFile(image)
        await this.$clickOnUpload().setValue(remoteFilePath)
        await this.$verifyUpload().waitForDisplayed({timeout:1000})

    }
    browser.waitUntil(() => {
        const files = fs.readdirSync('c:/Users/hp/Downloads');
        return files.some((file) => file.endsWith('.jpeg')); // Adjust the file extension as needed
      }, {
        timeout: 60000, // Adjust the timeout as needed
        timeoutMsg: 'File download did not complete in time.',
      }
    });
      


}
export const uploadDownload=new UploadDownload();