import Common from "./common.js";

class LinkPage extends Common{
    constructor() {
        super();
        this.$headerLink = () => $('//div[@class="pattern-backgound playgound-header"]//div[text()="Links"]');
        this.$clickLink= () => $('//a[@id="simpleLink"]')
    }
/**
 * click on link tile
 */
    async clickOnLinkPage(){
        await this.$tabButton("Links").scrollIntoView({block:'center'})
        await this.$tabButton("Links").click();
        await this.$headerLink().waitForDisplayed({timeout:20000})
        
    }
    async clickOnHome(){
        await this.$clickLink().scrollIntoView({block:'center'})
        await this.$clickLink().click();
 
    }
}

export const linkPage = new LinkPage()