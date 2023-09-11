class ElementsPage{
    constructor(){
        this.$header = (title="Elements") => $('div.main-header', `${title}`); 
        this.$subList = (subListName)=>$(`//span[text()="${subListName}"]`);
        this.$verify = (params) => $(`//div[@id="result"]//span[text()="${params}"]`)
        this.$toggle = ( ) => $(`//button[@aria-label="Toggle"]`)
    }
    async clickOnCheckBoxSection(){
        await this.$subList("Check Box").click()
        await this.$subList("Home").click()
        await browser.pause(5000)
    }
    async clickOnToggle(){
        await this.$toggle().click()
        await browser.pause(5000)
    }
}
module.exports = new ElementsPage()