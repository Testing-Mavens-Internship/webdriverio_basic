import Common from "./common.js";

class ButtonPage extends Common{
    constructor(){
        super();
        this.$headerButtonTile= () => $('//div[@class="pattern-backgound playgound-header"]//div[text()="Buttons"]')
        this.$clickButton = (value) => $(`//div//button[text()="${value}"]`)
        this.$text =(value) => $(`//div//p[contains(text(),"${value}")]`)

    }
    /**
     * click on buttons tile
     */
    async clickOnButtonTile(){
        await this.$tabButton("Buttons").scrollIntoView({block:'center'});
        await this.$tabButton("Buttons").waitForClickable();
        await this.$tabButton("Buttons").click();
    }
/**
 * click on buttons
 */
    async clickON(){
        await this.$clickButton("Double Click Me").waitForClickable();
        await this.$clickButton("Double Click Me").doubleClick();
        await this.$clickButton("Click Me").waitForClickable();
        await this.$clickButton("Click Me").click();
        await this.$clickButton("Right Click Me").waitForClickable();
        await this.$clickButton("Right Click Me").click({button:"right"});
        
    }

}
export const buttonPage = new ButtonPage()