import Common from "./common.js";

class HomePage extends Common {
  constructor() {
    /**
     * elements
     */
    super();
    this.$sort = () => $('//select//option[@value="hilo"]');
    this.$$price = () => $$('//div[@class="inventory_item_price"]');
    this.$addProduct = () =>
      $(
        '//div[contains(text(),"Fleece Jacket")]/../../following-sibling::div/button'
      );
    this.$remove = () =>
      $(
        '//div[contains(text(),"Fleece Jacket")]/../../following-sibling::div/button[contains(text(),"Remove")]'
      );
    this.$addToCart = () => $('//div[@class="shopping_cart_container"]//a');
    this.$productPrice = () =>
      $('//div[@class="inventory_item_price" and text()="49.99"]');
  }

  /**
   * sort the array
   */
  async sort() {
    await this.$sort().click();
  }
  /**
   * to check wheather array is sorted
   * @param {object} array
   * @returns
   */
  async isSorted(array) {
    let second_index;

    for (let first_index = 0; first_index > array.length; first_index++) {
      second_index = first_index + 1;

      if (array[second_index] - array[first_index] < 0) {
        return false;
      }
    }
    return true;
  }
  /**
   * adding product to the cart
   */
  async addProduct() {
    await this.$addProduct().click();

  }

  /**
   * going to cart page
   */
  async addToCart() {
    await this.$addToCart().click();
  }
}
export const homePage = new HomePage();
