import { elementsPage } from "../pageobjects/elements-page.js";
import { landingPage } from "../pageobjects/landing-page.js"
import {radioButtonPage} from "../pageobjects/radio-button.js"

xdescribe("Demoqa application radio button automation ", () => {
    

    it("load the demoqa url",async() =>{
        await landingPage.openUrl();
        expect (await landingPage.$header().isDisplayed()).withContext("expect the page to load").toBe(true);
    });

    it("Click on element tile",async() => {
        await landingPage.clickOnTile("Elements");
        expect (await elementsPage.$header().isDisplayed()).withContext("expect the element button header to be displayed").toBe(true);
    });  

    it("Click on Radiobutton Tile", async() => {
        await elementsPage.clickOnList("Radio Button");
        expect (await radioButtonPage.$rheader().isDisplayed()).withContext("expect the radio button header to be displayed").toBe(true);
    });

    it("Click on yes on the radiobutton page", async() => {
        await radioButtonPage.clickOnButton("Yes");
        expect (await radioButtonPage.$validateText("Yes").isDisplayed()).withContext("expect the validation message to be displayed").toBe(true);
    });

    it("Click on impressive on the radiobutton page", async() => {
        await radioButtonPage.clickOnButton("Impressive");
        expect (await radioButtonPage.$validateText("Impressive").isDisplayed()).withContext("expect the validation message to be displayed").toBe(true);
    });

})