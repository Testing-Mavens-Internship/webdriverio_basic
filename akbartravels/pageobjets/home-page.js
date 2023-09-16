import Common from "../pageobjets/common.js";
class HomePage extends Common {
  constructor() {
    super();
    this.$from = () => $('//li[@class="from"]//div[@class="ng-tns-c8-3"]');
    this.$message = () => $('//div[text()="Get Personalized Updates"]');
    this.$popUp = () => $('//button[@class = "No thanks"]');
    this.$search = (item) =>
      $(`//div[@class="mat-form-field-infix"]//input[@placeholder="${item}"]`);
    this.$option = (value) => $(`//li[@id="${value}"]`);
    this.$validate = (data, place) =>
      $(`//li[@id="${data}"]//h6[text()="${place}"]`);
    this.$date = (date) => $(`//li[@id="${date}"]`);
  }
  async clickOnFrom(locationFrom, locationTo) {
    if (this.$popUp().isDisplayed()) {
      await this.$popUp().click();
    }
    await this.$from().click();
    await this.$search("From").setValue(locationFrom);
    await this.$option("COK").click();
    await this.$search("To").setValue(locationTo);
    await this.$option("DXB").click();
    await this.$date("liOn").click();
  }
}
export const homePage = new HomePage();
