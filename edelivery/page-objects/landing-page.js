class LandingPage{
    constructor(){
        this.$loginButton=()=> $ (`//button[text()="Login "]`);
        this.$headerInPopUp=()=> $ (`//div[@class="pop_tle"]`);
        this.$signUpNowButton=()=> $ (`//div/a[@class="signup_btn"]`);
        this.$inputFields=(value)=>$ (`//input[@name="${value}"]`);
        this.$continueButton=()=>$(`//button[text()="Continue"]`);
    }
    /**
     * Method to  signup
     */
    async signUp(){
        await this.$loginButton().click();
        await this.$headerInPopUp().waitForDisplayed({ timeout :4000});
        await this.$signUpNowButton().click();
        await this.$headerInPopUp().waitForDisplayed({timeout:4000});
    }
    // async registration(){
    //     await 
    // }
}
export const landingPage=new LandingPage();