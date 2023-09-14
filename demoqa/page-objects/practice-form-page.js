class PracticeFormPage{
    constructor(){
        this.$pageHeader = () => $('div.main-header', 'Forms');
        this.$practiceFormTab = () => $('//span[text()="Practice Form"]');
        this.$header = (header) => $(`//div[text()="${header}"]`);
        this.$fillForm = (fill) => $(`//input[@id="${fill}"]`);
        this.$genderAndHobbies = (options) => $(`//label[text()="${options}"]`)
        this.$currentAddress = (address) => $(`//textarea[@placeholder="${address}]`)
        }
    async practiceFormTile(){
        await this.$practiceFormTab().click();
        await browser.pause(1500);
    }

    async fillFormfield(fName,lName,email,gender,mobile,subject,hobbies,address){
        await this.$fillForm("firstName").setValue(fName);
        await this.$fillForm("lastName").setValue(lName);
        await this.$fillForm("userEmail").setValue(email);
        await this.$genderAndHobbies(gender).click();
        await this.$fillForm("userNumber").setValue(mobile);
        await this.$fillForm("subjectsInput").setValue(subject);
        //await this.$fillForm("Hobbies").setValue(hobbies);
        await this.$currentAddress("Current Address").setValue(address);
        await browser.pause(2000);
        //await this.$submitButton().click();
    }
}

export const practiceForm = new PracticeFormPage()