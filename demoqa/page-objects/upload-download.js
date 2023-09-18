class UploadDownload {
    constructor() {
      this.$header = (header) => $(`//div[text()="${header}"]`);
      this.$download = ()=> $('//a[text()="Download"]')
      //this.$chooseFile = () => $('//div[@class="form-file"]//input')
      this.$upload = () => $('//input[@id="uploadFile"]');
      this.$verifyUpload = () => $('//p[@id="uploadedFilePath"]');
    }
  
    /**Method to click on download button */
    async clickOnDownload(){
        await this.$download().click();
    }
    
     /**Method to click on choose file button */
     async clickOnDownload(){
        await this.$chooseFile().click();
    } 

    async clickUpload(){

        let image = "C:/Users/devik/OneDrive/Pictures/IMG_4711.jpg"
        let remoteFilePath = await browser.uploadFile(image)
        await this.$upload().setValue(remoteFilePath)
        await this.$verifyUpload().waitForDisplayed({timeout:1000})
    }

  }
  
  export const uploadDownload = new UploadDownload ();
  