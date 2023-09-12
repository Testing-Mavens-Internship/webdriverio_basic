import { landingPage } from "../page-objects/landing-page.js";
import { productPage } from "../page-objects/product-page.js";

describe("MYDESIGNATION automation", () => {
  it("Load url", async () => {
    await landingPage.openUrl();
    expect(await landingPage.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });
  // it("Validating whether all the menu items are displayed", async()=>{

  //   let menuItems = [];
  //   let newArray=[];
  //   menuItems = await landingPage.$$navigationBar().map(item => item.getText())

  //       newArray = await menuItems.map(item=>item.replace("\nNEW",""))
  //   for (let item of newArray) {
  //     expect(await landingPage.$menuItem(item).isDisplayed()).withContext("menu item  is not displayed").toBe(true);

  //   }
  //         })

  it("click on a product and validate navigation ", async () => {
    await landingPage.clickOnProduct();
    expect(
      await productPage.$productPageHeading("Gojo Co-Ords Set for Men")
        .isDisplayed()).withContext("Header is not displayed").toBe(true);
});
it("Select the size of of the product and click on Add to cart Button.Validate navigation"),async()=>{
    await productPage.addToCart("S","32");
}

});
