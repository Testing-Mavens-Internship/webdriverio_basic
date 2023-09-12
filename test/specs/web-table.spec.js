<<<<<<< HEAD
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

    


=======
import {loginpage} from '../pageobjects/login.page.js';
import { elementsPage } from '../pageobjects/element-page.js';
import { webtablepage } from '../pageobjects/web-table.js';



let firstName="Adhithya"
let lastName="Somaraj"
let email="adhithyasomaraj@gmail.com"
let age="26"
let salary="2500000"
let department="Development"

let firstName1="Allen"
let lastName1="Joseph"
let email1="Allenjoseph@gmail.com"
let age1="24"
let salary1="200000"
let department1="QA"



xdescribe('My Login application', () => {
    it('should launch the url', async () => {
        await loginpage.openUrl()
        expect(await loginpage.$header().isDisplayed()).withContext('expect home page logo is displayed ').toBe(true);
    })

    it('click the element title and verify the navigation',async () =>{
        await loginpage.clickOnTile("Elements")
        expect(await elementsPage.$header().isDisplayed()).withContext('Expect header to be displayed').toBe(true);
    })

    it('click the check box title and verify the title',async () =>{
        await webtablepage.clickOnWebTable("Web Tables")
        expect(await webtablepage.$webTableTitle().isDisplayed()).withContext('Expect Web Tables Title to be displayed').toBe(true);

    })

    it('click on the add button and',async()=>{
        await webtablepage.clickAddButton()
        expect(await webtablepage.$addButton().isDisplayed()).withContext('Expect add button to be clicked').toBe(true)
    })

    it('Filling the registration form',async()=>{
        await webtablepage.fillRegistrationForm(firstName,lastName,email,age,salary,department)
        expect(await webtablepage.$submitButton().isDisplayed()).withContext('expect Submit button should be there').toBe(true)


    })

    it("click on the submit button",async()=>{
        await webtablepage.clickOnSubmit()
        expect(await webtablepage.$submitResult(firstName).isDisplayed()).withContext('expect first name should submitted').toBe(true)
        expect(await webtablepage.$submitResult(lastName).isDisplayed()).withContext('expect last name should submitted').toBe(true)
        expect(await webtablepage.$submitResult(email).isDisplayed()).withContext('expect email should submitted').toBe(true)
        expect(await webtablepage.$submitResult(age).isDisplayed()).withContext('expect age should submitted').toBe(true)
        expect(await webtablepage.$submitResult(salary).isDisplayed()).withContext('expect salary should submitted').toBe(true)
        expect(await webtablepage.$submitResult(department).isDisplayed()).withContext('expect department should submitted').toBe(true)
    })

    it("Validate the result",async()=>{
        expect(await webtablepage.$submitResult(firstName).isDisplayed()).withContext('expect first name should be in result').toBe(true)
        expect(await webtablepage.$submitResult(lastName).isDisplayed()).withContext('expect last name should be in result').toBe(true)
        expect(await webtablepage.$submitResult(email).isDisplayed()).withContext('expect email should be in result').toBe(true)
        expect(await webtablepage.$submitResult(age).isDisplayed()).withContext('expect age should be in result').toBe(true)
        expect(await webtablepage.$submitResult(salary).isDisplayed()).withContext('expect salary should be in result').toBe(true)
        expect(await webtablepage.$submitResult(department).isDisplayed()).withContext('expect department should be in result').toBe(true)
    })
    it("click on edit icon",async()=>{
        await webtablepage.clickOnEdit()
        expect(await webtablepage.$editIcon().isDisplayed()).withContext('expect edit icon sgould be clicked').toBe(true)
    })

    it("Edit the Registration Form",async()=>{
        await webtablepage.editFillRegistrationForm(firstName1,lastName1,email1,age1,salary1,department1)
        await webtablepage.clickOnSubmit()
        expect(await webtablepage.$submitResult(firstName1).isDisplayed()).withContext('expect edited first name should submitted').toBe(true)
        expect(await webtablepage.$submitResult(lastName1).isDisplayed()).withContext('expect edited last name should submitted').toBe(true)
        expect(await webtablepage.$submitResult(email1).isDisplayed()).withContext('expect edited email should submitted').toBe(true)
        expect(await webtablepage.$submitResult(age1).isDisplayed()).withContext('expect edited age should submitted').toBe(true)
        expect(await webtablepage.$submitResult(salary1).isDisplayed()).withContext('expect edited salary should submitted').toBe(true)
        expect(await webtablepage.$submitResult(department1).isDisplayed()).withContext('expect edited department should submitted').toBe(true)

    })

    it("click on the delete icon",async()=>{
        await  webtablepage.clickOnDeleteIcon()
        expect(await webtablepage.$deleteIcon().isDisplayed()).withContext('expect delete icon should be click').toBe(false)
    })

    it('Validate delete',async ()=>{
        await webtablepage.editresultDelete()
        expect(await webtablepage.$validateEditResult(firstName1).isDisplayed()).withContext('Expecting records to be deleted').toBe(false);
        expect(await webtablepage.$validateEditResult(lastName1).isDisplayed()).withContext('Expecting records to be deleted').toBe(false);
        expect(await webtablepage.$validateEditResult(email1).isDisplayed()).withContext('Expecting records to be deleted').toBe(false);
        expect(await webtablepage.$validateEditResult(age1).isDisplayed()).withContext('Expecting records to be deleted').toBe(false);
        expect(await webtablepage.$validateEditResult(salary1).isDisplayed()).withContext('Expecting records to be deleted').toBe(false);
        expect(await webtablepage.$validateEditResult(department1).isDisplayed()).withContext('Expecting records to be deleted').toBe(false);
    

    });
    


    

})
>>>>>>> 97b12fda27cce15c469fc3d81102a29a78d02333
