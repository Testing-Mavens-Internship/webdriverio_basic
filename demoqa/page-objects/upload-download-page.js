import Common from "../../demoqa/page-objects/common.js";

class UploadPage extends Common{
    constructor(){
        super();
        this.$headerUploadTile= () => $('//div[@class="pattern-backgound playgound-header"]//div[text()="Upload and Download"]')
        this.$verifyMessage = () => $('//p[@id="uploadedFilePath"]')
    }
    /**
     * Method to click on Upload tile
     */
    async clickOnUploadTile(){
        await this.$tabButton("Upload and Download").scrollIntoView({block:'center'});
        await this.$tabButton("Upload and Download").waitForClickable();
        await this.$tabButton("Upload and Download").click();
    }
    /**
     * Method to click on upload and download 
     */
    async clickUploadButton(){
        let pdf = "C:/Users/Aparna/Downloads/PROJECT TITLE.pdf";
        let path = await browser.uploadFile(pdf)
        await this.$uploadButton().setValue(path);
        
    }
}
export const uploadPage = new UploadPage();