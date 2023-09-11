class LinksPage{
    constructor(){
        this.$linkTitle=()=>$(`//div[text()="Links"]`);
        this.$linkName=(title)=>$(`//ul[@class="menu-list"]//span[text()="${title}"]`)
        this.$homeLink=()=>$(`//a[@id="simpleLink"]`)
        this.$validateTile=()=>$(`//h5[text()="Elements"]/../../..`)
    }
    async clickOnLinks(header){
        await this.$linkName(header).click();
        //await this.$radioButtonName().waitForDisplayed({setTimeout:20000});
        await browser.pause(10000);
    }
    async clickOnHomeLink(){
        await this.$homeLink().click();
        //await this.$radioButtonName().waitForDisplayed({setTimeout:20000});
        await browser.pause(10000);
    }
    

}
export  const linksPage = new LinksPage()