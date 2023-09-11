import { loginpage } from "../pageobjects/login.page.js";
import { elementsPage } from "../pageobjects/element-page.js";
import { linkpage } from "../pageobjects/links.js";

xdescribe('My Login application', () => {
    it('should launch the url', async () => {
        await loginpage.openUrl()
        expect(await loginpage.$header().isDisplayed()).withContext('expect home page logo is displayed ').toBe(true);
    })

    it('click the element title and verify the navigation',async () =>{
        await loginpage.clickOnTile("Elements")
        expect(await elementsPage.$header().isDisplayed()).withContext('Expect header to be displayed').toBe(true);
    })

    it("click on the links menu on side navigation",async()=>{
        await linkpage.clickOnLinkNav("Links")
        expect(await linkpage.$linkHeader().isDisplayed()).withContext("Expect radio button title should be there").toBe(true)
    })
    it("Click on the home link",async()=>{
        await linkpage.clickOnHomeLink()
        let a =await browser.getWindowHandles()
        console.log(a);
        await browser.switchToWindow(a[1])
       expect(await linkpage.$elementTile().isDisplayed()).withContext("Expect the home page contain Element Title").toBe(true)
    })

})