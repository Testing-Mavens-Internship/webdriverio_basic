import { homeMaven } from "../page-objects/home.page.js";
import { contact } from "../page-objects/contact-page.js";
import { cartPage } from "../page-objects/cart-page.js";
let fullName = "Sreerag";
let email = "tester@gmail.com";
let phoneNumber = "1234142";
let message = "Hello gooys";
let checkOutName = "Tester";
let checkOutEmail = "tester@gmail.com";
let address = "address";
let city = "ernakulam";
let state = "kerala";
let zip = "123421";
let cardName = "Tester";
let cardNumber = "1111-2222-3333-4444";
let year = "2023";
let cvv = "322";
let windowsHandle;
describe("End to End automation of mavenkonect website", () => {
  it("Launch the mavenkonect website", async () => {
    await homeMaven.openUrl();
    expect(await homeMaven.$header().isDisplayed())
      .withContext("Expect Maven Konnect to be displayed")
      .toBe(true);
  });

  it("Click on the contact us button", async () => {
    await homeMaven.clickOnContactUs();
    windowsHandle = await browser.getWindowHandles();
    await browser.switchToWindow(windowsHandle[1]);
    expect(await contact.$header().isDisplayed())
      .withContext("Expect Contact us is visible")
      .toBe(true);
  });

  it("Navigate to a new tab for contact us ", async () => {
    await contact.enterDetails(fullName, email, phoneNumber, message);
    await browser.acceptAlert();
    expect(await contact.$thanksText().isDisplayed())
      .withContext("Thank you text is appeared and")
      .toBe(true);
    await browser.closeWindow();
  });
  it("Closing the current window and going back to the home page", async () => {
    await browser.switchToWindow(windowsHandle[0]);
    expect(await homeMaven.$header().isDisplayed())
      .withContext("site is navigated to the home page and header is displayed")
      .toBe(true);
  });

  it("Click on the cart icon and validating the navigation to the cart page", async () => {
    await homeMaven.clickOnCart();
    expect(await cartPage.$header().isDisplayed())
      .withContext("The cart header is displayed")
      .toBe(true);
  });
  it("Entering the details in the checkout page clicking on proceed to checkout", async () => {
    await cartPage.enterDetails(
      checkOutName,
      checkOutEmail,
      address,
      city,
      state,
      zip,
      cardName,
      cardNumber,
      year,
      cvv
    );
    expect(await cartPage.$clickCheckout().isDisplayed())
      .withContext(
        "After entering the details Continue to checkout is clickable "
      )
      .toBe(true);
  });

  it("Clicking on proceed to checkout", async () => {
    await cartPage.clickCheckout();
    if(browser.isAlertOpen()){
      await browser.acceptAlert();
      expect(await cartPage.$checkOutHeader().isDisplayed())
      .withContext("Thank you header is displayed")
      .toBe(true);    
    }
    else{
      expect(await cartPage.$checkOutHeader().isDisplayed())
      .withContext("Thank you header is displayed")
      .toBe(true);    
    }
  });
});
