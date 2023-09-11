class RadioButtonPage{
    constructor(){
        this.$header = () => $('//div[text()="Radio Button"]');
       // this.$radioButtonName=(radioButtonName)=>$(`//label[text()="${radioButtonName}"]/..//input`)
       this.$radioButtonName=(radioButtonName)=>$(`//label[text()="${radioButtonName}"]`)
        this.$text=(name)=>$(`//span[text()="${name}"]`)
    }

    async clickOnRadioButton(button){
        await this.$radioButtonName(button).scrollIntoView({block: 'center'});

        await this.$radioButtonName(button).click();
       
        await browser.pause(5000);
    }

}
module.exports=

{

    radioButton :new RadioButtonPage()

}