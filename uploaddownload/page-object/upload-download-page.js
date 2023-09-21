
class UploadDownload{
    constructor()
    {
        this.$uploadAndDownload=()=>$(`//span[text()="Upload and Download"]`);
        this.$clickOnUpload=()=>$(`//input[@id="uploadFile"]`);
        this.$verifyUpload = () => $('//p[@id="uploadedFilePath"]');
        this.$clickonDownload=()=>$(`//a[text()="Download"]`);
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

    async download(){
        await this.$clickonDownload().waitForClickable();
        await this.$clickonDownload().click();
        await  browser.pause(10000);
    }
   


}
export const uploadDownload=new UploadDownload();