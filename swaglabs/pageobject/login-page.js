import LoginPage from "./common.js";

class Login extends LoginPage{
    constructor(){
        super();
      this.$input =(value)=>$(`//input[@name="${value}"]`);
      this.$clickButton=()=>$('//input[@type="submit"]');
      this.$headerTitle = () => $("//div[@class='login_logo']");  
      this.$header=()=>$('//div[@class="app_logo"]') ;
    }
    /**
     * for the login 
     */
    async login(){
        await this.$input('user-name').setValue('standard_user');
        await this.$input('password').setValue('secret_sauce');
        await this.$clickButton().click();
        await browser.pause(2000);
    }
}
export const landing=new Login();