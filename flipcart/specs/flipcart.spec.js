import { homePage } from "../pageobjects/home-page.js";
import { travelPage } from "../pageobjects/travel-page.js";
describe("End-to-End automation of Flipcart application", () => {
  it("Lauch Flipcart url", async () => {
    await homePage.lauchUrl();
    await homePage.clickOnClose();
    expect(await homePage.$header().waitForDisplayed({timeout:1000}))
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("Click on travel button and verify navigation to travel page", async () => {
    await homePage.clickOnTravel();
    expect(await homePage.$travel().isDisplayed())
      .withContext("Expect navigation to travel page")
      .toBe(true);
  });

  it("Enter the from and to loaction", async() =>{
    let place1 = "Kochi";
    let place2 = "Dubai";
    let date = "12";
    let month = "October";
    await travelPage.enterLoaction(place1, place2, month, date);
    await travelPage.validate();
    // expect(await travelPage.$validate("From","Kochi").isDisplayed()).withContext("Expect the from location to be same as entered").toBe(true);
    // expect(await travelPage.$validate("To","Dubai").isDisplayed()).withContext("Expect the to location to be same as entered").toBe(true);
  });

  it("Select departure time", async()=>{
    await travelPage.clickOnFlightTime();
  });
});
