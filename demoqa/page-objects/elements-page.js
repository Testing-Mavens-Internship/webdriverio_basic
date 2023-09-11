import { textBoxPage } from '..//page-objects/text-box.js';
 
class ElementsPage {
    constructor() {
        this.$header = () => $('div.main-header', 'Elements');
        this.$textBox = () => $('//span[text()="Text Box"]');
        this.$webTileBox = () => $('//span[text()="Web Tables"]')
    }
    /**
     * Click on the text box
     */
    async clickOnTextBox() {
        await this.$textBox().click();
        await textBoxPage.$text().waitForDisplayed({timeout: 20000})
    }
    

}
export const elementsPage = new ElementsPage()
 