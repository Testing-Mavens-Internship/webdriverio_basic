class LinksPage{
    constructor(){
        this.$linksHeader= () => $('//div[text()="Links"]')
        this.$linkHome= () => $('//a[text()="Home" and @id="simpleLink"]')
        this.$elementsHeader = () => $('//h5[text()="Elements"]')
        
    }
    
    async  clickOnHomeLink(){
        await this.$linkHome().isClickable();
        await browser.pause(2000);
        await this.$linkHome().click();
        await browser.pause(1000);

        

    }
    
    // async checkElementTile(){
    //     await this.$elementsHeader().isClickable();
       
    // }
}
export const linksPage = new LinksPage();