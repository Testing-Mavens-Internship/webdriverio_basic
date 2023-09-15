import { landingPage } from "../page-objects/landing-page.js";

import { faker } from '@faker-js/faker';

let firstName = faker.person.firstName();
let lastName = faker.person.lastName();
let email = firstName +'@gmail.com' ;   //---------- faker.internet.email();-----//
let phone = "9" + Math.floor(Math.random() * 900000000) + 100000000;


describe("E-Delivery Application automation", () => {
    it("Load the E-Delivery url", async () => {
      await landingPage.openUrl();
      expect(await landingPage.$logo().isDisplayed())
        .withContext("Expect Logo to be displayed")
        .toBe(true);
    });

    it("Click On Login", async() => {
        await landingPage.clickOnLogin();
        expect(await landingPage.$popup('Login').isDisplayed())
        .withContext("Expect Login Popup to be displayed")
        .toBe(true);
    });

    it("Click On Sign Up Now", async() => {
        await landingPage.clickOnSignUp();
        expect(await landingPage.$popup('Register').isDisplayed())
        .withContext("Expect Register Popup to be displayed")
        .toBe(true);
    });

    it("Fill Up Register Details", async() => {
        await landingPage.fillUpRegister(firstName, lastName, email, phone);
        firstName = landingPage.$inputField('First Name').getText();

        expect(await landingPage.$popup('Verification Message Sent').isDisplayed())
        .withContext('Expect verification popup to be displayed')
        .toBe(true);
    });

    it("Click On Login Button", async() =>{
        await landingPage.clickOnLogin();

        expect(await landingPage.$toastMessage('Registered Successfully').isDisplayed())
        .withContext('Expect success message to be displayed')
        .toBe(true);
    })
});
