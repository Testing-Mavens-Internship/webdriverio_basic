import { elementsPage } from "../page-objects/elements-page.js";
class CheckBox {
  constructor() {
    this.$header = (header) => $(`//div[text()="${header}"]`);
    this.$box = () =>
      $('//span[text()="Home"]/..//span[@class="rct-checkbox"]');
    this.$description = (notes) => $(`//span[text()="${notes}"]`);
    this.$toggle = (options) =>
      $(`//span[text()="${options}"]/../preceding-sibling::button`);
    this.$viewtext = () => $('//span[@class="rct-text"]/../ol');
  }
  async boxCheck() {
    await this.$box().click();
    // await this.$description().waitForDisplayed({timeout: 20000});
  }

  async togglebutton() {
    let b = [
      "Home",
      "Desktop",
      "Documents",
      "Downloads",
      "WorkSpace",
      "Office",
    ];

    for (let item = 0; item < b.length; item++) {
      await this.$toggle(b[item]).scrollIntoView({ block: "center" });
      await this.$toggle(b[item]).waitForClickable();
      await this.$toggle(b[item]).click();
    }
  }
}

export const checkBox = new CheckBox();
