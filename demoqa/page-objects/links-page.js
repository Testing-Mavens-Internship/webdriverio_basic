class LinksPage{
    constructor(){
        this.$header = (header) => $(`//div[text()="${header}"]`);
        this.$home = () => $('//a[@id="simpleLink"]');
        
    }
    /**
     * Click on home link
     */
    async homeLink() {
        await this.$home().click();
    }

}
export const linksPage = new LinksPage() 