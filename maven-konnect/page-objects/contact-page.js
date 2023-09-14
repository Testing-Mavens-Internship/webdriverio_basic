import Common from "./common-page.js";

class Contact extends Common{
    constructor(){
        super()
        this.$inputField = (field)=>$(`//input[@placeholder="${field}"]`)
        this.$submit = ()=>$('//button[contains(text(),"SEND")]')
        this.$navigationVerification = ()=>$('//h1[contains(text(),"THANK YOU!")]')
    }
    /**
     * Enter details to contact
     */
    async enterDetails(){
        await this.$inputField("Full Name ").setValue("Joyal")
        await this.$inputField("Email").setValue("joyal@test.com")
        await this.$inputField("Phone number").setValue("9633686574")
        await this.$inputField("Message").setValue("Hello")
        await this.$submit().click()
    }
}
export const contactPage = new Contact()