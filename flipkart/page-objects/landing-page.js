import Common from "./Common.js";

class LandingPage extends Common {
  constructor() {
    super();
    this.$travel = () => $('//img[@alt="Travel"]');
    //this.$travelHeader = () => $('//div[text()="Travel"]');
  }
  /**
   * Methos to click on travel option
   */
  async clickOnTravel(travelHeader) {
    await this.$travel().click();
    await travelHeader.waitForDisplayed({ timeout: 10000 });
  }
}
export const landingPage = new LandingPage();
