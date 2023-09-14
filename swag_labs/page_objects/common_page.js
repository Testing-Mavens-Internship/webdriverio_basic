 export default class Common {
     constructor() {
         this.$header = () => $(`//div[text()="Swag Labs"]`)
         this.$button = (id) => $(`//input[@id="${id}"]`);
         this.$login = (credentilas) => $(`//input[@placeholder="${credentilas}"]`);
         this.$addButton = (id) => $(`//button[@id="${id}"]`)
     }

     /**
      * lanuch the web app
      */
     async openUrl() {
             await browser.url('https://www.saucedemo.com/')
             await browser.maximizeWindow();

         }
         /**
          * Login to the web page
          */
     async login() {
         await this.$login("Username").setValue("standard_user");
         await this.$login("Password").setValue("secret_sauce");
         await this.$button('login-button').click();
     }
 }