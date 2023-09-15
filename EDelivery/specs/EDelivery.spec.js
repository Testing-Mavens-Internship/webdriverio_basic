import { landingPage } from "../page-objects/landing-page.js";
import { faker } from '@faker-js/faker';



let fname = faker.person.firstName(); 
let lname = faker.person.lastName();
let emailid=fname+"@gmail.com";
let ph = Math.floor(Math.random() * 9000000000) + 1000000000;

let firstName="first_name"
let lastName="last_name"
let email="email"
let phone="tel"



describe("EDelivery Application:",()=>{
    it("Launch the Website",async()=>{
        await landingPage.launchUrl()
        expect(await landingPage.$header().isDisplayed()).withContext("expect the website logo").toBe(true)
    })

    it("Click on the Login Button",async()=>{
        await landingPage.clickOnLoginButton()
        expect(await landingPage.$loginHeader("Login").isDisplayed()).withContext("expect the login header").toBe(true)
    })

    it("click on the sign up now button",async()=>{
        await landingPage.clickOnSignUpNow()
        expect(await landingPage.$signUpHeader().isDisplayed()).withContext("expect the Register header").toBe(true)
    })
    it("Fill the sign up fields",async()=>{
        await landingPage.fillSignUpField(firstName,lastName,email,phone,fname,lname,emailid,ph)
        expect(await landingPage.$VerificationMessageHeader().isDisplayed()).withContext("Expect the Verification message sent header").toBe(true)

    })
    it("click on the login button on message verification pop up",async()=>{
        await landingPage.clickLoginButton2()
    })

})