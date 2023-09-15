import {elementsPage} from "../page-objects/elements-page.js";
class Upload {
    constructor() {
        this.$header = () => $('//div[text()="Upload and Download"]');
        this.$uploadButton = () => $('//input[@id="uploadFile"]');
        this.$download = () => $('//a[@id="downloadButton"]');
        this.$uploadFile = () => $('//p[text()="C:\fakepath\JWT2.png"]');
    }
    async clickOnUpload(){
        await elementsPage.$option('Upload and Download').scrollIntoView({block : 'center'});
        await elementsPage.$option('Upload and Download').click();
    }
    async uploadFile() {
        let image ="C:/Users/HP/Downloads/JWT2.png";
        let filePath = await browser.uploadFile(image);
        await this.$uploadButton().setValue(filePath);
    }

}
export const upload = new Upload()