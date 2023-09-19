import CommonPage from "./common-page.js";

class TravelPage extends CommonPage {
  constructor() {
    super();
    this.$searchType = (type) => $(`//div[@class="_3ZcqzB"]//div[contains(text(),'${type}')]/../..//input`);
    this.$inputField = (value) => $(`//label[contains(text(),'${value}')]/..//input`);
    this.$selectField = (airport) => $(`//div[contains(text(),'${airport}')]/ancestor::div[@class="_3uA4ax"]`);
    this.$date = (month, date) => $(`//div[@class="_1oqlzu"][contains(text(),'${month}')]/ancestor::table//tbody//button[contains(text(),'${date}')]`);
    this.$cabin = (value) => $(`//div[contains(text(),'${value}')]`);
    this.$traveller = (ageGroup) => $(`//div[contains(text(),'${ageGroup}')]/../following-sibling::div//button[@class="_2KpZ6l _34K0qG _37Ieie"]`);
    this.$search = () => $(`//button//span[text()='SEARCH']`);
    this.$loadText = (text) => $(`//span[contains(text(),'${text}')]`)
  }
  /**
   * Method for selecting search type
   * @param {string} type
   */
  async clickOnSearchType(type) {
    await this.$searchType(type).waitForDisplayed({ timeout: 2000 });
    await this.$searchType(type).click();
  }
  /**
   * Method for filling travel details
   * @param {string} from 
   * @param {string} to 
   * @param {string} month 
   * @param {number} day 
   * @param {string} traveller 
   * @param {string} cabin 
   * @param {string} elementTodisplay
   */
  async fillUpDetails(from, to, month, day, traveller, cabin, elementTodisplay) {
    await this.$inputField("From").setValue(from);
    await this.$selectField(from).waitForClickable({ timeout: 2000 });
    await this.$selectField(from).click();
    await this.$inputField("To").setValue(to);
    await this.$selectField(to).waitForClickable({ timeout: 3000 });
    await this.$selectField(to).click();
    await this.$inputField("Depart On").click();
    await this.$date(month, day).click();
    await this.$traveller(traveller).click();
    await this.$cabin(cabin).click();
    await this.$button('Done').click();
    await this.$search().waitForClickable({ timeout: 3000 });
    await this.$search().click();
    await this.$loadText('Looking for flights...').waitForDisplayed({ timeout : 4000 });
  }
}
export const travelPage = new TravelPage();
