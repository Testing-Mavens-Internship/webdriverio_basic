    import Common from "./common.js";

    class LandingPage extends Common{
        constructor(){
            super(); 
            
            this.$loginButton=()=>$(`//button[text()="Login "]`) //login button
            this.$loginHeader=(value)=>$(`//div[contains(text(),"${value}")]`) //login header
            this.$signUpHeader=()=>$(`//div[@class="pop_tle"]`) //signUp header
            this.$signUpNowButton=()=>$(`//div[@class="sgn_up_btn"]`) //sign up now button
            this.$signUpFields=(input)=>$(`//input[@id="${input}"]`)
            this.$VerificationMessageHeader=()=>$(`//div[@class="pop_tle ng-binding"]`) // verification message header
            this.$loginButton2=()=>$(`//div[@class="subm_btn"]`) // login button 2
            this.$continueButton=()=>$(`//button[@class="btn btn-default show-res-btn"]`) // continue button
            this.$successfullyRegistedMessage=()=>$(`$successfullyRegistedMessage`) // successfully registred meessage
            this.$successMessageClose=()=>$(`//button[@class="toast-close-button ng-scope"]`) //close success message
            this.$userName=(name)=>$(`//span[text()="Hi ${name}"]`) // user name on menu bar
            this.$searchLocation=()=>$(`//input[@placeholder="Type delivery location"]`)
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
            await this.$signUpHeader().waitForDisplayed({timeout:5000});
        }

        async fillSignUpField(firstName,lastName,email,phone,fname,lname,emailid,ph){
            await this.$signUpFields(firstName).setValue(fname)
            await this.$signUpFields(lastName).setValue(lname)
            await this.$signUpFields(email).setValue(emailid)
            await this.$signUpFields(phone).setValue(ph)
            await this.$continueButton().click()
            await this.$signUpHeader().waitForDisplayed({timeout:5000})
            await this.$VerificationMessageHeader().waitForDisplayed({timeout:5000});
            //await this.$continueButton().waitForDisplayed({timeout:5000});
        
        }


        async clickLoginButton2()
        {
            await this.$loginButton2().click()
            await this.$successMessageClose().click()
            await this.$VerificationMessageHeader().waitForDisplayed({timeout:5000});
            
        }
        async clickOnSearchLocation(){
            await this.$searchLocation("Type delivery location").setValue("Chennai")
            await browser.pause(3000)
        }
    }
    export const landingPage=new LandingPage()