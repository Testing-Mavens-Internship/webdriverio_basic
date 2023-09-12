import { launchPage } from "../pageobjects/landing-page.js";
import { elementPage }  from "../pageobjects/01-element-page.js";
import { textBox } from "../pageobjects/text-box-page.js";

// const {launchPage} = require('../pageobjects/landing-page')
// const {elementPage} = require('../pageobjects/element-page')


xdescribe('demoqa website text box validation', () => {
    it("launch the demoqa url",async () => {
        await launchPage.openUrl();
        expect(await launchPage.$logo().isDisplayed()).withContext("Expect header to be displayed").toBe(true);
    });

    it("click on the element tile", async () => {
        await launchPage.clickOnTile("Elements");
        expect(await elementPage.$header().isDisplayed()).withContext("Expect the element page to load").toBe(true);

    });
    it("click on text box", async() => {
        await elementPage.clickOnTextBox();
        expect(await elementPage.$headerTextBox().isDisplayed()).withContext("Expect header to be displayed").toBe(true);
    })

    it("Enter input in full name field", async() => {
        await textBox.clickOnFullName("Full Name");

        expect(await textBox.$input("Full Name").isDisplayed()).withContext("Expect input to be displayed").toBe(true);
    })

    it("Enter input in email field", async() => {
        await textBox.clickOnEmail("Email");
        expect(await textBox.$input("Email").isDisplayed()).withContext("Expect input to be displayed").toBe(true);
    })
    it("Enter input in current address field", async() => {
        await textBox.clickOnCurrentAdd("Current Address");
        expect(await textBox.$address("Current Address").isDisplayed()).withContext("Expect input to be displayed").toBe(true);
    })
    it("Enter input in permanent address field", async() => {
        await textBox.clickOnPermanentAdd("Permanent Address");
        expect(await textBox.$address("Permanent Address").isDisplayed()).withContext("Expect input to be displayed").toBe(true);
    })
    it("click on submit button", async() => {
        await textBox.clickOnSubmit();
        expect(await textBox.$submit().isDisplayed()).withContext("Expect all input to be displayed").toBe(true);
    })
    it("Details of the entered input", async() => {
        expect(await textBox.$details("Aparna Udayan").isDisplayed()).withContext("Expect name field to be displayed").toBe(true);
        expect(await textBox.$details("aparnaudayan@gmail.com").isDisplayed()).withContext("Expect email field to be displayed").toBe(true);
        expect(await textBox.$details("Kunnuvilayil, vayala Pathanmthitta").isDisplayed()).withContext("Expect current address field to be displayed").toBe(true);
        expect(await textBox.$details("Kunnuvilayil, Vayala Pathanmthitta").isDisplayed()).withContext("Expect permanenet address field to be displayed").toBe(true);

    })
});


