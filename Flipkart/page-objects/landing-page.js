import Common from "./common.js";
class LandingPage extends Common {
  constructor() {
    super();
    //this.$travelButton=()=>$(`//span[text()="Travel"]`) // travel button
    this.$travelButton = () => $(`//img[@alt="Travel"]`); // travel button
    this.$closeLoginAlternate = () => $('//span[text()="✕"]');
    this.$travelHeader = () => $(`//div[@class="lAXZRO"][text()="Travel"]`);
  }
  /**
   * function for close the login popup
   */
  async clickOnCloseIcon() {
    let closeLogin = await this.$closeLogin().isClickable();
    if (closeLogin) {
      await this.$closeLogin().click();
    } else await this.$closeLoginAlternate().click();
  }
  /**
   * function for click on travel button
   */
  async clickOnTravelButton() {
    await this.$travelButton().click();
    await browser.pause(3000);
  }
}
export const landingPage = new LandingPage();
