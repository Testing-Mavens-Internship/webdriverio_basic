class PracticeForm{
    constructor()
    {
        this.$textBoxName=(title)=>$(`//ul[@class="menu-list"]//span[text()="${title}"]`);
        this.$practiceFormTitle=()=>$(`//div[@class="main-header"][text()="Practice Form"]`);
       this.$formHeading=()=>$(`//h5[text()="Student Registration Form"]`); //Student Registration Form Heading
        this.$nameFields=(name)=>$(`//label[contains(text(),'${name}')]/../..//input`)
        this.$lastName=()=>$(`//input[@id="lastName"]`)
        this.$gender=(gender)=>$(`//label[text()="${gender}"]`)
        this.$hobbies=(hobbie)=>$(`//label[text()="${hobbie}"]`)
        this.$clickDateOfBirth=()=>$(`//div[@class="react-datepicker__input-container"]//input`);
        this.$selectDateOfBirth=()=>$(`//div[@aria-label="Choose Thursday, August 31st, 2023"]`)
        //this.$subjectDropDown=(subject)=>$(`//div[text()="${subject}"]/../..`)
      // this.$uploadFile=()=>$(`//input[@id="uploadPicture"]`)
        this.$subjectDropDown=()=>$(`//div[@class="subjects-auto-complete__menu-list subjects-auto-complete__menu-list--is-multi css-11unzgr"]`)
    }
    async clickOnPracticeFormNav(PracticeFormNavTitle){
        await this.$textBoxName(PracticeFormNavTitle).click()
        await browser.pause(3000);
       // await this.$practiceFormTitle().waitForDisplayed({setTimeout:30000})
    }
    async clickOnNameField(Names,email,sex,phoneNumber,date,subject,hobbie){
        await this.$nameFields("Name").setValue(Names)
        await this.$lastName("Name").setValue("Somaraj")
        await this.$nameFields("Email").setValue(email)
        await this.$gender(sex).click()
        await this.$nameFields("Mobile").setValue(phoneNumber)
        await this.$clickDateOfBirth().click();
        await this.$selectDateOfBirth().click();
      //  await this.$nameFields("Date").setValue(date)
     //   await this.$hobbies(hobbie).scrollIntoView({block:'center'});
        await this.$nameFields("Subjects").setValue(subject)
       await this.$subjectDropDown().click()
       await this.$hobbies(hobbie).click()
     //  await this.$uploadFile().sendKeys(`c:\Users\adhit\Downloads\d3_adb_13_9_2023 16_57_21.json`)
    //    const filePath = join(__dirname, 'c:\Users\adhit\Downloads\d3_adb_13_9_2023 16_57_21.json');
    // await this.$uploadFile.uploadFile(filePath)
        await browser.pause(5000);
    }

}
export const practiceformpage=new PracticeForm()