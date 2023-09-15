import { loginId } from "../page-objects/login-page.js";
import { homePage } from "../page-objects/home-page.js";

let mobileNumber =  Math.floor(Math.random()*1000000000)
import randomName from "random-name";
let firstName = randomName.first();
let lastName = randomName.last();

describe('Edelivery website automation', () => {

    it('launch the url', async () =>{
        await loginId.openUrl();
        await loginId.$logo().waitForDisplayed({timeout:2000});
        await loginId.$loginButton().waitForClickable(20000)
        expect(await loginId.$logo().isDisplayed()).withContext('Expect the edeliver logo to be displayed').toBe(true);
    })

    it('click on the login and sign up button to enter the credentials', async() => {
        await browser.pause(3000);
        await loginId.clickOnSignUp();
        expect(await loginId.$registerHeader().isDisplayed()).withContext('Expect the register header to be displayed').toBe(true);
    })

    it('enter the credentials in the signup fields', async () => {
        await loginId.fillForm(firstName,lastName,mobileNumber);
        expect(await loginId.$loginTab().isDisplayed()).withContext('Expect Login button to be displayed').toBe(true);
    })

    it('click on the login button in the otp page', async () => {
        await loginId.login();
        expect(await loginId.$successfullMessage().isDisplayed()).withContext('Expect success message to be displayed').toBe(true);
        expect(await homePage.$userName(firstName).isDisplayed()).withContext('Expect the user name to be displayed');
      await browser.pause(5000);
        await homePage.$shop().waitForDisplayed({timeout:40000});
        await homePage.$shop().waitForClickable(40000);
        
    })

    it('Select a shop and and click on the location ', async() => {
        await homePage.clickOnShop();
    })
})