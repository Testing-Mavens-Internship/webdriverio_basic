class Home {
  constructor() {
    this.$header = () => $('//a[@class = "logo"]');
    this.$particularProduct = () =>
      $(
        '//a[@href="https://www.mydesignation.com/product/gojo-co-ords-set-for-men/"]/ancestor::div[@class="owl-item cloned"]'
      );
    this.$productHeader = () => $('//h1[@class = "product_title entry-title"]');
    this.$sizeSelect = (size) => $(`//li[@data-value="${size}"]`);
    this.$addToCart = () =>
      $('//button[@class ="single_add_to_cart_button button alt"]');
    this.$headerAfterAdding = () => $('//div[@class = "box-content"]');
    this.$cartIcon = () => $('//a[@class = "cart-contents"]');
    this.$okClick = () => $('//div[@class = "mysticky-welcomebar-btn "]');
  }
  /**
   * Open the URL
   */
  async openUrl() {
    await browser.url("https://www.mydesignation.com/");
    await browser.maximizeWindow();
  }
  /**
   * Click on the ok button present on the screen for continuiong the page
   */
  async clickOnOk() {
    await this.$okClick().click();
  }
  /**
   * Clicking on Gojo Co-ORds product
   */
  async clickOnTheProduct() {
    // await this.$particularProduct().scrollIntoView({ block: "center" });
    await this.$particularProduct().waitForClickable();
    await this.$particularProduct().click();
    await browser.pause(2000);
  }
  /**
   * Click on the size which is required for purchasing and adding to cart
   */
  async clickOnSize() {
    await this.$sizeSelect("M").click();
    await this.$sizeSelect("32").click();
    await this.$addToCart().click();
  }
  /**
   * Click on the cart icon
   */
  async clickOnCartIcon() {
    await this.$cartIcon().click();
  }
}
export const homePage = new Home();
