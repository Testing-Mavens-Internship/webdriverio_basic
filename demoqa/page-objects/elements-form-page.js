class ElementsPage{
    constructor(){
        this.$header = (title="Elements") => $('div.main-header', `${title}`); 
        this.$subList = (subListName)=>$(`//span[text()="${subListName}"]`);
        this.$list = (list)=>$(`//div[text()="${list}"]`)
        this.$verify = (params) => $(`//div[@id="result"]//span[text()="${params}"]`)
        
        this.$inputFields = (input) => $(`//input[@id="${input}"]`)
        this.$nameFields=(name)=>$(`//label[contains(text(),'${name}')]/../..//input`)
        this.textarea = ()=>$('//textarea')
        this.$clickDateOfBirth=()=>$(`//div[@class="react-datepicker__input-container"]//input`);

        this.$selectDateOfBirth=()=>$(`//div[@aria-label="Choose Thursday, August 31st, 2023"]`)
        this.enterSub= ()=>$('//div[@class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3"]')
        this.$subjects = (sub)=>$(`//div[@class="subjects-auto-complete__menu-list subjects-auto-complete__menu-list--is-multi css-11unzgr"]//div[text()="${sub}"]`)
    }
    async clickOnFormSection(){
        await this.$list("Forms").click()
        await this.$subList("Practice Form").click()
        await this.$header("Practice Form").waitForDisplayed({timeout:20000})
    }
    async enterDetails(){
        await this.$inputFields("firstName").setValue("Joyal")
        await this.$inputFields("lastName").setValue("Francis")
        await this.$inputFields("userEmail").setValue("joyalfrancis23@gmail.com")
        await this.$inputFields("userNumber").setValue("9633686574")
        await this.textarea().setValue("25/1461 Thekkeveetil House, Fortkochi")
    }
    async enterSubject(){
        await this.enterSub().setValue("H")
        await this.$subjects("Hindi").click()
    }
    async enterDOB(){

        await this.$selectDateOfBirth().click();
    }
}

module.exports = new ElementsPage()