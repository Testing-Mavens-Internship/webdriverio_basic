import { elementsPage } from "../pageobjects/elements-page.js";
import { landingPage } from "../pageobjects/landing-page.js";
import { checkBoxPage } from "../pageobjects/checkbox-page.js";
import { linksPage } from "../pageobjects/links-page.js";

let homeDropdown = ['Desktop','Documents','Downloads'];
let desktopDropDown = ['Notes','Commands'];
let documentDropDown = ['WorkSpace','Office'];
let workSpaceDropDown =['React','Angular','Veu'];
let officeDropDown = ['Public','Private','Classified','General'];
let downloadsDropDown = ['Word File.doc','Excel File.doc']

xdescribe ("Demoqa application checkbox automation",() =>{

    it("load the demoqa url",async() =>{
        await landingPage.openUrl();
        expect (await landingPage.$header().isDisplayed()).withContext("expect the page to load").toBe(true);
    });

    it("Click on element tile",async() => {
        await landingPage.clickOnTile("Elements");
        expect (await elementsPage.$header().isDisplayed()).withContext("expect the element button header to be displayed").toBe(true);
    });  

    it("click on the checkbox button tile", async() => {
        await elementsPage.clickOnList("Check Box");
        expect (await checkBoxPage.$checkBoxHeader().isDisplayed()).withContext("expect the radio button header to be displayed").toBe(true);
    });

    it("Click on the Home checkbox", async() => {
        await checkBoxPage.clickOnCheckbox("Home");
        let textArray=[];
        textArray = await checkBoxPage.$$text().map(item => item.getText())
        // await checkBoxPage.clickOnCheckbox("Home");
        
        for(let item of textArray){
            expect ( await checkBoxPage.$output(item).isDisplayed()).withContext("expect text to be displayed").toBe(true);
        }
        await checkBoxPage.clickOnCheckbox("Home");
    })

    xit("click on the link  tile", async() => {
        await elementsPage.clickOnList("Links");
        expect (await linksPage.$linksHeader().isDisplayed()).withContext("expect the links header to be displayed").toBe(true);
    });

    xit("click on home link", async () => {
        await linksPage.clickOnHomeLink();
        let a = await browser.getWindowHandles();
        await browser.switchToWindow(a[1]);
        expect (await linksPage.$elementsHeader().isDisplayed()).toBe(true);
    });
    
    it ("Click on home checkbox toggle and verify dropdown list", async () => {
        await checkBoxPage.clickOnToggle("Home");

        for(let item of homeDropdown){
        expect ( await checkBoxPage.$checkBoxName(item).isDisplayed()).withContext(`Expect ${item} to be displayed `).toBe(true);
        }    
    });

    it ("Click on Desktop checkbox toggle and verify dropdown list", async () => {
        await checkBoxPage.clickOnToggle("Desktop");

        for(let item of desktopDropDown){
        expect ( await checkBoxPage.$checkBoxName(item).isDisplayed()).withContext(`Expect ${item} to be displayed`).toBe(true);
        } 
        await checkBoxPage.clickOnToggle("Desktop");   
    });

   it("Click on Documents checkbox toggle and verify dropdown list", async () =>{
    await checkBoxPage.$clickOnToggle("Documents");

    for(let item of documentDropDown){
        expect ( await checkBoxPage.$checkBoxName(item).isDisplayed()).withContext(`Expect ${item} to be displayed`).toBe(true);
    }
}); 

   it("Click on WorkSpace checkbox toggle and verify dropdown list", async () =>{
    await checkBoxPage.$clickOnToggle("WorkSpace");

    for(let item of workSpaceDropDown){
        expect ( await checkBoxPage.$checkBoxName(item).isDisplayed()).withContext(`Expect ${item} to be displayed`).toBe(true);
    }
    await checkBoxPage.$clickOnToggle("WorkSpace");
   });

   it("Click on Office checkbox toggle and verify dropdown list", async () =>{
    await checkBoxPage.$clickOnToggle("Office");

    for(let item of officeDropDown){
        expect ( await checkBoxPage.$checkBoxName(item).isDisplayed()).withContext(`Expect ${item} to be displayed`).toBe(true);
    }
    await checkBoxPage.$clickOnToggle("Office");
    await checkBoxPage.$clickOnToggle("Documents");
   });


   it("Click on downloads checkbox toggle and verify dropdown list", async () =>{
    await checkBoxPage.$clickOnToggle("Downloads");

    for(let item of downloadsDropDown){
        expect ( await checkBoxPage.$checkBoxName(item).isDisplayed()).withContext(`Expect ${item} to be displayed`).toBe(true);
    }
    await checkBoxPage.$clickOnToggle("Downloads");
    await checkBoxPage.clickOnToggle("Home");
   });

   it ("Click on Desktop checkbox and verify the selection", async() => {
     await checkBoxPage.clickOnToggle("Home");
     await checkBoxPage.clickOnCheckbox("Desktop");

            // let textArray=[];
            // textArray = await checkBoxPage.$$text().map(item => item.getText())
            // await checkBoxPage.clickOnCheckbox("Desktop");
     
            // for(let item of textArray){
            //     let result = item.toLowerCase();
            //     expect ( await checkBoxPage.$output(result).isDisplayed()).withContext("expect text to be displayed").toBe(true);
            // }
       



//      for( let item of desktopDropDown )
//       expect(await checkBoxPage.$$text()).toHaveTextContaining(item);
//      await checkBoxPage.clickOnCheckbox("Desktop");

   });

    
   it ("Click on Notes checkbox and verify the selection", async() => {
    await checkBoxPage.clickOnToggle("Desktop");
    await checkBoxPage.clickOnCheckbox("Notes");
    // for( let item of desktopDropDown )
    //  expect(await checkBoxPage.$$text()).toHaveTextContaining(item);
    // await checkBoxPage.clickOnCheckbox("Notes");
  });
   
  it ("Click on Commands checkbox and verify the selection", async() => {
    // await checkBoxPage.clickOnToggle("Home");
    // await checkBoxPage.clickOnToggle("Desktop");
    await checkBoxPage.clickOnCheckbox("Commands");
    await checkBoxPage.clickOnCheckbox("Commands");
   // for( let item of desktopDropDown )
     //expect(await checkBoxPage.$$text()).toHaveTextContaining(item);
  });  
  
  it ("Click on Documents checkbox and verify the selection", async() => {
    await checkBoxPage.clickOnCheckbox("Documents");
//     for( let item of documentDropDown )
//      expect(await checkBoxPage.$$text()).toHaveTextContaining(item);
//     await checkBoxPage.clickOnCheckbox("Documents");
  });
  
})