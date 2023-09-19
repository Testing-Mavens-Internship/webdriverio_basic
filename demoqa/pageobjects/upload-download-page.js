class UploadDownload{
    constructor(){
        this.$uploadButton=()=>$('//input[@id="uploadFile"]');
        this.$verifyUpload = () => $('//p[@id="uploadedFilePath"]');
    }
    /**method to upload a file */
    async clickUpload(){
        //await this.$uploadButton().click();
        let img = "C:/Users/VSN/Desktop/pexels-vlad-alexandru-popa-1402787.jpg";
        let fileUpload = await browser.uploadFile(img);
        await this.$uploadButton().setValue(fileUpload);
        await this.$verifyUpload().waitForDisplayed({timeout : 2000});
    }
}
export const uploadDownload = new UploadDownload();