class FormsPage{
    constructor(){
        this.$formsHeader=()=>$(`//div[@class="main-header"][text()="Forms"]`);
        this.$formsTitle=()=>$(`//div[@class="header-text"][text()="Forms"]`);
        this.$practiceFormTitle=()=>$(`//span[text()="Practice Form"]`);
        this.$practiceFormHeader=()=>$(`//div[text()="Practice Form"]`);
        this.$enterfields=(value)=>$(`//label[contains(text(),"${value}")]/../..//input`);
        this.$enterLastName=()=>$(`//input[@id="lastName"]`);
        this.$selectGender=(gender)=>$(`//label[text()="${gender}"]`)
        this.$selectHobbies=(hobbies)=>$(`//label[text()="${hobbies}"]`)
        this.$submitButton=()=>$(`//button[text()="Submit"]`)


    }
    async clickOnPracticeFormTitle() {
        await this.$practiceFormTitle().scrollIntoView({block: 'center'});
        await this.$practiceFormTitle().click();
        await formsPage.$practiceFormHeader().waitForDisplayed({setTimeout:20000});
        
     }
     async enterdetails(name,email,gender,mobileNumber,dateOfBirth,hobbies){
        await this.$enterfields('Name').setValue(name)
        await this.$enterLastName('Name').setValue("Babu")
        await this.$enterfields('Email').setValue(email)
        await this.$selectGender(gender).click()
        await this.$enterfields('Mobile').setValue(mobileNumber)
        await this.$enterfields('Date of Birth').setValue(dateOfBirth)
        await this.$selectHobbies(hobbies).click()
        await this.$submitButton().scrollIntoView({block: 'center'});
        await this.$submitButton().waitForClickable();
        await browser.pause(3000);

     }
     async clickOnSubmitButton(){
        await this.$submitButton().click();
    
        
     }
     
}
export const formsPage = new FormsPage()
