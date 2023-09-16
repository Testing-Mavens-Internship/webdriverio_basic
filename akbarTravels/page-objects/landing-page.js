import Common from "./Common.js";
let fromPlace="Cochin"
let toPlace="Bangalore"
class LandingPage extends Common{
constructor(){
    super();
    this.$radioButton=()=>$('//div[text()="One Way"]/../div/div[@class="mat-radio-outer-circle"]')
    this.$inputPlace=(name)=>$(`//label[text()="FROM"]/ancestor::div//input[@placeholder="${name}"]`)
    this.$selection=(name)=>$(`//div[@class="search-list"]/ul//h3[text()="${name}"]`)
}

async toAndFromPlace(){
    await this.$radioButton().waitForDisplayed({timeout:10000})
await this.$radioButton().click()
await this.$inputPlace("From").setValue("Coc")
await this.$inputPlace("To").setValue("Banga")
}
}
export const landingPage =new LandingPage()