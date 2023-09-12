import Common from "./common.js";

class CheckBox extends Common{
    constructor(){
        super();
        this.$headerCheckBox = () => $('//div[@class="pattern-backgound playgound-header"]//div[text()="Check Box"]');
        this.$boxText =(value) => $(`//div//span[contains(.,"${value}")]`)
        this.$selectBox = (value) => $(`//span[text()="${value}"]/..//span[@class="rct-checkbox"]`)
        this.$toggle = (value) => $(`//span[text()="${value}"]/../preceding-sibling::button`)
        this.$subLabel = (value) => $(`//span[text()="${value}"]/..`)
        this.$check =(value) => $(`//span[text()="${value}"]/preceding-sibling::span[contains(@class,"check")]`)
    }

    

/**
 * click on check box tile
 */
    async clickOnCheckBoxTile(){
        await this.$tabButton("Check Box").click();
    }
    /**
     * click on toggle icon
     */

    async clickOnToggle(){
        let folderName =["Home","Desktop", "Documents", "Downloads", "WorkSpace", "Office"];
        for(let a=0; a<folderName.length; a++){
            await this.$toggle(folderName[a]).scrollIntoView({block:'center'});
            await this.$toggle(folderName[a]).waitForClickable();
            await this.$toggle(folderName[a]).click();

        }
    }
    /**
     * click on check box
     */

    async clickOnBox(){
        await this.$selectBox("Home").scrollIntoView({block:'center'});
        await this.$selectBox("Home").click();
        
    }


}

export const checkBox = new CheckBox()