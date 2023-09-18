import Common from "./common.js";

class LaunchPage extends Common {
  constructor() {
    super();
    this.$search = (value) => $(`//input[@name="${value}"]`);
    this.$location = (fromTo, place) =>
      $(
        `//label[contains(text(),"${fromTo}")]/../following-sibling::div//span[contains(text(),"${place}")]`
      );
   this.$travellers = (member)=> $(
      `(//div[contains(text(),"${member}")]/../following-sibling::div//button)[2]`
    );
    this.$departOn = (month, day) =>
      $(
        `//div[contains(text(),"${month}")]/ancestor::thead/following-sibling::tbody//button[contains(text(),"${day}")]`
      );
    this.$searchButton = () => $(`//button//span[contains(text(),"SEARCH")]`);
    this.$radioButton = (plan) =>
      $(`//div[contains(text(),"${plan}")]/../preceding-sibling::div`);
  }

  /**
   * Method to fill the flight details
   * @param {string} from
   * @param {string} to
   */
  async fillForm(from, to) {
    await this.$search("0-departcity").setValue(from);
    await this.$location("From", from).click();
    await this.$search("0-arrivalcity").setValue(to);
    await this.$location("To", to).click();
    await this.$search("0-datefrom").click();
    await this.$departOn("October 2023", "20").click();
    await this.$search("0-travellerclasscount").click();
    await this.$travellers("Adults").click();
    await this.$travellers("Adults").click();
    await this.$travellers("Children").waitForDisplayed({ timeout: "1000" });
    await this.$travellers("Children").click();
    await this.$travellers("Children").click();
    await this.$radioButton("Premium Economy").click();
    await this.$button("Done").click();
    await this.$searchButton().click();
    await this.$logo().waitForDisplayed({ timeout: "3000" });
  }
}
export const launchPage = new LaunchPage();
