class CheckBoxPage{
    constructor(){
        this.$checkBoxTitle=()=>$(`//div[text()="Check Box"]`);
        this.$checkBoxName=(title)=>$(`//ul[@class="menu-list"]//span[text()="${title}"]`);
        this.$selectToggle=(value)=>$(`//span[text()="${value}"]/../preceding-sibling::button`);
        this.$dropDowns=(value)=>$(`//span[text()="${value}"]`);
        this.$selectCheckBox=(value)=>$(`//span[text()="${value}"]/preceding-sibling::span[@class="rct-checkbox"]`);
        this.$successMessage=(value)=>$(`//div//span[contains(text(),"${value}")]`);

    }
    async clickOnCheckBoxButton(header){
        await this.$checkBoxName(header).click();
        //await this.$radioButtonName().waitForDisplayed({setTimeout:20000});
        await browser.pause(10000);
    }
    async clickOnToggleIcon(){
        let toggleButtonName = ["Home","Desktop","Documents","Downloads","WorkSpace","Office"]
        for(let i=0;i<toggleButtonName.length;i++){
            await this.$selectToggle(toggleButtonName[i]).scrollIntoView({block:'center'});
            await this.$selectToggle(toggleButtonName[i]).waitForClickable();
            await this.$selectToggle(toggleButtonName[i]).click();
        }

    }
    async clickOnCheckBox(){
        await this.$selectCheckBox("Home").scrollIntoView({block:'center'});
        await this.$selectToggle("Home").waitForClickable();
        await this.$selectCheckBox("Home").click()
    }
    
}
export  const checkBoxPage = new CheckBoxPage()