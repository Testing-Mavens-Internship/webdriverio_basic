import { loginpage } from "../pageobjects/login.page.js";
import { elementsPage } from "../pageobjects/element-page.js";
import {checkboxpage} from "../pageobjects/check-box.js"

/* Toggle Buttons*/

let homeToggle = "Home"
let desktopToggle="Desktop"
let documentsToggle="Documents"
let workSpaceToggle="WorkSpace"
let officeToggle="Office"
let downloadsToggle="Downloads"



xdescribe('My Login application', () => {
    it('should launch the url', async () => {
        await loginpage.openUrl()
        expect(await loginpage.$header().isDisplayed()).withContext('expect home page logo is displayed').toBe(true);
    })

    it('click the element title and verify the navigation',async () =>{
        await loginpage.clickOnTile("Elements")
        expect(await elementsPage.$header().isDisplayed()).withContext('Expect header to be displayed').toBe(true);
    })

    it("click on the check box menu on side navigation",async()=>{
        await checkboxpage.clickOnCheckBoxNav("Check Box")
        expect(await checkboxpage.$checkBoxTitle().isDisplayed()).withContext("Expect radio button title should be there").toBe(true)
    })
    
    it("click on the home toggle button",async()=>{
        await checkboxpage.clickOnToggleButton(homeToggle)
        expect(await checkboxpage.$checkBoxItems("Desktop").isDisplayed()).withContext(`Expect Desktop item should be display`).toBe(true)
        expect(await checkboxpage.$checkBoxItems("Documents").isDisplayed()).withContext(`Expect Documents item should be display`).toBe(true)
        expect(await checkboxpage.$checkBoxItems("Downloads").isDisplayed()).withContext(`Expect Downloads item should be display`).toBe(true)
    })
    
    it("click on the desktop toggle button",async()=>{
        await checkboxpage.clickOnToggleButton(desktopToggle)
        expect(await checkboxpage.$checkBoxItems("Notes").isDisplayed()).withContext("expect Notes item should be display").toBe(true)
        expect(await checkboxpage.$checkBoxItems("Commands").isDisplayed()).withContext("expect Commands item should be display").toBe(true)
    })

    it("click on the documents toggle button",async()=>{
        await checkboxpage.clickOnToggleButton(documentsToggle)
        expect(await checkboxpage.$checkBoxItems("WorkSpace").isDisplayed()).withContext("expect Workspace item should be display").toBe(true)
        expect(await checkboxpage.$checkBoxItems("Office").isDisplayed()).withContext("expect Office item should be display").toBe(true)
    })

    it("click on the workspace toggle button",async()=>{
        await checkboxpage.clickOnToggleButton(workSpaceToggle)
        expect(await checkboxpage.$checkBoxItems("React").isDisplayed()).withContext("expect React item should be display").toBe(true)
        expect(await checkboxpage.$checkBoxItems("Angular").isDisplayed()).withContext("expect Angular item should be display").toBe(true)
        expect(await checkboxpage.$checkBoxItems("Veu").isDisplayed()).withContext("expect Veu item should be display").toBe(true)
    })

    it("click on the office toggle button",async()=>{
        await checkboxpage.clickOnToggleButton(officeToggle)
        expect(await checkboxpage.$checkBoxItems("Public").isDisplayed()).withContext("expect Public item should be display").toBe(true)
        expect(await checkboxpage.$checkBoxItems("Private").isDisplayed()).withContext("expect Private item should be display").toBe(true)
        expect(await checkboxpage.$checkBoxItems("Classified").isDisplayed()).withContext("expect Classified item should be display").toBe(true)
        expect(await checkboxpage.$checkBoxItems("General").isDisplayed()).withContext("expect Veu General should be display").toBe(true)
    })

    it("click on the downloads toggle button",async()=>{
        await checkboxpage.clickOnToggleButton(downloadsToggle)
        expect(await checkboxpage.$checkBoxItems("Word File.doc").isDisplayed()).withContext("expect Word File.doc item should be display").toBe(true)
        expect(await checkboxpage.$checkBoxItems("Excel File.doc").isDisplayed()).withContext("expect Excel File.doc item should be display").toBe(true)
        
    })

     it("check on the home check box",async()=>{
         await checkboxpage.clickOnCheckBoxItems("Home")
         const itemNames = [
            "home",
            "desktop",
            "notes",
            "commands",
            "documents",
            "workspace",
            "react",
            "angular",
            "veu",
            "office",
            "public",
            "private",
            "classified",
            "general",
            "downloads",
            "wordFile",
            "excelFile"
          ];
          expect(await checkboxpage.$checkBoxItems("Home").isDisplayed()).withContext("expect Home check box should be enable").toBe(true)
          expect(await checkboxpage.$youHaveSelected().isDisplayed()).withContext(`expect you have selected string should be there`).toBe(true)
          for (let i = 0; i < itemNames.length; i++) {
            expect(await checkboxpage.$resultValues(itemNames[i]).isDisplayed()).withContext(`expect ${itemNames[i]} value should be display`).toBe(true)
          }
          await checkboxpage.clickOnCheckBoxItems("Home")

     })
    it("check on the desktop check box",async()=>{
        
         await checkboxpage.clickOnCheckBoxItems("Desktop")
         const itemNames = [
            "desktop",
            "notes",
            "commands"]
            expect(await checkboxpage.$checkBoxItems("Desktop").isDisplayed()).withContext("expect Desktop check box should be enable").toBe(true)
            expect(await checkboxpage.$youHaveSelected().isDisplayed()).withContext(`expect you have selected string should be there`).toBe(true)
            for(let i=0;i<itemNames.length;i++){
                expect(await checkboxpage.$resultValues(itemNames[i]).isDisplayed()).withContext(`expect ${itemNames[i]} value should be display`).toBe(true)
            }
            await checkboxpage.clickOnCheckBoxItems("Desktop")

     })
     it("check on the Documents check box",async()=>{
        
         await checkboxpage.clickOnCheckBoxItems("Documents")
         const itemNames = [
            "documents",
            "workspace",
            "react",
            "angular",
            "veu",
            "office",
            "public",
            "private",
            "classified",
            "general"]
            expect(await checkboxpage.$checkBoxItems("Documents").isDisplayed()).withContext("expect Documents check box should be enable").toBe(true)
            expect(await checkboxpage.$youHaveSelected().isDisplayed()).withContext(`expect you have selected string should be there`).toBe(true)
            for(let i=0;i<itemNames.length;i++){
                expect(await checkboxpage.$resultValues(itemNames[i]).isDisplayed()).withContext(`expect ${itemNames[i]} value should be display`).toBe(true)
            }
            await checkboxpage.clickOnCheckBoxItems("Documents")
        })

        it("check on the Documents check box",async()=>{
        
            await checkboxpage.clickOnCheckBoxItems("WorkSpace")
            const itemNames = [
               "workspace",
               "react",
               "angular",
               "veu"]
               expect(await checkboxpage.$checkBoxItems("WorkSpace").isDisplayed()).withContext("expect WorkSpace check box should be enable").toBe(true)
               expect(await checkboxpage.$youHaveSelected().isDisplayed()).withContext(`expect you have selected string should be there`).toBe(true)
               for(let i=0;i<itemNames.length;i++){
                   expect(await checkboxpage.$resultValues(itemNames[i]).isDisplayed()).withContext(`expect ${itemNames[i]} value should be display`).toBe(true)
               }
               await checkboxpage.clickOnCheckBoxItems("WorkSpace")
           })

        it("check on the Office check box",async()=>{
        
            await checkboxpage.clickOnCheckBoxItems("Office")
            const itemNames = [
               "office",
               "public",
               "private",
               "classified",
                "general"]
               expect(await checkboxpage.$checkBoxItems("Office").isDisplayed()).withContext("expect Office check box should be enable").toBe(true)
               expect(await checkboxpage.$youHaveSelected().isDisplayed()).withContext(`expect you have selected string should be there`).toBe(true)
               for(let i=0;i<itemNames.length;i++){
                   expect(await checkboxpage.$resultValues(itemNames[i]).isDisplayed()).withContext(`expect ${itemNames[i]} value should be display`).toBe(true)
               }
               await checkboxpage.clickOnCheckBoxItems("Office")
         })   

         it("check on the Office check box",async()=>{
        
            await checkboxpage.clickOnCheckBoxItems("Downloads")
            const itemNames = [
               "downloads",
               "wordFile",
               "excelFile"]
               expect(await checkboxpage.$checkBoxItems("Downloads").isDisplayed()).withContext("expect Downloads check box should be enable").toBe(true)
               expect(await checkboxpage.$youHaveSelected().isDisplayed()).withContext(`expect you have selected string should be there`).toBe(true)
               for(let i=0;i<itemNames.length;i++){
                   expect(await checkboxpage.$resultValues(itemNames[i]).isDisplayed()).withContext(`expect ${itemNames[i]} value should be display`).toBe(true)
               }
               await checkboxpage.clickOnCheckBoxItems("Downloads")
           })




})