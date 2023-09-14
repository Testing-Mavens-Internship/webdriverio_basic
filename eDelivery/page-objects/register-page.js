import Common from "./Common.js";

class RegisterForm extends Common{

    constructor(){
        super();
        this.$fields=(name)=>$(`//input[@id="${name}"]`)
        this.$continueButton=()=>$('//button[contains(text(),"Continue")]')
        this.$loginButton=()=>$('//div[@class="subm_btn"]/a[contains(text(),"Log")]')
       this.$loginMessage=()=>$('//div[@class="toast-top-right"]')
        this.$nameValidation=(name)=>$(`//span[contains(text(),"${name}")]`)
        
    }
    /**
     * Method to enter details to register
     * @param {String} firstName 
     * @param {String} lastName 
     * @param {String} email 
     * @param {String} phoneNumber 
     */
async fillForm(firstName,lastName,email,phoneNumber){
    await this.$fields('first_name').setValue(firstName)
    await this.$fields('last_name').setValue(lastName)
    await this.$fields('email').setValue(email+"@gmail.com")
    await this.$fields('tel').setValue("9"+ phoneNumber)
    await this.$continueButton().waitForClickable()
    await this.$continueButton().click()
    await this.$loginButton().waitForDisplayed({timeout:3000})
    await this.$loginButton().click()
    await this.$loginMessage().waitForDisplayed({timeout:3000})
    await this.$nameValidation(firstName).waitForDisplayed({timeout:2000})
}

}

export const registerForm = new RegisterForm()
