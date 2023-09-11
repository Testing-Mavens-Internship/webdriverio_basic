class FormsPage {
    constructor() {
        this.$header = () => $('div.main-header', 'Forms');
        //this.$menuListElement = (name) => $(`//ul[@class="menu-list"]//span[text()="${name}"]`);
        this.$headerForm = () => $('div.main-header', 'Forms');
        this.$menuElement = () => $('//span[text()="Practice Form');
        this.$form=(a,b)=>$(`//label[text()="${a}"]/../..//input[@id="${b}"]`)
        this.$gender=(a,b)=>$(`//div[text()="${a}"]/..//label[text()="${b}"]`)
        this.$hobbies=(a,b)=>$(`//label[text()="${a}"]/../..//label[text()="${b}"]`)
        this.$currentAddress=()=>$('//label[text()="Current Address"]/../..//textarea')
        this.$subjectClick=()=>$('id="subjectsContainer"')
        this.$subjectInput=()=>$('//div[@id="subjectsContainer"]//input[@id="subjectsInput"]')
        this.$subjectSelect=()=>$('//div[@class="subjects-auto-complete__menu css-26l3qy-menu"]//div[@class="subjects-auto-complete__menu-list subjects-auto-complete__menu-list--is-multi css-11unzgr"]//div[@id="react-select-2-option-0"]')
        this.$$state=()=>$$(".//*[@id='Select State']/form/select[1]/option[3]")
    }

    /**
     *Click on an element from menu list
     * @param {locater} menuListElementInPage 
     */
    async clickOnPracticeForm(menuListElementInPage) {
        await this.$menuElement(menuListElementInPage).scrollIntoView({block: 'center'});
        await this.$menuElement(menuListElementInPage).click();

       await browser.pause(5000);
 
        
    }
    async fillForm(nameFirst,nameLast,email,mobileNumber,dob){
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
      await this.$subjectSelect().click();
      await browser.pause(2000);
// let text=[]
// text=  await this.$$subjectSelect().map(item => item.getText())
// await this.$$subjectSelect().click(text[1])

   
      

    }
    async currentAddress(){
        let address = "Street City State Country"
        await this.$currentAddress().setValue(address);
        await browser.pause(2000);
    }
}

// module.exports=

// {

//     formsPage :new FormsPage()

// }

export const formsPage = new FormsPage()