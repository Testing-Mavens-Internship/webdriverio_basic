export default class Common{
    constructor(){
        this.$logo = () => $('//div[text()="Swag Labs"]')
        this.$credential = (value) => $(`//input[@id="${value}"]`)
        this.$clickButton = (value) => $(`//button[text()="${value}"]`)
        this.$price = () => $('//div[contains(text(),"Fleece")]/../../following-sibling::div//div')
       
        
    }
}