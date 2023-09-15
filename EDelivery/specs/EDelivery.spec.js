import { homePage } from "../pageobjects/home-page.js"; 
import randomNumber from "random-number";
let number = randomNumber(9);
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

describe('My Login application', () => {
    it('should launch the url', async () => {
        await homePage.openUrl()
        await homePage.$header().waitForDisplayed({timeout:12000});
        expect(await homePage.$header().isDisplayed()).withContext('expect header is displayed ').toBe(true);
    })

    it('click on login and signup button and validate title', async () => {
        await homePage.loginApplication()
        //expect(await homePage.$validateTitle('Login').isDisplayed()).withContext('expect header is displayed ').toBe(true);
        //expect(await homePage.$continueButton('Register').isDisplayed()).withContext('expect header is displayed ').toBe(true);
    })

    it('Enter the details and click on continue button', async () => {
        await homePage.fillDetails(firstName,lastName,email,number)
        await homePage.$validateLoginText('Log In').waitForDisplayed({timeout:12000});
        expect(await homePage.$validateLoginText('Log In').isDisplayed()).withContext('expect login text is displayed ').toBe(true);
    })
})