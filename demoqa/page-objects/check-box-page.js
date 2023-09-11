class CheckBox{
    constructor(){
        this.$header= () => $('//div[@class = "main-header"]');
        this.$checkBox =(names) => $(`//span[text()="${names}"]/..//span[@class="rct-checkbox"]`)
        //this.$boxText =(value) => $(`//div//span[contains(.,"${value}")]`)
        this.$clickToggle = (toggle) =>$(`//span[text()="${toggle}"]/../preceding-sibling::button`)
        this.$subLabel = (subLevel) => $(`//span[text()="${subLevel}"]`)
        this.$$check =() => $$(`svg[class= "rct-icon rct-icon-check"]`)
        this.$checkBoxButton = () => $('//span[text() = "Check Box"]')
        
    }

    async clickOnCheckBoxButton(){
        await this.$checkBox(names).click();
        await this.$checkBox(names).waitForDisplayed({timeout :2000 });
    }

    async clickOnCheckBoxButton(){
        await this.$checkBoxButton().click();
        await this.$checkBoxButton().scrollIntoView({block:'center'});
    }
    async clickOnCheckBox(){
        await this.$checkBox("Home").scrollIntoView({block:'center'});
        await this.$checkBox("Home").click();


    }
    async clickOnToggleButton(i){
            await this.$clickToggle(i).waitForClickable();
            await this.$clickToggle(i).click();
            await this.$clickToggle(i).scrollIntoView({block:'center'});
    }
}

export const checkbox = new CheckBox()