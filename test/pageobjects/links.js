class Links{

    constructor(){

        this.$textBoxName=(title)=>$(`//ul[@class="menu-list"]//span[text()="${title}"]`);
        this.$linkHeader=()=>$(`//div[@class="main-header"][text()="Links"]`);
        this.$homeLink=()=>$(`//a[@id="simpleLink"][text()="Home"]`)
        this.$elementTile=()=>$(`//h5[text()="Elements"]/../../..`)

    }

    async clickOnLinkNav(linkTitle){
      // await this.$textBoxName().scrollIntoView();
        await this.$textBoxName(linkTitle).click()
       // await browser.pause(3000);
        //await this.$textBoxName(linkTitle).waitForDisplayed({setTimeout:30000})
    
}
async clickOnHomeLink(){
    await this.$homeLink().click()
    await browser.pause(3000);
}
}
export const linkpage= new Links()
