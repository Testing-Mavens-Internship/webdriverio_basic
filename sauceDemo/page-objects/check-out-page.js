import Common from "./common-page.js";
class CheckOut extends Common {
  constructor() {
    super();
    this.$inputInformation = (information) =>
      $(`//input[@id = "${information}"]`);
    this.$itemName = () => $('//div[@class="inventory_item_name"]');
    this.$itemPrice = () => $('//div[@class = "inventory_item_price"]');
    this.$buttonFinish = () => $('//button[@id = "finish"]');
  }

  /**
   * Enterig the first name, last name and postal code and clicking continue
   */
  async inputInformation() {
    await this.$inputInformation("first-name").setValue("Sreerag");
    await this.$inputInformation("last-name").setValue("K");
    await this.$inputInformation("postal-code").setValue("682030");
    await this.$inputInformation("continue").click();
  }
  /**
   * Viewing the item name which is being checked out
   * @returns {String}
   */
  async viewItem() {
    let itemName = await this.$itemName().getText();
    return itemName;
  }
  /**
   * Viewing the price of the item which is being checked out
   * @returns {number}
   */
  /**
   * View the item price
   * @returns itemPrice
   */
  async viewPrice() {
    let itemPrice = await this.$itemPrice().getText();
    return itemPrice;
  }
}
export const checkOut = new CheckOut();
