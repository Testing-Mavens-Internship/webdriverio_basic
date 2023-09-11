class TextBoxPage{
    constructor(){
        this.$header = () => $(`//div[text()="Elements"]`);
        this.$input = (value) => $(`//label[text()="${value}"]/../../div//input`)
        this.$current = (address) => $(`//label[text()="${address}"]/../../div//textarea`);
        this.$submit = () => $('//button[text()="Submit"]');
        this.$validate = (name) => $(`//div[@id="output"]//p[text()="${name}"]`)
        
    }

    async enterName(inputValue){
        await this.$input(inputValue).setValue("Vaishnav S")
    }
    /**
     * Enter email
     * @param {string} inputValue
     */

async enterEmail(inputValue) {
    await this.$input(inputValue).setValue('vaishnav@gmail.com')
    //await browser.pause(5000);

}

/**
 * enter current address
 * @param {string} address
 */
async enterCurrentAddress(address) {
    await this.$current(address).setValue('asdfghjkl')
    //await browser.pause(5000);
}

/**
 * enter permenant address
 * @param {string} address
 */
async enterPermenantAddress(address) {
    await this.$current(address).setValue('zxcvbnm')
    //await browser.pause(5000);
}

/**
 * click submit button
 */

async submitButton() {
    await this.$submit().scrollIntoView({ block: 'center' });
    await this.$submit().click();
    //await browser.pause(5000);
}

async validateDetails(name) {
    await this.$validate(name).scrollIntoView({ block: 'center' });
    await browser.pause(2000);
}
}

export const textBoxPage = new TextBoxPage();