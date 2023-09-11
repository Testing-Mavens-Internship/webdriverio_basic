

class Links{
    constructor(){
        this.$header  = () => $('//div[text()="Links"]');
        this.$homeLink = () => $('//a[@id="simpleLink"]');
        this.$tileElement = () => $('//h5[text()="Elements"]');
    }

    /**
     * click Home link
     */
    async clickHomeLink(){
        await this.$homeLink().click();
    }
}
export const links = new Links();