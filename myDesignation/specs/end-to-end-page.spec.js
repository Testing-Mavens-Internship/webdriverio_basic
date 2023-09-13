import { launchPage } from "../page-object/login-page.js";
import { productPage } from "../page-object/product-page.js";

// let firstName = "Aparna"
// let lastName = "Udayan"
// let address = "Kayees home, kochi"
// let city = "Kochi"
// let pincode = "683020"
// let mobileNumber = "2233445566"
// let email = "aparna@gmail.com"

describe('Buy an item from the mydesignation website and validate', () => {
    it('launch the website', async () => {
        await launchPage.openUrl();
        expect(await launchPage.$itemsHeader().isDisplayed()).withContext('Expect the header to be displayed').toBe(true);
    })

    it('select the product and verify', async () => {
        await launchPage.selectProduct();
        await productPage.selectSize();
        expect(await launchPage.$productHeader().isDisplayed()).withContext('Expect header to be displayed').toBe(true);
        expect(await productPage.$productNotification().isDisplayed()).withContext('Expect product notification to be displayed').toBe(true);
    })

    it('click view cart and fill up the details', async () => {
        await productPage.viewCart();
        expect(await productPage.$productName().isDisplayed()).withContext('Expect product name to be displayed').toBe(true);
    })

    it('click proceed to checkout and place order button and validate the list of fields to be entered', async() => {
        await productPage.proceedToCheckout();
        await productPage.placeOrder();
        // let  warning = [];
        // warning = await this.$$warningMessages().map(item => item.getText());
        // for(let i of warning){
            
        // }
        await productPage.$mandatoryFieldInfo("Billing First name").waitForDisplayed({timeout:2000});
        expect(await productPage.$mandatoryFieldInfo("Billing First name").isDisplayed()).withContext('Expect the mandatory field info to be displayed').toBe(true);
        await productPage.$mandatoryFieldInfo("Billing Last name").waitForDisplayed({timeout:2000});
        expect(await productPage.$mandatoryFieldInfo("Billing Last name").isDisplayed()).withContext('Expect the mandatory field info to be displayed').toBe(true);
        await productPage.$mandatoryFieldInfo("Billing Street address").waitForDisplayed({timeout:2000});
        expect(await productPage.$mandatoryFieldInfo("Billing Street address").isDisplayed()).withContext('Expect the mandatory field info to be displayed').toBe(true);
        await productPage.$mandatoryFieldInfo("Billing Town / City").waitForDisplayed({timeout:2000});
        expect(await productPage.$mandatoryFieldInfo("Billing Town / City").isDisplayed()).withContext('Expect the mandatory field info to be displayed').toBe(true);
        await productPage.$mandatoryFieldInfo("Billing State").waitForDisplayed({timeout:2000});
        expect(await productPage.$mandatoryFieldInfo("Billing State").isDisplayed()).withContext('Expect the mandatory field info to be displayed').toBe(true);
        await productPage.$mandatoryFieldInfo("Billing PIN Code").waitForDisplayed({timeout:2000});
        expect(await productPage.$mandatoryFieldInfo("Billing PIN Code").isDisplayed()).withContext('Expect the mandatory field info to be displayed').toBe(true);
        await productPage.$mandatoryFieldInfo("Billing Phone").waitForDisplayed({timeout:2000});
        expect(await productPage.$mandatoryFieldInfo("Billing Phone").isDisplayed()).withContext('Expect the mandatory field info to be displayed').toBe(true);
        await productPage.$mandatoryFieldInfo("Billing Email address").waitForDisplayed({timeout:2000});
        expect(await productPage.$mandatoryFieldInfo("Billing Email address").isDisplayed()).withContext('Expect the mandatory field info to be displayed').toBe(true);
    })

    it('Validating the mandatory field', async () => {
        await productPage.billingDetails();
        
        expect(await productPage.$mandatoryFieldInfo("Billing First name").waitForDisplayed({reverse:true})).withContext('Expect the firstname field info to be displayed');
        expect(await productPage.$mandatoryFieldInfo("Billing Last name").waitForDisplayed({reverse:true})).withContext('Expect the lastname field info to be displayed');  
        expect(await productPage.$mandatoryFieldInfo("Billing Street address").waitForDisplayed({reverse:true})).withContext('Expect the address field info to be displayed');
        expect(await productPage.$mandatoryFieldInfo("Billing Town / City").waitForDisplayed({reverse:true})).withContext('Expect the town/city field info to be displayed');
        expect(await productPage.$mandatoryFieldInfo("Billing State").waitForDisplayed({reverse:true})).withContext('Expect the state field info to be displayed');
        expect(await productPage.$mandatoryFieldInfo("Billing PIN Code").waitForDisplayed({reverse:true})).withContext('Expect the pincode field info to be displayed');
        expect(await productPage.$mandatoryFieldInfo("Billing Phone").waitForDisplayed({reverse:true})).withContext('Expect the mandatory field info to be displayed');
        expect(await productPage.$mandatoryFieldInfo("Billing Email address").waitForDisplayed({reverse:true})).withContext('Expect the mandatory field info to be displayed');
    })

})