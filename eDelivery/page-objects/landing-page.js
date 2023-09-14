import Common from "./Common.js";

class LandingPage extends Common{
constructor(){
    super();
    this.$loginButton=()=>$('//button[text()="Login "]')
    this.$logoValidation=()=>$('//div[@class="pop_tle"]')
    this.$signUpButton=()=>$('//a[@class="signup_btn"]')
    this.$registerValidation=()=>$('//div[@class="pop_tle"]')
    this.$category=()=>$('//p[text()="Grocery"]/..//input[@class="ng-pristine ng-untouched ng-valid ng-not-empty"]')
    this.$deliverylocation=()=>$('//input[@id="searchlocation"]')
    this.$place=()=>$('(//span[contains(text(),"Che")])[1]')
    this.$showBusinessButton=()=>$('//span[text()="SHOW BUSINESS"]')
    this.$validationIcon=()=>$('//h3[text()="Jio mart"]')
}

async register(){
    await this.$loginButton().waitForDisplayed({timeout:2000});
    await this.$loginButton().click()
    await this.$logoValidation().waitForDisplayed({timeout:2000})
    await this.$signUpButton().click();
    await this.$registerValidation().waitForDisplayed({timeout:2000})
}
async selectCategoryAndLocation(){
    await this.$category().waitForDisplayed({timeout:6000})
    await this.$category().waitForClickable({timeout:6000})
    await this.$category().click()
    await this.$deliverylocation().scrollIntoView()
    await this.$deliverylocation().setValue("Chen")
    await this.$place().click()
    await this.$showBusinessButton().click()
    await this.$validationIcon().waitForDisplayed({timeout:3000})
}
}

export const landingPage = new LandingPage()