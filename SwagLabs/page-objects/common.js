export default class Common{
    constructor()
    //locators
    {
        this.$header=()=>$(`//div[text()="Swag Labs"]`) //Swag Labs Title
        this.$credentials=(inputs)=>$(`//input[@placeholder="${inputs}"]`)
        this.$loginButton=()=>$(`//input[@class="submit-button btn_action"]`)
        this.$productTitle=(title)=>$(`//span[text()="${title}"]`)
      //  this.$yourCartTitle=()=>$(`//span[text()="Your Cart"]`)



    }
    //Lauching the Swag Labs Website
    async launchUrl()
    {
        await browser.url('https://www.saucedemo.com/');
         await browser.maximizeWindow();
        await this.$header().waitForDisplayed({setTimeout:20000})
    }
    // Inputing the credentials and login to the website
    /**
     * 
     * @param {String} userName 
     * @param {String} password 
     */
    async login(userName,password)
    {
        await this.$credentials('Username').setValue(userName)
        await this.$credentials("Password").setValue(password)
        await this.$loginButton().click()
    }
    

}
