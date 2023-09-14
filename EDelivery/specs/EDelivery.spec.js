import { landingPage } from "../page-objects/landing-page.js";

describe("EDelivery Application:",()=>{
    it("Launch the Website",async()=>{
        await landingPage.launchUrl()
    })
})