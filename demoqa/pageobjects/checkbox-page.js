class CheckBoxPage{
    constructor(){
        this.$checkBoxHeader= () => $(`//div[text()="Check Box"]`)
        this.$clickOnCheckbox = (tick) => $(`//span[text()="${tick}"]/../span[@class="rct-checkbox"]`)
        this.$$text = () => $$('//div[@class="display-result mt-4"]//span');
        this.$output = (value) => $(`//span[text()="${value}"]`);
        this.$clickOnToggle = (value) => $(`//span[text()="${value}"]/../preceding-sibling::button`)
        this.$checkBoxName = (name) => $(`//span[text()="Downloads"]/..`)
     }

    async clickOnCheckbox(tick){
        await this.$clickOnCheckbox(tick).scrollIntoView({block: 'center'});
        await this.$clickOnCheckbox(tick).click();
        await browser.pause(2000);
        
    }

    async clickOnToggle(value){
        await this.$clickOnToggle(value).scrollIntoView({block: 'center'});
        await this.$clickOnToggle(value).click();
        await browser.pause(2000);
        
    }
}
export const checkBoxPage  = new CheckBoxPage();