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