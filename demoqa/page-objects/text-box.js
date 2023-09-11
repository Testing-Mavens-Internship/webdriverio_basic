class TextBoxPage {
    constructor() {
        this.$text = () => $('//div[text()="Text Box"]');
        this.$elementName = (name) =>$(`//input[@id="${name}"]`);
        this.$address = (address) =>$(`//textarea[@id="${address}"]`)
        this.$submit = () =>$('//button[@id="submit"]')
        this.$validatingfields = (fields) =>$(`//div[@id ="output"]//p[text()="${fields}"]`)
    }  
    /**
     * 
     * @param {string} userName 
     */
    async clickOnFullName(userName){
        await this.$elementName(userName).setValue('Sreerag');
    }
    /**
     * Enter the email
     * @param {string} userEmail 
     */
    async clickOnEmail(userEmail){
        await this.$elementName(userEmail).setValue('tester@gmail.com');   
    }
    /**
     * Enter the current addreess
     * @param {string} currentAddress 
     */
    async clickOnCurrentAddress(currentAddress){
        await this.$address(currentAddress).setValue('abc');
    }

    /**
     * Enter the permanent address
     * @param {string} permanentAddress 
     */
    async clickOnPermanentAddress(permanentAddress){
        await this.$address(permanentAddress).setValue('abc');
    }

    /**
     * Click on the submit button
     */
    async clickOnSubmit(){
        await this.$submit().scrollIntoView({block: 'center'});
        await  this.$submit().click();
    }

    /**
     * View the name
     */
    async viewAttributes(name){
        await this.$validatingfields(name).scrollIntoView({block: 'center'})   
    }

    async viewAttributes(email){
        await this.$validatingfields(email).scrollIntoView({block: 'center'})    
    }
    
    async viewAttributes(currentAddress){
        await this.$validatingfields(currentAddress).scrollIntoView({block: 'center'})   
    }

    async viewAttributes(permanentAddress){
        await this.$validatingfields(permanentAddress).scrollIntoView({block: 'center'})  
    }
}
export const textBoxPage = new TextBoxPage()
