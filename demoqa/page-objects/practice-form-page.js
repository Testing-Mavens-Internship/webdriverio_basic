class PracticeFormPage{
    constructor(){
        this.$pageHeader = () => $('div.main-header', 'Forms');
        this.$practiceFormTab = () => $('//span[text()="Practice Form"]');
        this.$header = (header) => $(`//div[text()="${header}"]`);
        this.$form=(a,b)=>$(`//label[text()="${a}"]/../..//input[@id="${b}"]`)
        this.$gender=(a,b)=>$(`//div[text()="${a}"]/..//label[text()="${b}"]`)

        this.$hobbies=(a,b)=>$(`//label[text()="${a}"]/../..//label[text()="${b}"]`)

        this.$currentAddress=()=>$('//label[text()="Current Address"]/../..//textarea')

        this.$subjectClick=()=>$('id="subjectsContainer"')
    }
    async practiceFormTile(){
        await this.$practiceFormTab().click();
        await browser.pause(1500);
    }

     async fillFormField(nameFirst,nameLast,email,mobileNumber,dob){

        await this.$form("Name","firstName").setValue(nameFirst);

        await this.$form("Name","lastName").setValue(nameLast);

        await this.$form("Email","userEmail").setValue(email);

        await this.$form("Mobile","userNumber").setValue(mobileNumber);

      // await this.$form("Date of Birth","dateOfBirthInput").setValue(dob);

   

        await browser.pause(2000);

       

       

     

    }

    async click() {

        await browser.pause(2000);

        await this.$gender("Gender","Male").isClickable();
       await this.$gender("Gender","Male").click();
       await this.$hobbies("Hobbies","Sports").isClickable();     
       await this.$hobbies("Hobbies","Sports").click();
       //await this.$form("State and City",).click();
      await browser.pause(1000);
      await browser.pause(1000);
      await this.$subjectInput().setValue("Hi")
      await this.$subjectSelect().isClickable();
      await this.$subjectSelect().click();
      await browser.pause(2000);
    }

    async currentAddress(){

        let address = "Street City State Country"

        await this.$currentAddress().setValue(address);

        await browser.pause(2000);

    }
}

export const practiceForm = new PracticeFormPage()