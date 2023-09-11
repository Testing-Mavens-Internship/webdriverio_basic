class TextBox{
    constructor(){
        this.$input = (name) => $(`//label[text()="${name}"]/ancestor::div[@class="mt-2 row"]//input`)
        this.$address = (value) => $(`//label[text()="${value}"]/ancestor::div[@class="mt-2 row"]//textarea`) 
        this.$submit = () => $('//div//button[text()="Submit"]')
        this.$details = (id) => $(`//div[contains(@class,"border col-md-12")]//p[text()="${id}"]`)
    }
/**
 * enter full name and verify
 * @param {string} fullName 
 */
    async clickOnFullName(fullName){
        await this.$input(fullName).scrollIntoView({block:"center"});
        await this.$input(fullName).setValue("Alen Salu")
        await this.$input(fullName).waitForDisplayed({timeout:10000})
    }
/**
 * enter email and verify
 * @param {string} email 
 */
    async clickOnEmail(email){
        await this.$input(email).scrollIntoView({block:"center"});
        await this.$input(email).setValue("a@gmail.com")
        await this.$input(email).waitForDisplayed({timeout:20000})
    }
    /**
     * enter current address and verify
     * @param {string} caddress 
     */
    async clickOnCurrentAdd(caddress){
        await this.$address(caddress).scrollIntoView({block:"center"});
        await this.$address(caddress).setValue("Kunnuvilayil, vayala P");
        await this.$address(caddress).waitForDisplayed({timeout:20000})
    }
/**
 * enter  permanent address and verify
 * @param {string} paddress 
 */
    async clickOnPermanentAdd(paddress){
        await this.$address(paddress).scrollIntoView({block:"center"});
        await this.$address(paddress).setValue("Kunnuvilayil, Vayala P");
        await this.$address(paddress).waitForDisplayed({timeout:10000})
    }
    /**
     * click on submit button and verify
     */

    async clickOnSubmit(){
        await this.$submit().scrollIntoView({block:"center"});
        await this.$submit().click();
        await this.$details("Alen Salu").waitForDisplayed({timeout:10000});
    }
    /**
     * verify whether the entered details is displayed
     * @param {string} value 
     */

    async outputValue(value){
        await this.$details(value).scrollIntoView({block:"center"});
    }
}

export const textBox = new TextBox()