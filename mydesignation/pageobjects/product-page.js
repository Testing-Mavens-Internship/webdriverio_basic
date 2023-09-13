class ProductPage {
  constructor() {
    /**
     * elements
     */
    this.$tsize = (size) =>
      $(`//label[text()="T-shirt Size"]/../..//span[text()="${size}"]//..`);
    this.$ssize = (size) =>
      $(`//label[text()="Shorts Size"]/../..//span[text()="${size}"]//..`);
    this.$addToCartButton = () =>
      $('//button[@class="single_add_to_cart_button button alt"]');
    this.$gotoCart = () => $('//li[@class="menu-item menu-item-cart"]/a');
    this.$productHeader = (value) => $(`//h1[contains(text(),"${value}")]`);
    this.$itemAddedMessage = () =>
      $('//div[@class="box-content" and contains(text(),"Gojo")]');
      this.$checkIfSelectedShorts=()=>$(`//li[contains(@class,"f-selected") and @data-value="S"]`)
        this.$checkIfSelectedTshirt=()=>$(`//li[contains(@class,"f-selected") and @data-value="30"]`)
  }
  /**
   *
   * @param {string} tsize
   * @param {number,string} ssize
   */
  async selectSize(tsize, ssize) {
    await this.$tsize(tsize).click();
    await this.$ssize(ssize).click();
  }

  /**item added to cart */
  async addToCart() {
    await this.$addToCartButton().click();
  }
  /**going to cart */
  async goToCart() {
    await this.$gotoCart().click();
  }
}
export const productPage = new ProductPage();
