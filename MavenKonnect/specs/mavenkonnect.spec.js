import { homePage } from "../pageobjects/home-page.js";
import { contactPage } from "../pageobjects/contact-page.js";
import { cartPage } from "../pageobjects/cart-page.js";

let firstName = "Anchana";
let email = "abc@gmail.com";
let phoneNumber = "9447110461";
let message = "Nice watch";
let address = "Anjanayem P O puthuppally";
let city = "Kottayam";
let state = "Kerala";
let zip = "686011";
let cardName = "Anchana Babu";
let cardNumber = "1111222233334444";
let expiryMonth = "January";
let expiryYear = "2030";
let cvv = "123";
let a;


describe('My Login application', () => {
    it('should launch the url', async () => {
        await homePage.openUrl()
        expect(await homePage.$header().isDisplayed()).withContext('expect header is displayed ').toBe(true);
    })

    it('click on contact us button and validate the header',async () =>{
        await homePage.clickOnContactUs()
        a = await browser.getWindowHandles()
        console.log(a[1]);
        await browser.switchToWindow(a[1])
        expect(await homePage.$header().isDisplayed()).withContext('expect header is displayed ').toBe(true);
})

it('Enter the details and click on send button',async () =>{
    await contactPage.enterDetails(firstName,email,phoneNumber,message)
    await browser.acceptAlert()
    expect(await contactPage.$thankYouMessage().isDisplayed()).withContext('expect thank you message is displayed ').toBe(true);
    await browser.closeWindow()   
})

it('switch to home window , close the contact us window and validate the header in home window' , async () =>{
        await browser.switchToWindow(a[0])
        expect(await homePage.$header().isDisplayed()).withContext('expect header is displayed ').toBe(true);
        await cartPage.clickOnCartIcon()
        expect(await cartPage.$successMessage().isDisplayed()).withContext('expect message is displayed ').toBe(true);
})

it('Fill the details and click on continue to check out button',async () =>{
    await cartPage.fillDetails(firstName,email,address,city,state,zip,cardName,cardNumber,expiryMonth,expiryYear,cvv)
    await cartPage.clickOnCheckOutButton()
    if(await browser.isAlertOpen()){
        await browser.acceptAlert();
      }
      expect(await contactPage.$thankYouMessage().isDisplayed()).withContext("Thank you header is displayed").toBe(true);     
})
})