import {elementsPage} from "../pageobjects/elements-page.js"
import {landingPage} from "../pageobjects/landing-page.js"
import { webTablePage } from "../pageobjects/webtable-page.js";

let fName = "Vaishnav S";
let lName="Nair";
let email="vsn@gmail.com";
let age = 20;
let salary = 20000;
let Department = "HR";
let lname2="N";

xdescribe("Demoqa Application Web Table Automation",() => {
    it("load the demo qa url",async() => {
        await landingPage.openUrl();
        expect(await landingPage.$header().isDisplayed()).withContext("expect header to be displayed").toBe(true);
    });

    it ("Click on the element tile and verify the navigation",async () =>{
        await landingPage.clickOnTile("Elements");


        let a= elementsPage.$header().getText();
        console.log(a);
        let b= [];
        b = await webTablePage.$$cards('Elements').map(item => item.getText())
        console.log(b);


        expect(await elementsPage.$header()).withContext("Expect header to be displayed").toBeDisplayed()
    });

    it("Click on the Webtable tile ",async () =>{
        await elementsPage.clickOnList("Web Tables");
        expect(await webTablePage.$header()).withContext("Expect header to be displayed").toBeDisplayed()
    });

    it("Register and verify wheather the user is added",async () =>{
        await webTablePage.clickOnAdd();
         expect(await webTablePage.$title()).withContext("Expect header to be displayed").toBeDisplayed()
    
        await webTablePage.fillForm(fName,lName,email,age,salary,Department);

        expect(await webTablePage.$displayRecord(fName).isDisplayed()).toBe(true);
        expect(await webTablePage.$displayRecord(lName).isDisplayed()).toBe(true);
        expect(await webTablePage.$displayRecord(email).isDisplayed()).toBe(true);
        expect(await webTablePage.$displayRecord(age).isDisplayed()).toBe(true);
        expect(await webTablePage.$displayRecord(salary).isDisplayed()).toBe(true);
        expect(await webTablePage.$displayRecord(Department).isDisplayed()).toBe(true);

    })

    it("Edit the added record",async () =>{
        await webTablePage.editRecord(lname2);
        expect(await webTablePage.$displayRecord(lname2).isDisplayed()).toBe(true);
        
    })

    it("Delete the added record",async () =>{
        await webTablePage.deleteRecord();

        expect(await webTablePage.$displayRecord(fName).isDisplayed()).toBe(false);
        expect(await webTablePage.$displayRecord(lName).isDisplayed()).toBe(false);
        expect(await webTablePage.$displayRecord(email).isDisplayed()).toBe(false);
        expect(await webTablePage.$displayRecord(age).isDisplayed()).toBe(false);
        expect(await webTablePage.$displayRecord(salary).isDisplayed()).toBe(false);
        expect(await webTablePage.$displayRecord(Department).isDisplayed()).toBe(false);
    })

    
})

