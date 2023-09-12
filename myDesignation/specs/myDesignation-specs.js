import { landingPage } from "../page-objects/landing-page.js";
describe("MYDESIGNATION automation",()=>{

it("Load url",async ()=>{
    await landingPage.openUrl();
    expect(await landingPage.$header().isDisplayed())
    .withContext("Expect header to be displayed")
    .toBe(true);
})
it("Validating whether all the menu items are displayed", async()=>{
    
  
  let menuItems = [];
  let newArray=[];
  menuItems = await landingPage.$$navigationBar().map(item => item.getText())

      newArray = await menuItems.map(item=>item.replace("\nNEW",""))
  for (let item of newArray) {
    expect(await landingPage.$menuItem(item).isDisplayed()).withContext("menu item  is not displayed").toBe(true);
    
  }
        })


})