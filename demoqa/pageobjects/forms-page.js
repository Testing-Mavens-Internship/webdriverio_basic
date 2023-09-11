class FormsPage {
    constructor() {
        this.$header = () => $('//div[text()="Forms" and @class="main-header"]')
        this.$praticeFormButton = () => $('//span[text()="Practice Form"]')
        this.$praticeFormHeader= () => $('//div[text()="Practice Form"]')
        this.$enterName =(name) => $(`//input[@ placeholder="${name}" ]`)
        this.$enterDetail = (details) => $(`//label[text()="${details}"]/../following-sibling::div/input`)
        this.$genderRadio = (value) => $(`//label[text()="${value}"]`)
        this.$month = (value) => $(`//select[@class="react-datepicker__month-select"]//option[text()="${value}"]`)
        this.$year = (value) =>$(`//select[@class="react-datepicker__year-select"]//option[text()="${value}"]`)  
        this.$day = (value) =>$(`//div[contains(@aria-label,"{value}")]`) 
        this.$subject = () => $('//div[@class="subjects-auto-complete__input"]//input')
        this.$address = () => $('//div[@class="mt-2 row"]//textarea')
        this.$hobbies = (radio) => $(`//label[contains(text(),"${radio}")]`)
        this.$toggle = (value) => $(`//div[contains(text(),"${value}")]/../following-sibling::div`)
        this.$stateAndCity = (value) => $(`//div[@class=" css-11unzgr"]//div[text()="${value}"]`)
    }

    async clickOnPraticeForm() {
        await this.$praticeFormButton().isClickable();
        await this.$praticeFormButton().click();
        await this.$praticeFormHeader().waitForDisplayed({timeout:20000});
    }

    async enterName(fname,lname){
        //await this.$enterName("First Name").click();
        await this.$enterName("First Name").setValue(fname);
        //await this.$enterName("Last Name").click();
        await this.$enterName("Last Name").setValue(lname);
    }

    async enterEmailMobile(email,mobile){
        await this.$enterDetail("Email").setValue(email);
        await this.$enterDetail("Mobile").setValue(mobile);
    }

    async gender(value){
        await this.$genderRadio(value).isClickable();
        await this.$genderRadio(value).click();
    }
    // async date(value){
    //     // await $('//input[@class="form-control react-datepicker-ignore-onclickoutside/.."]').isClickable();
    //     // await $('//input[@class="form-control react-datepicker-ignore-onclickoutside/.."]').click();
    //     await this.$month("June").setValue(value);
    // }

    async subject(){
        await this.$subject().setValue("hai");
    }

    async address(){
        await this.$address().setValue("akkarakattil (h) p.o vallachira ");
    }

    async hobbies(radio){
        await this.$hobbies(radio).isClickable();
        await this.$hobbies(radio).click();
    }

    async state(value,value1){
        await this.$toggle(value).scrollIntoView({ block: 'center', inline: 'center' });
        await this.$toggle(value).click();
        await this.$stateAndCity(value1).click();
    }
}
export const formsPage= new FormsPage();