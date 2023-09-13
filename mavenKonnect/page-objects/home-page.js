import CommonPage from "./common-page.js";

class HomePage extends CommonPage {
  constructor() {
    super();
    this.$contactButton = () => $(`(//a[contains(text(),'Contact Us')])[2]`);
    this.$cartIcon =() => $(`//a//i[@class="fa fa-cart-plus"]`);
  }
  /**
   * method to click on Contact us Button
   */
  async clickOnContactUs(){
    await this.$contactButton().click();
  }
  /**
   * method to click cart icon
   */
  async clickOnCartIcon(){
    await this.$cartIcon().click();
  }
  /**
   * method to click home page navigaion
   */
   async clickOnHome(){
    await this.$navigationBar('Home').click();
    await this.$title().waitForDisplayed({ timeout : 2000});
   }
}
export const homePage = new HomePage();
