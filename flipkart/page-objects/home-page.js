import Common from "./common-page.js";

class Home extends Common{
    constructor(){
        super()
        this.$category = (section="Travel")=>$(`//img[@alt="${section}"]`)
    }
    /**
     * Click on the travel category
     */
    async clickOnTravel(){
        await this.$category().click()

    }
}
export const homePage = new Home()