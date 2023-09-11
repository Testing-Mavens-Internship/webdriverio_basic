class ElementsPage {
    constructor() {
        this.$header = () => $('div.main-header', 'Elements'); 
        this.$subHead = (subListName)=> $(`//span[text()="${subListName}"]`)
        this.$radioButton = (yourOption) => $(`//label[text()="${yourOption}"]`)
        
    }
    async clickOnRadioButtonSection(){
        
        await this.$subHead("Radio Button").scrollIntoView({block:'center'});
        await this.$subHead("Radio Button").waitForClickable(5000);
        await this.$subHead("Radio Button").click()

        await this.$radioButton("Impressive").click()
        await this.$subHead("Impressive").waitForDisplayed({timeout:20000})

    }
}

module.exports = new ElementsPage();