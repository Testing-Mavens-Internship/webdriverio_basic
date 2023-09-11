import LoginPage from '../pageobjects/login.page.js';
import { elementsPage } from '../pageobjects/element-page.js';
import { webTablesPage } from '../pageobjects/web-tables.js';

let firstName  = 'Anchana';
let lastName = 'Babu';
let email = 'abc@gmail.com';
let age  = 22;
let salary = 50000;
let department = 'QA';

let firstNameNew  = 'Anjaly';
let lastNameNew = 'Babu';
let emailNew = 'xyz@gmail.com';
let ageNew  = 20;
let salaryNew = 40000;
let departmentNew = 'Development';

xdescribe('My Login application', () => {
    it('should launch the url', async () => {
        await LoginPage.openUrl()
        expect(await LoginPage.$header().isDisplayed()).withContext('expect home page logo is displayed ').toBe(true);
    })

    it('click the element title and verify the navigation',async () =>{
        await LoginPage.clickOnTile("Elements")
        expect(await elementsPage.$header().isDisplayed()).withContext('Expect header to be displayed').toBe(true);
    })

    it('click the check box title and verify the title',async () =>{
        await webTablesPage.clickOnWebTables("Web Tables")
        expect(await webTablesPage.$webTablesTitle().isDisplayed()).withContext('Expect web tables Title to be displayed').toBe(true);

    })

    it('click on add button',async ()=>{
        await webTablesPage.clickOnAddButton()
        expect(await webTablesPage.$addButton().isDisplayed()).withContext('Expect add button to be clicked').toBe(true);

    })

    it('Fill up form',async ()=>{
        await webTablesPage.fillForm(firstName,lastName,email,age,salary,department)
        expect(await webTablesPage.$submitButton().isDisplayed()).withContext('Expecting submit button is there').toBe(true);


    })

    it('click on submit button',async ()=>{
        await webTablesPage.clickOnSubmitButton()
        

    })

    it('Validate the result',async ()=>{
        expect(await webTablesPage.$validateResult(firstName).isDisplayed()).withContext('Expected and actual result should be same').toBe(true);
        expect(await webTablesPage.$validateResult(lastName).isDisplayed()).withContext('Expected and actual result should be same').toBe(true);
        expect(await webTablesPage.$validateResult(email).isDisplayed()).withContext('Expected and actual result should be same').toBe(true);
        expect(await webTablesPage.$validateResult(age).isDisplayed()).withContext('Expected and actual result should be same').toBe(true);
        expect(await webTablesPage.$validateResult(salary).isDisplayed()).withContext('Expected and actual result should be same').toBe(true);
        expect(await webTablesPage.$validateResult(department).isDisplayed()).withContext('Expected and actual result should be same').toBe(true);


    })

    it('click on edit icon',async ()=>{
        await webTablesPage.clickOnEdit()
        expect(await webTablesPage.$editRecord().isDisplayed()).withContext('Expecting edit button to be clicked').toBe(true);


    })

    it('edit the records',async ()=>{
        await webTablesPage.editForm(firstNameNew,lastNameNew,emailNew,ageNew,salaryNew,departmentNew) ;
        await webTablesPage.clickOnSubmitButton();
    });

    it('Validate the result',async ()=>{
        expect(await webTablesPage.$validateResult(firstNameNew).isDisplayed()).withContext('Expecting records to be edited').toBe(true);
        expect(await webTablesPage.$validateResult(lastNameNew).isDisplayed()).withContext('Expecting records to be edited').toBe(true);
        expect(await webTablesPage.$validateResult(emailNew).isDisplayed()).withContext('Expecting records to be edited').toBe(true);
        expect(await webTablesPage.$validateResult(ageNew).isDisplayed()).withContext('Expecting records to be edited').toBe(true);
        expect(await webTablesPage.$validateResult(salaryNew).isDisplayed()).withContext('Expecting records to be edited').toBe(true);
        expect(await webTablesPage.$validateResult(departmentNew).isDisplayed()).withContext('Expecting records to be edited').toBe(true);
    });

    it('click on delete icon',async ()=>{
        await webTablesPage.clickOnDeleteIcon();
        expect(await webTablesPage.$deleteIcon().isDisplayed()).withContext('Expecting delete icon to be clicked').toBe(false);


     })

    it('Validate delete',async ()=>{
        await webTablesPage.validateDelete()
        expect(await webTablesPage.$validateDeleteIcon("firstNameNew").waitForDisplayed({timeout:20000,reverse:true}))
        expect(await webTablesPage.$validateDeleteIcon("lastNameNew").waitForDisplayed({timeout:20000,reverse:true}))
        expect(await webTablesPage.$validateDeleteIcon("emailNew").waitForDisplayed({timeout:20000,reverse:true}))
        expect(await webTablesPage.$validateDeleteIcon("ageNew").waitForDisplayed({timeout:20000,reverse:true}))
        expect(await webTablesPage.$validateDeleteIcon("salaryNew").waitForDisplayed({timeout:20000,reverse:true}))
        expect(await webTablesPage.$validateDeleteIcon("departmentNew").waitForDisplayed({timeout:20000,reverse:true}))


    //    expect(await webTablesPage.$validateDeleteIcon("firstNameNew").isDisplayed()).withContext('Expecting records to be deleted').toBe(false);
    //     expect(await webTablesPage.$validateDeleteIcon("lastNameNew").isDisplayed()).withContext('Expecting records to be deleted').toBe(false);
    //     expect(await webTablesPage.$validateDeleteIcon("emailNew").isDisplayed()).withContext('Expecting records to be deleted').toBe(false);
    //     expect(await webTablesPage.$validateDeleteIcon("ageNew").isDisplayed()).withContext('Expecting records to be deleted').toBe(false);
    //     expect(await webTablesPage.$validateDeleteIcon("salaryNew").isDisplayed()).withContext('Expecting records to be deleted').toBe(false);
    //     expect(await webTablesPage.$validateDeleteIcon("departmentNew").isDisplayed()).withContext('Expecting records to be deleted').toBe(false);
    });






})