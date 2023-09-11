import { textBoxPage } from "../pageobjects/textbox-page.js";

class ElementsPage{
    constructor(){
        this.$header = () => $('div.main-header','Elements');
        this.$dropDownDisplay =(list) => $(`//ul//span[text()="${list}"]`)
    }
        
     /**
     * click on drop down ist
     * @param {string} listName
     */
     async clickOnList(listName) {
        await this.$dropDownDisplay(listName).scrollIntoView();
        await this.$dropDownDisplay(listName).isClickable();
        await this.$dropDownDisplay(listName).click();
        await textBoxPage.$header().waitForDisplayed({timeout:20000});
    }
}
export const elementsPage = new ElementsPage();
