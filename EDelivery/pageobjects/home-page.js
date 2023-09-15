import Common from "./common.js";
class HomePage extends Common {
  constructor() {
    super();
    this.$login = () => $(`//button[contains(text(),"Login")]`);
    this.$validateTitle = (text)=>$(`//div[contains(text(),"${text}")]`)
    this.$signUpNow = () =>$(`//div[@class="sgn_up_btn"]`)
    this.$continueButton = () =>$(`//button[@class="btn btn-default show-res-btn"][text()="Continue"]`)
    this.$enterFields = (text) =>$(`//input[@id="${text}"]`)
    this.$validateLoginText = ()=>$(`//a[contains(text(),"Log In")]`)
  }
  /**
   * Method for clicking login and sign up button
   */
  async loginApplication() {
    await this.$login().waitForClickable();
    await this.$login().click()
    await this.$signUpNow().waitForClickable();
    await this.$signUpNow().click()
 }
 /**
  * Method for entering the details and click on continue button
  * @param {string} firstName 
  * @param {string} lastName 
  * @param {string} email 
  * @param {string} number 
  */
 async fillDetails(firstName,lastName,email,number) {
 await this.$enterFields('first_name').setValue(firstName)
 await this.$enterFields('last_name').setValue(lastName)
 await this.$enterFields('email').setValue(email + "@gmail.com")
 await this.$enterFields('tel').setValue("9"+number)
 //await browser.pause(5000)
 await this.$continueButton('Continue').waitForClickable();
 await this.$continueButton("Continue").click();
 }
}
export const homePage = new HomePage();