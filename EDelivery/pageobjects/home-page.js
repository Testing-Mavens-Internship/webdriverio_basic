import Common from "./common.js";
class HomePage extends Common {
  constructor() {
    super();
    this.$login = () => $(`//button[contains(text(),"Login")]`);
    this.$loginTitle = () =>$(`//div[@class="pop_tle"]`)
    this.$signUpNow = () =>$(`//div[@class="sgn_up_btn"]`)
    this.$continueButton = () =>$(`//button[@class="btn btn-default show-res-btn"][text()="Continue"]`)
    this.$enterFields = (text) =>$(`//input[@id="${text}"]`)
    this.$loginButton = ()=>$(`//a[contains(text(),"Log In")]`)
    this.$registerTitle = ()=>$(`//div[contains(text(),"Register")]`)
    this.$verificationMessage = ()=>$(`//div[contains(text(),"Verification Message Sent")]`)
    this.$registerMessage = ()=>$(`//div[text()="Registered Successfully"]`)
    this.$hiText = ()=>$(`//span[contains(text(),"Hi")]`)
  }
  /**
   * Method for clicking login button
   */
  async loginApplication() {
    await this.$login().waitForDisplayed({timeout:7000});
    await this.$login().click()
  }
  /**
   * Method for clicking signupnow button
   */
  async signUpApplication(){
    await this.$signUpNow().waitForDisplayed({timeout:7000});
    //await this.$signUpNow().isClickable();
    await this.$signUpNow().click()
  }
 
 /**
  * Method for entering the details
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
 }
 /**
  * Method for clicking continue button
  */
 async clickOnContinue(){
await this.$continueButton().waitForDisplayed({timeout:3000});
await this.$continueButton().click();
 }
 /**
  * Method for clicking login button
  */
async clickOnLoginButton(){
  await this.$loginButton().waitForDisplayed({timeout:7000})
  await this.$loginButton().click()  
}
}
export const homePage = new HomePage();