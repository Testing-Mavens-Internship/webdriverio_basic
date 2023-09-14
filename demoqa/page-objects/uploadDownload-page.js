class UploadDownloadPage{
    constructor(){
        this.$header=()=>$('//div[@class="main-header"]')
        this.$chooseFileButton=()=>$('//input[@id="uploadFile"]')
        this.$downloadButton=()=>$('//a[@id="downloadButton"]')
        this.$validationMessage = () => $('//p[@id="uploadedFilePath"]');
    }
   
 async clickUpload(){
    //await this.$downloadButton().click()
     let file = "C:/Users/ASUS/OneDrive/Desktop/example.txt"
let remoteFilePath = await browser.uploadFile(file)
    await this.$chooseFileButton().setValue(remoteFilePath)
    await this.$validationMessage().waitForDisplayed({timeout:2000})
    
        }

}

export const uploadDownloadPage = new UploadDownloadPage();