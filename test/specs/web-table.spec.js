import { launchPage } from "../pageobjects/landing-page.js";
import { elementPage }  from "../pageobjects/element-page.js";
import { webTable } from "../pageobjects/web-table-page.js";


let fname = "Alen"
let lname = "Salu"
let email = "a@gmail.com"
let age = "22"
let salary = "98765432"
let depart = "testing"

xdescribe('demoqa web table validation', () => {
    it('launch the url', async () => {
        await launchPage.openUrl();
        expect(await launchPage.$logo().isDisplayed()).withContext("Expect header to be displayed").toBe(true);
    });
    it('click on the element tile', async () => {
        await launchPage.clickOnTile("Elements");


        expect(await elementPage.$header().isDisplayed()).withContext("Expect the element page to load").toBe(true);

    });
    it('click on the web table tile', async() => {
        await elementPage.clickOnWebTable();
        expect(await webTable.$headerWebTable().isDisplayed()).withContext("Expect the element page to load").toBe(true);
    });
    it('click on the add button', async () => 
    {
        await webTable.clickOnAdd();
        expect(await webTable.$form().isDisplayed()).withContext("Expect the header to be displayed").toBe(true);
    });

    it('enter the details and submit the details', async() => 
    {
        await webTable.fillForm(fname,lname,email,age,salary,depart)
        await webTable.clickOnSubmitButton();
        expect(await webTable.$headerWebTable().isDisplayed()).withContext("Expect header to be displayed").toBe(true);
    })

    it('Validate the details', async () => {

       
        expect(await webTable.$tableValue(fname).isDisplayed()).withContext(`Expect ${fname} to be displayed`).toBe(true);
        expect(await webTable.$tableValue(lname).isDisplayed()).withContext(`Expect ${lname} field to be displayed`).toBe(true);
        expect(await webTable.$tableValue(email).isDisplayed()).withContext(`Expect ${email} field to be displayed`).toBe(true);
        expect(await webTable.$tableValue(age).isDisplayed()).withContext(`Expect ${age} field to be displayed`).toBe(true);
        expect(await webTable.$tableValue(salary).isDisplayed()).withContext(`Expect ${salary} field to be displayed`).toBe(true);
        expect(await webTable.$tableValue(depart).isDisplayed()).withContext(`Expect ${depart} field to be displayed`).toBe(true);
    });

    it('click on the edit button', async () => {
        await webTable.clickOnEdit();
        expect(await webTable.$form().isDisplayed()).withContext("Expect the header to be displayed").toBe(true);
    })
    
    it('fill edited details', async() => {
        await webTable.fillForm("Alia","B","alia@gmail.com","23","2345","developer");
        await webTable.clickOnSubmitButton();
        expect(await webTable.$headerWebTable().isDisplayed()).withContext("Expect header to be displayed").toBe(true);
    })
    it('verify edited details', async () =>{
        expect(await webTable.$tableValue("Alia").isDisplayed()).toBe(true)
        expect(await webTable.$tableValue("B").isDisplayed()).toBe(true)
        expect(await webTable.$tableValue("alia@gmail.com").isDisplayed()).toBe(true)
        expect(await webTable.$tableValue("23").isDisplayed()).toBe(true)
        expect(await webTable.$tableValue("2345").isDisplayed()).toBe(true)
        expect(await webTable.$tableValue("developer").isDisplayed()).toBe(true)
    })

    it('click on delete button', async () => {
        await webTable.clickOnDelete();
        expect(await webTable.$tableValue(fname).isDisplayed()).withContext(`Expect ${fname} to be displayed`).toBe(false);
        expect(await webTable.$tableValue(lname).isDisplayed()).withContext(`Expect ${lname} field to be displayed`).toBe(false);
        expect(await webTable.$tableValue(email).isDisplayed()).withContext(`Expect ${email} field to be displayed`).toBe(false);
        expect(await webTable.$tableValue(age).isDisplayed()).withContext(`Expect ${age} field to be displayed`).toBe(false);
        expect(await webTable.$tableValue(salary).isDisplayed()).withContext(`Expect ${salary} field to be displayed`).toBe(false);
        expect(await webTable.$tableValue(depart).isDisplayed()).withContext(`Expect ${depart} field to be displayed`).toBe(false);
    })
    

})

    


