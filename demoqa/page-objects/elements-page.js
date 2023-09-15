import { textBoxPage } from "../page-objects/text-box-page.js";
import { webTablesPage } from "./web-tables-page.js";
import { radioButtonPage } from "./radio-button-page.js";
import { checkBoxPage } from "./check-box-page.js";
import { links } from "./links-page.js";
import { uploadDownloadPage } from "./upload-download-page.js";

class ElementsPage {
    constructor() {
        this.$header = () => $('div.main-header', 'Elements');
        this.$sideMenu = (value) => $(`//span[text()="${value}"]`);
    }

    /**
     * click on text box
     */
    async clickOnTextBox() {
        await this.$sideMenu('Text Box').click();
        await textBoxPage.$text().waitForDisplayed({timeout: 20000});
    }

    /**
     * click on web tables
     */
    async clickOnWebTables(){
        await this.$sideMenu('Web Tables').click();
        await webTablesPage.$header().waitForDisplayed({timeout: 20000});
    }

    /**
     * click on radio button
     */
    async clickOnRadioButton(){
        await this.$sideMenu('Radio Button').click();
        await radioButtonPage.$header().waitForDisplayed({timeout: 20000});
    }

    /**
     * click on Check Box
     */
    async clickOnCheckBox(){
        await this.$sideMenu('Check Box').click();
        await checkBoxPage.$header().waitForDisplayed({timeout: 20000});
    }

    /**
     * click on Links
     */
    async clickOnLinks(){
        await this.$sideMenu("Links").scrollIntoView({ block: 'center'});
        await this.$sideMenu("Links").waitForClickable(5000);
        await this.$sideMenu("Links").click();
        await links.$header().waitForDisplayed({timeout: 2000});
    }
    /**
     * click on upload and download
     */
    async clickOnUploadAndDownload(){
        await this.$sideMenu('Upload and Download').scrollIntoView();
        await this.$sideMenu('Upload and Download').click();
        await uploadDownloadPage.$header().waitForDisplayed({timeout:2000});
    }
}
export const elementsPage = new ElementsPage();