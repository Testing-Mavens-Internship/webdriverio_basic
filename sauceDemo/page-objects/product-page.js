import CommonPage from "./common-page.js";

class ProductPage extends CommonPage {
  constructor() {
    super();
    this.$sort = () => $(`//select[@class="product_sort_container"]`);
    this.$sortType = (type) => $(`//select[@class="product_sort_container"]//option[text() ='${type}']`);
    this.$$itemPrices = () => $$(`//div[@class="inventory_item_price"]`);
    this.$cartCount =() => $(`//div[@id="shopping_cart_container"]//span`);
    this.$price = (item) => $(`//div[contains(text(),'${item}')]/../../following-sibling::div//div`)
    this.$addToCart = (item) => $(`//div[contains(text(),'${item}')]/../../following-sibling::div//button`);
    this.$removeButton =(item) => $(`//div[contains(text(),'${item}')]/../../following-sibling::div//button[text()="Remove"]`);
    this.$cartIcon = () => $(`//div[@class="shopping_cart_container"]`);
    
  }
  /**
   * sort products
   * @param {string} value 
   */
  async sortProduct(value) {
    await this.$sort().click();
    await this.$sortType(value).click();
  }

  /**
   * check whether array is sorted or not
   * @param {number} array 
   * @returns
   */
  async isSorted(array) {
    let second_index;
    for (let first_index = 0; first_index < array.length; first_index++) {
      second_index = first_index + 1;
      if (array[second_index] - array[first_index] < 0) {
        return false;
      }
    }
    return true;
  }

  /**
   * add item to cart
   * @param {string} item 
   */
  async addToCart(item){
    await this.$addToCart(item).scrollIntoView({block : 'center'});
    await this.$addToCart(item).click();

  }
  /**
   * check cart icon count
   * @param {number} count 
   * @returns 
   */
  async checkCartCount(count){
    if(count ==1){
      return true;
    }
  }
  /**
   * go to cart page
   */
  async goToCart(){
    await this.$cartIcon().scrollIntoView({ block : 'center'});
    await this.$cartIcon().click();
  }
}

export const productPage = new ProductPage();
