class LinkPage{
    constructor(){
        this.$header= () => $('//div[@class = "main-header"]');
        this.$links = () =>$('//span[text()="Links"]');
        this.$homeLink = () =>$('//a[@id = "simpleLink"]');
    }
    async clickOnLink(){
        await this.$links().scrollIntoView({block: 'center'});
        await this.$links().click();
    }
    async clickOnNewHome(){
        await this.$homeLink().click();
    }
}
module.exports= {
    link: new LinkPage()
}