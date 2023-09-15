import Common from "./Common.js";
let location = "Chen";
let location2 = "Tamil Nadu, India";
class LandingPage extends Common {
  constructor() {
    super();
    this.$loginButton = () => $('//button[text()="Login "]');
    this.$logoValidation = () => $('//div[@class="pop_tle"]');
    this.$signUpButton = () => $('//a[@class="signup_btn"]');
    this.$registerValidation = () => $('//div[@class="pop_tle"]');
    this.$category = () => $('((//p[contains(text(),"Grocery")])[2])/..');
    this.$deliverylocation = () => $('//input[@id="searchlocation"]');
    this.$place = (location, location2) =>
      $(
        `//span[contains(text(),"${location}")]/../following-sibling::span[text()="${location2}"]`
      );
    this.$showBusinessButton = () => $('//span[text()="SHOW BUSINESS"]');
    this.$validationIcon = () => $('//h3[text()="MAX FASHIONS"]');
  }
  /**
   * Method to register new user
   */
  async register() {
    await this.$loginButton().click();
    await this.$logoValidation().waitForDisplayed({ timeout: 2000 });
    await this.$signUpButton().click();
    await this.$registerValidation().waitForDisplayed({ timeout: 2000 });
  }
  /**
   * Method to select category and location
   */
  async selectCategoryAndLocation() {
    await this.$deliverylocation().scrollIntoView();
    await this.$deliverylocation().setValue(location);
    await this.$place(location, location2).click();

    await this.$validationIcon().waitForDisplayed({ timeout: 3000 });
  }
}

export const landingPage = new LandingPage();
