import {landingPage} from "../pageobjects/landing-page.js"
import {elementsPage} from "../pageobjects/elements-page.js"
import { textBoxPage } from "../pageobjects/textbox-page.js";
// const {landingPage} = require("../pageobjects/landing-page.js")


xdescribe("Demoqa Application Text Box Automation",() => {
    it("load the demo qa url",async() => {
        await landingPage.openUrl();
        expect(await landingPage.$header().isDisplayed()).withContext("expect header to be displayed").toBe(true);
    });

    it ("Click on the element tile and verify the navigation",async () =>{
        await landingPage.clickOnTile("Elements");
        expect(await elementsPage.$header()).withContext("Expect header to be displayed").toBeDisplayed()
    });

    it("Click on the TextBox tile ",async () =>{
        await elementsPage.clickOnList("Text Box");
        expect(await textBoxPage.$header()).withContext("Expect header to be displayed").toBeDisplayed()
    });

    it("Enter Full Name",async () =>{
        await textBoxPage.enterName("Full Name");
        expect(await textBoxPage.$input("Full Name").getValue()).withContext("Expect input to be displayed").toBe("Vaishnav S")
    });


    it("Enter email",async () => {
        await textBoxPage.enterEmail("Email");
        expect(await textBoxPage.$input("Email").getValue())
        .withContext("Expect Email to be displayed")
        .toBe('vaishnav@gmail.com');
      });
    
      it("Enter current address",async () => {
        await textBoxPage.enterCurrentAddress("Current Address");    
        expect(await textBoxPage.$current("Current Address").getValue())    
        .withContext("Expect current address to be displayed")    
        .toBe("asdfghjkl");    
      });
    
      it("Enter permenant address",async () => {    
        await textBoxPage.enterPermenantAddress("Permanent Address");    
        expect(await textBoxPage.$current("Permanent Address").getValue())    
        .withContext("Expect permenant address to be displayed")    
        .toBe("zxcvbnm");   
      });
    
      it("CLick on submit button",async () => {
        await textBoxPage.submitButton();


    expect(await textBoxPage.$validate("Vaishnav S").getText()).withContext("Expect value  to be displayed").toContain("Vaishnav S")
    expect(await textBoxPage.$validate("vaishnav@gmail.com").getText()).withContext("Expect value  to be displayed").toContain("vaishnav@gmail.com")
    expect(await textBoxPage.$validate("asdfghjkl").getText()).withContext("Expect value  to be displayed").toContain("asdfghjkl")
    expect(await textBoxPage.$validate("zxcvbnm").getText()).withContext("Expect value  to be displayed").toContain("zxcvbnm")

  });
})
