class PracticeForm{

    constructor()

    {

        this.$textBoxName=(title)=>$(`//ul[@class="menu-list"]//span[text()="${title}"]`);

        this.$practiceFormTitle=()=>$(`//div[@class="main-header"][text()="Practice Form"]`);

       this.$formHeading=()=>$(`//h5[text()="Student Registration Form"]`); //Student Registration Form Heading

        this.$nameFields=(name)=>$(`//label[contains(text(),'${name}')]/../..//input`)

        this.$lastName=()=>$(`//input[@id="lastName"]`)

        this.$gender=(gender)=>$(`//label[text()="${gender}"]`)

    }

    async clickOnPracticeFormNav(PracticeFormNavTitle){

        await this.$textBoxName(PracticeFormNavTitle).click()

        await browser.pause(3000);

       // await this.$practiceFormTitle().waitForDisplayed({setTimeout:30000})

    }

    async clickOnNameField(Names,email,sex,phoneNumber,date){

        await this.$nameFields("Name").setValue(Names)

        await this.$lastName("Name").setValue("Salu")

        await this.$nameFields("Email").setValue(email)

        await this.$gender(sex).click()

        await this.$nameFields("Mobile").setValue(phoneNumber)

        await this.$nameFields("Date").setValue(date)

        await browser.pause(3000);

    }

 

}

export const practiceformpage=new PracticeForm()