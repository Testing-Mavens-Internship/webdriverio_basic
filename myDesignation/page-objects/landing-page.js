import Common from "./common-page.js";

class LandingPage extends Common{
    constructor(){
        super();
this.$$navigationBar=()=>$$('//a[text()="MYDESIGNATION"]/ancestor::div//nav/ul/li')
this.$menuItem=(name)=>$(`//a[text()="MYDESIGNATION"]/ancestor::div//nav/ul/li/a[text()="${name}"]`)
    }

    async checkDisplayed(){
  


     
    }
}

export const landingPage= new LandingPage()