class ElementsPage {
    constructor() {
            this.$header = () => $('div.main-header', 'Elements');
            this.$clickTextBox = () => $("//span[text()='Text Box']");
            this.$uploadAnddownload = () => $(`//span[text()="Upload and Download"]`);
            this.$header5 = () => $(`//div[text()="Upload and Download"]`)
            this.$download = () => $(`//a[@id="downloadButton"]`)
            this.$selectFileHeader = () => $(`//label[text()="Select a file"]`)

        }
        /**
         * to click on text box
         */
    async clickOnText() {
            await this.$clickTextBox().click();
            //await browser.pause(3000);

        }
        /**
         * cick on upload and download
         */
    async clickOnUploadAndDownLoad() {
        await this.$uploadAnddownload().click();
    }
    async clickOnDownLoad() {
        await this.$download().click();

    }


}
export const elementsPage = new ElementsPage();