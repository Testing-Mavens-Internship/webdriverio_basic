class ElementsPage{
    constructor(){
        this.$tileName = (name) => $(`//div[@class="category-cards"]//h5[text()="${name}"]`);
        this.$header = (title="Elements") => $('div.main-header', `${title}`); 
        this.$subList = (subListName)=>$(`//span[text()="${subListName}"]`);
        this.$link = () => $(`//a[@id="simpleLink"]`);

    }
    async clickOnLinkSection(){
        await this.$subList("Links").scrollIntoView({block:'center'});
        await this.$subList("Links").waitForClickable(5000)
        await this.$subList("Links").click()
    }
    async clickLink(){
        await this.$link().click()
    }
    
}
module.exports = new ElementsPage();