class ElementsPage {
    constructor() {
            this.$header = () => $('div.main-header', 'Elements');
            this.$clickTextBox = () => $("//span[text()='Text Box']");

        }
        /**
         * to click on text box
         */
    async clickOnText() {
        await this.$clickTextBox().click();
        //await browser.pause(3000);

    }


}
export const elementsPage = new ElementsPage();