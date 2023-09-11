class TextBox{
    constructor(){
        this.$header = () => $('//div[text()="Text Box"]');
        this.$text = (text) => $(`//input[@id="${text}"]`);
        this.$address = (address) => $(`//textarea[@id="${address}"]`);
        this.$submit = () => $('//button[@id="submit"]');
        this.$validatingfields = (fields) =>$(`//div[@id ="output"]//p[text()="${fields}"]`)
    }
    /**
     * 
     * @param {string} userName 
     */
    async clickFullName(userName){
        await this.$text(userName).setValue('Athira');
    }
    /**
     * 
     * @param {string} userEmail 
     */
    
    async clickEmail(userEmail){
        await this.$text(userEmail).setValue('athira@gmail.com');
    }
    /**
     * 
     * @param {string} currentAddress 
     */
    async clickCurrentAddress(currentAddress){
        await this.$address(currentAddress).setValue('abcd');
    }
    /**
     * 
     * @param {string} permanentAddress 
     */
    
    async clickPermanentAddress(permanentAddress){
        await this.$address(permanentAddress).setValue('abcde');
    }

    async clickSubmit(){
        await this.$submit().scrollIntoView();
        await this.$submit().click();
        await this.$submit().waitForDisplayed({timeout :2000 });
    }


    async validateText(name){
        await this.$validatingfields(name).scrollIntoView();
    }
    async validateText(email){
        await this.$validatingfields(email).scrollIntoView();
    }
    async validateText(currentAddress){
        await this.$validatingfields(currentAddress).scrollIntoView();
    }
    async validateText(permanentAddress){
        await this.$validatingfields(permanentAddress).scrollIntoView();
    }
}

module.exports = {
    textbox : new TextBox()
}