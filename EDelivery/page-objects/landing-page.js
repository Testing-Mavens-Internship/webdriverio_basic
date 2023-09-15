    import Common from "./common.js";

    class LandingPage extends Common{
        constructor(){
            super(); 
            this.$header=()=>$(`//img[@class="img-responsive"]`)     // website logo
            this.$loginButton=()=>$(`//button[@class="btn btn-default ng-binding"]`) //login button
            this.$loginHeader=(value)=>$(`//div[contains(text(),"${value}")]`) //login header
            this.$signUpHeader=()=>$(`//div[@class="pop_tle"]`) //signUp header
            this.$signUpNowButton=()=>$(`//div[@class="sgn_up_btn"]`) //sign up now button
            this.$signUpFields=(input)=>$(`//input[@id="${input}"]`)
            this.$VerificationMessageHeader=()=>$(`//div[@class="pop_tle ng-binding"]`)
            this.$loginButton2=()=>$(`//div[@class="subm_btn"]`)
        }/**
         * function for click on login button
         */
        async clickOnLoginButton(){
        await  this.$loginButton().click()
        await browser.pause(3000)
        }
        /**
         * function for clicking the sign uo now button
         */
        async clickOnSignUpNow(){
            await this.$signUpNowButton().click()
            await this.$signUpNowButton().waitForDisplayed({timeout:5000});
        }

        async fillSignUpField(firstName,lastName,email,phone,fname,lname,emailid,ph){
            await this.$signUpFields(firstName).setValue(fname)
            await this.$signUpFields(lastName).setValue(lname)
            await this.$signUpFields(email).setValue(emailid)
            await this.$signUpFields(phone).setValue(ph)
        }

        async clickLoginButton2()
        {
            await this.$loginButton2().click()
            //await this.$loginButton2().waitForDisplayed({timeout:5000});
            await browser.pause(3000)
        }
    }
    export const landingPage=new LandingPage()