<<<<<<< HEAD
// import { $ } from '@wdio/globals'
// import Page from './page.js';

// /**
//  * sub page containing specific selectors and methods for a specific page
//  */
// class LoginPage extends Page {
//     /**
//      * define selectors using getter methods
//      */
//     get inputUsername () {
//         return $('#username');
//     }

//     get inputPassword () {
//         return $('#password');
//     }

//     get btnSubmit () {
//         return $('button[type="submit"]');
//     }

//     /**
//      * a method to encapsule automation code to interact with the page
//      * e.g. to login using username and password
//      */
//     async login (username, password) {
//         await this.inputUsername.setValue(username);
//         await this.inputPassword.setValue(password);
//         await this.btnSubmit.click();
//     }

//     /**
//      * overwrite specific options to adapt it to page object
//      */
//     open () {
//         return super.open('login');
//     }
// }

// export default new LoginPage();
=======

/**
 * sub page containing specific selectors and methods for a specific page
 */
import { elementsPage } from '../pageobjects/element-page.js';
class LoginPage  {
    //locator
    constructor(){
  
      this.$tileName = (name) => $(`//div[@class="category-cards"]//h5[text()="${name}"]`);
      this.$header = () => $('div[id="app"] header img');
      
   }


async openUrl() {
   await browser.url('https://demoqa.com/');
   await browser.maximizeWindow();
   await this.$header().waitForDisplayed({setTimeout:20000})
}
/**
 * 
 * @param {string} tileNameInPage 
 */

async clickOnTile(tileNameInPage) {
   await this.$tileName(tileNameInPage).scrollIntoView({block: 'center'});
   await this.$tileName(tileNameInPage).click();
   await elementsPage.$header().waitForDisplayed({setTimeout:20000})
   //await browser.pause(3000);
}


  }  //methods
 // export const elementsPage = new ElementsPage()
  export const loginpage= new LoginPage();
>>>>>>> 97b12fda27cce15c469fc3d81102a29a78d02333
