class RadioButtonPage{
    constructor(){
        this.$radioButtonName=()=>$(`//div[text()="Radio Button"]`);
        this.$radioButtonTitle=()=>$(`//span[text()="Radio Button"]`);
        this.$radioIcons=(icons)=>$(`//input[@type="radio"]/../label[text()="${icons}"]`)
        this.$validateIcons=(icons)=>$(`//p[@class="mt-3"]/span[text()="${icons}"]`)
    }
    async clickOnRadioButton(){
        await this.$radioButtonTitle().click();
        //await this.$radioButtonName().waitForDisplayed({setTimeout:20000});
        await browser.pause(10000);
    
    }
    async clickOnRadioIcons(icon){
        await this.$radioIcons(icon).click();
        await browser.pause(10000);
        


    }
}

export  const radioButtonPage = new RadioButtonPage()