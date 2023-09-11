import { elementsPage } from "../pageobjects/elements-page.js";
import { formsPage } from "../pageobjects/forms-page.js";
import { landingPage } from "../pageobjects/landing-page.js"
import {radioButtonPage} from "../pageobjects/radio-button.js"

let fname="Vaishnav";
let lname="s";
let email = "vsn@gmail.com";
let mobile = 1234567890;
let month = "June";

xdescribe("Demoqa application radio button automation ", () => {
    

    it("load the demoqa url",async() =>{
        await landingPage.openUrl();
        expect (await landingPage.$header().isDisplayed()).withContext("expect the page to load").toBe(true);
    });

    it("Click on Forms tile",async() => {
        await landingPage.clickOnFormsTile("Forms");
        expect (await formsPage.$header().isDisplayed()).withContext("expect the element button header to be displayed").toBe(true);
    });         

    it("Click on Pratice Form tile", async () => {
        await formsPage.clickOnPraticeForm();
        expect (await formsPage.$praticeFormHeader().isDisplayed()).withContext("expect the element button header to be displayed").toBe(true);
    });

    it("Enter Firstname and lastname", async () => {
        await formsPage.enterName(fname,lname);
        
    })

    it("Enter Email and Mobile", async() =>{
        await formsPage.enterEmailMobile(email,mobile);
    })

    it("Enter gender", async() =>{
        await formsPage.gender("Male");
        await formsPage.gender("Female");
        await formsPage.gender("Other");
    })

    // it("Enter date",async() =>{
    //     await formsPage.date(month);
    // })

    it("Enter Subject", async() =>{
        await formsPage.subject();
    })

    it("Enter current address", async () =>{
        await formsPage.address();
    })

    it("Enter hobbies", async() =>{
        await formsPage.hobbies("Sports");
        await formsPage.hobbies("Reading");
        await formsPage.hobbies("Music");
    })

    it("Select state ",async () =>{
        await formsPage.state("State","NCR")
    })

})

