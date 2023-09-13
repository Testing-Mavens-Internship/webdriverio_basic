class landing {
    constructor(){
        this.$header = () => $('//a[@class="logo"]');
        this.$$category = (value) => $$(`//a[text()="${value}"]`);
        this.$nav = () => $(`//nav[@id="site-navigation"]`);
        this.$product = () => $('//a[@href="https://www.mydesignation.com/product/theyyam-tshirt/"]/ancestor::div[@class="owl-item cloned"]');
        this.$item = () => $('//h1[text()="Theyyam Tshirt – Kathakali Theyyam Fusion"]');
        this.$size = () => $('//span[text()="XS"]');
        this.$addCart = () => $('//button[@class="single_add_to_cart_button button alt"]');
        this.$added = () => $('//div[text()=" “Theyyam Tshirt – Kathakali Theyyam Fusion” has been added to your cart."]');
        this.$cartIcon = () => $('//div[@class="box-content"]//a[@href="https://www.mydesignation.com/cart/"]');
        this.$cartItem = () => $('//a[text()="Theyyam Tshirt - Kathakali Theyyam Fusion - XS"]');
    }
    /**
     * Launch url
     */
    async openUrl() {
        await browser.url('https://www.mydesignation.com/'); 
        await browser.maximizeWindow();
        await browser.pause(2000);
    }
    /**
     * Click on product
     */
    async clickOnProduct () {
        await this.$product().scrollIntoView({block : 'center'});
        await this.$product().waitForClickable();
        await this.$product().click();
        await browser.pause(2000);
    }
    /***
     * Click on item size
     */
    async clickOnsize() {
        //await this.$size().scrollIntoView({block : 'center'});
        await this.$size().click();
        await this.$addCart().click();
        
    }
    /**
     * Click on Cart icon
     */
    async clickOnCartIcon () {
        await this.$cartIcon().scrollIntoView( { block : 'start'} );
        await this.$cartIcon().click();
    }
}
export const home = new landing();