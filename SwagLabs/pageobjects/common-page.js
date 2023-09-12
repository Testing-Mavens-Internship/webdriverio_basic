export default class CommonPage {
    //locator
    constructor(){
  
      this.$header = () => $(`//div[text()="Swag Labs"]`);
      this.$enterUserName=()=>$(`#user-name`);
      this.$enterPassword=()=>$(`#password`);
      this.$loginButton=()=>$(`//input[@class="submit-button btn_action"]`);
      this.$productTitle=(title)=>$(`//span[text()="${title}"]`)
      this.$thankYouTitle=()=>$(`//h2[text()="Thank you for your order!"]`);
      

   }
   async openUrl() {
    await browser.url('https://www.saucedemo.com/');
    await browser.maximizeWindow();
    await this.$header().waitForDisplayed({setTimeout:20000});
 }
 async loginApplication(){
    await this.$enterUserName().setValue('standard_user');
    await this.$enterPassword().setValue('secret_sauce');
    await this.$loginButton().click()
 }
 

}

