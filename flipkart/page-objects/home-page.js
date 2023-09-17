import Common from "./common.js"; 
class HomePage extends Common{
    constructor(){
        super();
        this.$selectSection = (section) => $(`//div[@class="_3sdu8W emupdz"]//span[text()="${section}"]`)
    }
    /**
     * select category
     * @param {string} section 
     */
    async selectProduct(section){
        await this.$selectSection(section).click();
    }
}
export const homePage = new HomePage()