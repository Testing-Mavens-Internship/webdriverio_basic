import CommonPage from "./common-page.js";

class FillFormPage extends CommonPage{
    constructor(){
        super();
        this.$fillDetails = (detail) => $(`//div[@class="checkout_info"]//input[@name="${detail}"]`)
        this.$continue = () => $('//input[@value="Continue"]')
    }
    /**
     * setiing vallues in the fields
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {Number} postalCode 
     */
    async fillDetails(firstName,lastName,postalCode){
        await this.$fillDetails("firstName").setValue(firstName);
        await this.$fillDetails("lastName").setValue(lastName);
        await this.$fillDetails("postalCode").setValue(postalCode);
        await this.$continue().click();
    }
}

export const fillForm = new FillFormPage()