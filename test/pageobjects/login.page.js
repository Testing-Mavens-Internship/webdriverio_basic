
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
   await this.$header().waitForDisplayed({setTimeout:20000});
}
/**
 * 
 * @param {string} tileNameInPage 
 */

async clickOnTile(tileNameInPage) {
   await this.$tileName(tileNameInPage).scrollIntoView({block: 'center'});
   await this.$tileName(tileNameInPage).click();
   await elementsPage.$header().waitForDisplayed({setTimeout:20000});
   
}


  }  //methods

export default new LoginPage();
