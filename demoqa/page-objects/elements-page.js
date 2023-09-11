// const {textBoxPage} = require('../page-objects/textBox-page.js')
// const {webTablePage} = require('../page-objects/webTables-page.js')
class ElementsPage {
    constructor() {
        this.$header = () => $('div.main-header', 'Elements');
        this.$menuListElement = (name) => $(`//ul[@class="menu-list"]//span[text()="${name}"]`);
    }
    /**
     *Click on an element from side bar menu
     * @param {locater} menuListElementInPage 
     */
    async clickOnMenuListElement(menuListElementInPage) {
        //await this.$menuListElement(menuListElementInPage).scrollIntoView({block: 'center'});
        await this.$menuListElement(menuListElementInPage).isClickable();
        await this.$menuListElement(menuListElementInPage).click();
       await browser.pause(5000);
    //await textBoxPage.$header().waitForDisplayed({timeout:20000});
    //await webTablePage.$header().waitForDisplayed({timeout:20000});
        
    }
}
export const elementsPage = new ElementsPage();

// module.exports=

// {

//     elementsPage :new ElementsPage()

// }