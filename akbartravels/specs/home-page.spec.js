import { homePage } from "../pageobjets/home-page.js";

describe ("End-to-end automation of Akbartravels applicatio", ()=>{
    it("Launch url and verify header", async () =>{
        await homePage.launchUrl();
        expect(await homePage.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
        });

    it("Set from locataion, to location, date and search for flights", async () =>{
        await homePage.clickOnFrom("cochin", "dubai");
        expect (await homePage.$validate('liFrom','Cochin ').isDisplayed()).withContext("Expect from location to be displayed").toBe(true);
        expect (await homePage.$validate('liTo','Dubai ').isDisplayed()).withContext("Expect to location to be displayed").toBe(true);
    });
});