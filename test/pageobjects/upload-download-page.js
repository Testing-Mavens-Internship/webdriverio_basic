class UploadAndDownload{
    constructor(){
        this.$uploadAndDownload=()=>$(`//span[text()="Upload and Download"]`)
        this.$uploadDownloadHeader=()=>$(`//div[text()="Upload and Download"]`)
        this.$uploadButton=()=>$(`//input[@id="uploadFile"]`)
        this.$path=()=>$(`//p[@id="uploadedFilePath"]`)
}
async ClickOnUploadAndDownload(){
    await this.$uploadAndDownload().scrollIntoView()
    await this.$uploadAndDownload().click()
}
async clickOnUploadButton(){
    const filePath = 'c:/Users/adhit/Downloads/d3_adb_13_9_2023 16_57_21.json';
    const remotefilepath=await browser.uploadFile(filePath);
    await this.$uploadButton().setValue(remotefilepath)
    await browser.pause(3000)
}

}
export const uploadAndDownload=new UploadAndDownload()