import Common from "./common.js";

class FormsPage extends Common{
    constructor(){
        super();
        this.$headerForms = () => $('//div[@class="pattern-backgound playgound-header"]//div[text()="Forms"]')
        this.$headerPracticeForms = () => $('//div[@class="pattern-backgound playgound-header"]//div[text()="Practice Form"]');
        this.$field = (value1,value2) => $(`//label[text()="${value1}"]/../following-sibling::div//input[contains(@id,"${value2}")]`)
        this.$date =() => $('//label[text()="Date of Birth"]/../following-sibling::div//input')
        this.$address = () => $('//label[text()="Current Address"]/../following-sibling::div//textarea[contains(@id,"Address")]')
        this.$gender = (value) => $(`//input[@name="gender"]/following-sibling::label[text()="${value}"]`)
        this.$checkBoxHobbie = () => $('//label[text()="Hobbies"]/../following-sibling::div//label[text()="Music"]')
        this.$submitButton = () => $('//button[text()="Submit"]');
        this.$stateAndCity = (value) => $(`//label[text()="State and City"]/../following-sibling::div//div[@id="${value}"]`)
        this.$resultRow = () => $(`//td[contains(text(),"${value}")]`)
        this.$resultHeader = () => $('//div[@class="modal-header"]//div')
        this.$clickDate =()=> $('//div[@id="dateOfBirth"]')
        this.$selectDate = () => $('//div[@aria-label="Choose Thursday, September 7th, 2023"]')


    }

    async clickOnFormTile(){
        await this.$tabTile("Forms").scrollIntoView();
        await this.$tabTile("Forms").click();
    }
    async clickOnPracticeForm(){
        await this.$tabButton("Practice Form").scrollIntoView();
        await this.$tabButton("Practice Form").click();
    }
    async fillForm(fname,lname,email,mobileNumber,subject){
        await this.$field("Name","first").scrollIntoView({block:'center'});
        await this.$field("Name","first").waitForClickable();
        await this.$field("Name","first").setValue(fname);
        await this.$field("Name","last").setValue(lname);
        await this.$field("Email","Email").setValue(email);
        await this.$gender("Female").scrollIntoView({block:'center'});
        await this.$gender("Female").waitForClickable();
        await this.$gender("Female").click();
        await this.$field("Mobile","Number").setValue(mobileNumber);
        await this.$clickDate().click();
        // await this.$selectDate().click();
        await this.$field("Subjects","subjects").setValue(subject);
        await this.$checkBoxHobbie().scrollIntoView({block:'center'});
        await this.$checkBoxHobbie().waitForClickable();
        await this.$checkBoxHobbie().click();
        await this.$address().setValue("Kayees Home, Kochi");
        await browser.keys(['Tab']);
        await browser.keys(["Tab"]);
        await browser.keys('Enter');
       

      //  await this.$submitButton().scrollIntoView({block:'center'});
      //  await this.$submitButton().waitForClickable({timeout:10000});
       // await this.$submitButton().click();
        
    }
    async resultFormClose(){
        await browser.keys(["Tab"]);
        await browser.keys('Enter');
        await browser.pause(3000);

    }
    

}
export const formPage = new FormsPage()
