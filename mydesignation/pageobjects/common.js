export default class CommonPage {
    //locator
    constructor(){

  
      this.$header = () => $(`//div[@class="sober-container clearfix"]`);
      this.$selectItem=(link)=>$(`//a[@href="${link}"]/ancestor::div[@class="owl-item cloned"]`);
      this.$subHeader = (text) => $(`//h1[@class="product_title entry-title"][text()="${text}"]`);
   }
   async openUrl() {
    await browser.url('https://www.mydesignation.com/');
    await browser.maximizeWindow();
    await this.$header().waitForDisplayed({setTimeout:20000});
 }
 async selectItem(){
   await this.$selectItem("https://www.mydesignation.com/product/sukuna-co-ords-set-for-women/").scrollIntoView({block:'center'});
   await this.$selectItem("https://www.mydesignation.com/product/sukuna-co-ords-set-for-women/").waitForClickable();
   await this.$selectItem("https://www.mydesignation.com/product/sukuna-co-ords-set-for-women/").click()
}
}