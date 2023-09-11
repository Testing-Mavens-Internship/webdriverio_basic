class CheckBox{
    constructor()
    {
        
        this.$textBoxName=(title)=>$(`//ul[@class="menu-list"]//span[text()="${title}"]`);
        this.$checkBoxTitle=()=>$(`//div[@class="main-header"][text()="Check Box"]`);
        this.$checkBoxItems=(checkBoxName)=>$(`//span[@class="rct-node-icon"]/../span[text()="${checkBoxName}"]`)
        this.$checkBoxToggle=(toggleName)=>$(`//span[text()="${toggleName}"]/../../button`)
        this.$youHaveSelected=()=>$(`//span[text()="You have selected :"]`)
        this.$resultValues=(selectedToggleNames)=>$(`//span[text()="${selectedToggleNames}"]/..`)



    }
    async clickOnCheckBoxNav(checkBoxNavTitle){
        await this.$textBoxName(checkBoxNavTitle).click()
       // await browser.pause(3000);
        await this.$checkBoxTitle().waitForDisplayed({setTimeout:30000})
    }
    async clickOnToggleButton(togglename){
        await  this.$checkBoxTitle().scrollIntoView()
        await this.$checkBoxToggle(togglename).click()
        await  this.$checkBoxTitle().scrollIntoView()
        await this.$checkBoxTitle().waitForDisplayed({setTimeout:30000})
        
    }
     async clickOnCheckBoxItems(checkBoxItemName){
        await this.$checkBoxItems(checkBoxItemName).click()
         await browser.pause(3000);
     }


}
export const checkboxpage = new CheckBox();

