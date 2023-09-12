import { loginPage } from "../pageobject/login-page.js";
import { homePage } from "../pageobject/home-page.js";
import { cartPage } from "../pageobject/cart-page.js";


describe('Swag Labs website login page validation', () => {
    it('Launch the swag labs website', async() => {
        await loginPage.openUrl();
        expect(await loginPage.$logo().isDisplayed()).withContext('Expect the logo to be displayed').toBe(true)
    })
    it('Login the swag labs website and validate', async() => {
        await loginPage.login();
        expect(await loginPage.$logo().isDisplayed()).withContext('Expect the logo to be displayed').toBe(true)
    })
    it('Select filter and validate', async() => {
        await homePage.filter();
        expect(await homePage.$logo().isDisplayed()).withContext('Expect the logo to be displayed').toBe(true)
    })
    it('Add an item to cart and validate', async() => {
        await homePage.addToCart();
        
        expect(await homePage.$clickButton("Remove").isDisplayed()).withContext('Expect the remove button to be displayed').toBe(true);
        expect(await homePage.$iconNotification().isDisplayed()).withContext('Expect the remove button to be displayed').toBe(true);
    })
    it('Click on cart icon , validate and checkout', async() => {
        await homePage.cartPage();
        await cartPage.checkout();
        //expect(await cartPage.$cartHeader().isDisplayed()).withContext('expect the header to be displayed').toBe(true);
        expect(await cartPage.$checkoutForm().isDisplayed()).withContext('Expect the checkout form to be displayed').toBe(true);
    })
    it('Enter the details in the form ,click continue button and validate',async() => {
        await cartPage.fillForm();
        expect(await cartPage.$cartItem().isDisplayed()).withContext('Expect the cart item details to be displayed').toBe(true);
    })
    it('Check the details in the overview and validate', async() => {
        await cartPage.verifyPrice();
        expect(await cartPage.$cartItemPrice().isDisplayed()).withContext("Expect the productprice is same as cartItem price is displayed ").toBe(true); 
        expect(await cartPage.$overviewPrice("summary_info_label summary_total_label").isDisplayed()).withContext("Expect the totalprice to be displayed ").toBe(true);      
    })
    it('Click on the finish button and validate', async() => {
        await cartPage.finishButton();
        expect(await cartPage.$homeButton().isDisplayed()).withContext('Expect back home button is displayed').toBe(true);
    })
})