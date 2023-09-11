import LoginPage from '../pageobjects/login.page.js';
import { linksPage } from '../pageobjects/links.js';

import { elementsPage } from '../pageobjects/element-page.js';
xdescribe('My Login application', () => {
    it('should launch the url', async () => {
        await LoginPage.openUrl()
        expect(await LoginPage.$header().isDisplayed()).withContext('expect home page logo is displayed ').toBe(true);
    })

    it('click the element title and verify the navigation',async () =>{
        await LoginPage.clickOnTile("Elements")
        expect(await elementsPage.$header().isDisplayed()).withContext('Expect header to be displayed').toBe(true);
    })
    it('click on links',async ()=>{
        await linksPage.clickOnLinks("Links")
        expect(await linksPage.$linkTitle().isDisplayed()).withContext('Expect links to be clicked').toBe(true);

    })

    it('click on home link',async ()=>{
        await linksPage.clickOnHomeLink("Links")
        let a = await browser.getWindowHandles()
        console.log(a[1]);
        await browser.switchToWindow(a[1])
        
       expect(await linksPage.$validateTile().isDisplayed()).withContext('Expect page contains elements tile').toBe(true);

    })

})