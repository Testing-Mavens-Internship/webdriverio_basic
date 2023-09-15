class PracticeForm {
    constructor() {
        this.$header = () => $(`//div[text()="Practice Form"]`);
        this.$inputField = (idValue) => $(`//input[@id="${idValue}"]`);
        this.$checkBoxField = (checkValue) => $(`//label[text()="${checkValue}"]/..`);
        this.$radioButtonField = (gender) => $(`//label[text()="${gender}"]`);
        this.$textAreaField = () => $(`//label[text()="Current Address"]/../following-sibling::div/textarea`);
        this.$autoCompleteSubject = () => $(`//div[@class="subjects-auto-complete__menu css-26l3qy-menu"]//div[@class="subjects-auto-complete__option subjects-auto-complete__option--is-focused css-1n7v3ny-option"]`)
        this.$clickStateOrCity = (value) => $(`//div[@id="${value}"]/div//following-sibling::div//div//input`);
        this.$stateCityField = (input) => $(`//div[@class=" css-26l3qy-menu"]//div[contains(text(),"${input}")]`);
        this.$submitButton = () => $(`//button[text()="Submit"]`);

        this.$outputHeader = () => $(`//div[contains(text(),"Thanks")]`);
    }

    /**
     * fill up form datas
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {string} email 
     * @param {string} gender 
     * @param {number} mobile 
     * @param {string} dob 
     * @param {string} subject 
     * @param {string} hobby 
     * @param {string} address 
     * @param {string} city 
     * @param {string} state 
     */
    async fillFormData(firstName, lastName,email, gender, mobile, dob, subject, hobby,address, city, state)
    {
        await this.$inputField('firstName').setValue(firstName);
        await this.$inputField('lastName').setValue(lastName);

        await this.$inputField('userEmail').setValue(email);

        await this.$radioButtonField(gender).scrollIntoView({ block : 'center'});
        await this.$radioButtonField(gender).waitForClickable({ timeout: 1000 });
        await this.$radioButtonField(gender).click();

        await this.$inputField('userNumber').scrollIntoView({ block : 'center'});
        await this.$inputField('userNumber').setValue(mobile);

        await this.$inputField('dateOfBirthInput').clearValue();
        await this.$inputField('dateOfBirthInput').setValue(dob);

        await this.$inputField('subjectsInput').scrollIntoView({ block : 'center'});
        await this.$inputField('subjectsInput').setValue(subject);
        await this.$autoCompleteSubject().click();

        await this.$checkBoxField(hobby).waitForClickable({ timeout: 2000 });
        await this.$checkBoxField(hobby).click();

        await this.$textAreaField().scrollIntoView({ block : 'center'});
        await this.$textAreaField().setValue(address);

        await this.$clickStateOrCity('state').scrollIntoView({ block : 'center'});
        await this.$clickStateOrCity('state').click();
        await this.$stateCityField(state).setValue(city);

        await this.$clickStateOrCity('city').scrollIntoView({ block : 'center'});
        await this.$clickStateOrCity('city').click();
        await this.$stateCityField(city).setValue(city);

        // await this.$submitButton().waitForClickable({ timeout: 2000 });
        // await this.$submitButton().click();

    }

}

export const practiceFormPage = new PracticeForm();