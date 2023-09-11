class TextBoxPage {
    constructor() {
        this.$menuHeader = () => $(`//div[text()="Text Box"]`);
        this.$inputField = (inputItem) => $(`//label[text()="${inputItem}"]/../..//input`);
        this.$textAreaField = (textAreaItem) => $(`//label[text()="${textAreaItem}"]/../..//textarea`);
        this.$submitButton = () => $(`//button[text()="Submit"]`);
        this.$outputValue = (outputDisplay) => $(`//div[@id='output']//p[text()="${outputDisplay}"]`);
        this.$output = () => $(`//div[@id='output']`);
    }

    /**
     * Fill form with data
     * @param {string} fullName 
     * @param {string} emailId 
     * @param {string} currentAddress 
     * @param {string} permanentAddress 
     */
    async fillForm(fullName, emailId, currentAddress, permanentAddress) {
        await this.$inputField("Full Name").setValue(fullName);
        await this.$inputField("Email").setValue(emailId);
        await this.$textAreaField("Current Address").setValue(currentAddress);
        await this.$textAreaField("Permanent Address").setValue(permanentAddress);
        await this.$submitButton().scrollIntoView({ block: 'center' });
        await this.$submitButton().click();
        await this.$output().waitForDisplayed({ timeout: 2000 })
    }


}

export const textBoxPage = new TextBoxPage();