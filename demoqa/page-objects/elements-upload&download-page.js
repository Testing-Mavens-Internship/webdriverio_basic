class UploadDownload{
    constructor(){
        this.$subList = (subListName)=>$(`//span[text()="${subListName}"]`);
        this.$header = () => $('div.main-header', 'Upload and Download');
        this.$uploadFileLocator = ()=>$('//input[@id="uploadFile"]')
        this.$downloadButton = ()=>$('//a[text()="Download"]')
        this.$uploadVerify = ()=>$('//p[@id="uploadedFilePath"]')
    }   
    async clickOnUploadDownloadSection(){
        await this.$subList("Upload and Download").scrollIntoView({block:'center'});
        await this.$subList("Upload and Download").waitForClickable(5000)
        await this.$subList("Upload and Download").click()
    }
    async uploadFileToSite(){
        let file = "C:/Users/joyal/Downloads/finalresume.pdf"
        let path = await browser.uploadFile(file)
        await this.$uploadFileLocator().setValue(path);
        await browser.pause(5000)
    }
    async downloadFileFromSite(){
        await this.$downloadButton().click()
    }
}
export const uploadAndDownload = new UploadDownload()