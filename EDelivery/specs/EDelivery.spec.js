import { homePage } from "../pageobjects/home-page.js"; 
import randomNumber from "random-num";
let number = randomNumber(9000000000,9999999999);
import randomName from "random-name";
let firstName = randomName.first();
let lastName = randomName.last();
let email = randomName.first();
// import randomFirstName from 'random-name'
// import randomLastName from 'random-name'
// //import randomEmail from 'random-letters'
// import randomNumber from 'random-number'
// let firstName = randomFirstName();
// let lastName = randomLastName();
// let number = randomNumber();
// let email = randomFirstName();

xdescribe('My Login application', () => {
    it('should launch the url', async () => {
        await homePage.openUrl()
        await homePage.$header().waitForDisplayed({timeout:12000});
        expect(await homePage.$header().waitForDisplayed()).withContext('expect header is displayed ').toBe(true);
    })

    it('click on login button and validate title', async () => {
        await homePage.loginApplication()
        expect (await homePage.$loginTitle().waitForDisplayed()).withContext("expect login text is displayed").toBe(true);
    })

    it('click on signupnow button and validate title', async () => {
        await homePage.signUpApplication()
        expect (await homePage.$registerTitle().waitForDisplayed()).withContext("expect register text is displayed").toBe(true);
    })

    it('Enter the details', async () => {
        await homePage.fillDetails(firstName,lastName,email,number)
        expect(await homePage.$continueButton().waitForDisplayed()).withContext("expect continue button to be displayed").toBe(true);
    })

    it('click on continue button', async () => {
        await homePage.clickOnContinue()
        expect(await homePage.$verificationMessage().waitForDisplayed()).withContext("expect verification message to be displayed").toBe(true);
    })

    
    it('click on login button', async () => {
        await homePage.clickOnLoginButton()
        expect(await homePage.$registerMessage().waitForDisplayed()).withContext("expect register message to be displayed").toBe(true);
        expect(await homePage.$hiText().waitForDisplayed()).withContext("expect hi text to be displayed").toBe(true); 
    })


})