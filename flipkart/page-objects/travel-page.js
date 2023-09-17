 import Common from "./common.js";
class TravelPage extends Common {
  constructor() {
    super();
    this.$from = () =>
      $('//input[@class="_1w3ZZo _1YBGQV _2EjOJB lZd1T6 _2vegSu _2mFmU7"]');
    this.$departure = (city) =>
      $(`//div[@class="_24hoQ2 _1EzOls"]/div//span[text()="${city}"]`);
    this.$to = () =>
      $('//input[@class="_1w3ZZo _1YBGQV _2EjOJB lZd1T6 _2dqBfU _2mFmU7"]');
    this.$arrival = (city) =>
      $(
        `//div[@class="_1fa_Yn HQlQNF nAiqQV _18Y7Fu"]/div//span[text()="${city}"]`
      );
    this.$departOn = () => $('//input[@name="0-datefrom"]');
    this.$date = (month, day) =>
      $(
        `//div[text()="${month}"]/ancestor::table[@class="aSgzfL"]//td//button[text()="${day}"]`
      );
    this.$totalCount = () => $('//input[@name="0-travellerclasscount"]');
    this.$adults = () =>
      $(
        '//div[text()="Adults"]/../following-sibling::div[@class="_1_YMe_"]//div[@class="VjWsXZ"]/button[@class="_2KpZ6l _34K0qG _37Ieie"]'
      );
    this.$children = () =>
      $(
        '//div[text()="Children"]/../following-sibling::div[@class="_1_YMe_"]//div[@class="VjWsXZ"]/following-sibling::div/button[@class="_2KpZ6l _34K0qG _37Ieie"]'
      );
    this.$cabinClass = () =>
      $('//div[text()="Economy"]/../../div[@class="_1XFPmK"]');
    this.$searchButton = () => $('//span[text()="SEARCH"]/..');
    }
    /**
     * method to fill fields
     * @param {string} from 
     * @param {string} to 
     * @param {string} month 
     * @param {string} day 
     */
    async searchFlight(from,to,month,day) {
    await this.$from().setValue(from);
    await this.$departure(from).click();
    await this.$to().setValue(to);
    await this.$arrival(to).click();
    await this.$departOn().click();
    await this.$date(month,day).click();
    await this.$totalCount().click();
    await this.$adults().click();
    await this.$adults().click();
    await this.$children().click();
    await this.$children().click();
    await this.$cabinClass().click();
    await this.$searchButton().click();
    await this.$departure(from).waitForDisplayed({ timeout: 2000 });
    await this.$arrival(to).waitForDisplayed({ timeout: 2000 });
  }
}

export const travelPage = new TravelPage();