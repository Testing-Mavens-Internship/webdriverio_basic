import { homePage } from "../pageobjects/home-page.js";

describe("automate the website akbar travels", () =>{
it("lauch the akbar travels url",async()=>{
    await homePage.OpenUrl();
    expect(await homePage.$logo().isDisplayed()).withContext("expect the header to be displayed").toBe(true);
})

it("Select from and to destination ",async()=>{
    await homePage.typeOfFlight();
    //expect(await homePage.$dummy().isDisplayed()).withContext("expect the radio button to be selected").toBe(true);
    await homePage.setDestination();
})
});