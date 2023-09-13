export default class Common{
    constructor(){
        /**
         * elements 
         */
        this.$mainHeader=()=> $ ('//a[@class="logo"]');

    }

    async openUrl() {
        await browser.url("https://www.mydesignation.com/");
        await browser.maximizeWindow();
      }
}