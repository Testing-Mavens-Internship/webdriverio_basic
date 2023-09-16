import { landingPage } from "../page-objects/landing-page.js";

describe("End to end automation og akbar travels",()=>{
it("Load the website",async()=>{
    await landingPage.loadPage()
    expect(await landingPage.$header().isDisplayed()).toBe(true)
})
it("Select from and to places for travel",async()=>{
    await landingPage.toAndFromPlace()
})
})