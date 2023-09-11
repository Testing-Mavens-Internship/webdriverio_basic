class ElementsPage {
    constructor() {
        this.$header = () => $('div.main-header', 'Elements');
        this.$menuList = (list) => $(`//div[text()="${list}"]`);
        this.$subMenuList = (subList) => $(`//span[text()="${subList}"]`);
        this.$collapsedList = () => $(`//div[@class="element-list collapse show"]`)

    }

    /**
     * click on side nav bar
     * @param {string} listName 
     */
    async clickOnList(listName) {
        await this.$menuList(listName).scrollIntoView({ block: 'center' });
        await this.$menuList(listName).waitForClickable({ timeout: 2000 })
        await this.$menuList(listName).click();
        await this.$collapsedList().waitForDisplayed({ timeout: 2000 });
    }

    /**
     * Click on sub nav
     * @param {string} subListName 
     */

    async clickOnSubList(subListName) {
        await this.$subMenuList(subListName).scrollIntoView({ block: 'center' });
        await this.$subMenuList(subListName).waitForClickable({ timeout: 2000 })
        await this.$subMenuList(subListName).click();
    }


}

export const elementsPage = new ElementsPage();