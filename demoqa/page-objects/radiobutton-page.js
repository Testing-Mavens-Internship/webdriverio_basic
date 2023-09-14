class RadioButtonPage{
    constructor(){
        this.$header = (header) => $(`//div[text()="${header}"]`);
        this.$button = (option) => $(`//label[text()="${option}"]`)
}
async radioButton(option){
    await this.$button(option).waitForClickable(5000);
    await this.$button(option).click(); 
}
}

export const radioPage = new RadioButtonPage();