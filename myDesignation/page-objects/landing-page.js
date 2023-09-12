import Common from "./common-page.js";

class LandingPage extends Common{
    constructor(){
        super();
this.$$navigationBar=()=>$$('//a[text()="MYDESIGNATION"]/ancestor::div//nav/ul/li')
this.$menuItem=(name)=>$(`//a[text()="MYDESIGNATION"]/ancestor::div//nav/ul/li/a[text()="${name}"]`)
this.$productSelected=()=>$('//a[@href="https://www.mydesignation.com/product/gojo-co-ords-set-for-men/"]/ancestor::div[@class="owl-item cloned"]')
    }

    async clickOnProduct(){
        //await this.$productSelected({ timeout: 30000 });
await this.$productSelected().scrollIntoView()
await this.$productSelected().waitForClickable({ timeout: 2000 });
//await this.$productSelected().isClickable();
  await this.$productSelected().click();
  browser.pause(2000);
  
     
    }
}

export const landingPage= new LandingPage()