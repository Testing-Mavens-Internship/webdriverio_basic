

class Add{
    constructor(){
    
        this.$product=()=>$('//a[@href="https://www.mydesignation.com/product/gojo-co-ords-set-for-men/"]/ancestor::div[@class="owl-item cloned"]');
        this.$sizeTshirt=()=>$(`//li/span[text()="S"]`);
        this.$sizeShorts=()=>$(`//li/span[text()="30"]`);
        this.$checkIfSelectedShorts=()=>$(`//li[contains(@class,"f-selected") and @data-value="S"]`)
        this.$checkIfSelectedTshirt=()=>$(`//li[contains(@class,"f-selected") and @data-value="30"]`)
        this.$addToCart=()=>$(`//button[@type="submit"]`);
        this.$headerCheck=()=>$(`//div[@class="box-content"]`);
        this.$viewCart=()=>$(`//a[@class="button wc-forward"]`);
        this.$headerCheckCArt=()=>$(`//li/a[text()="Shopping Cart"]`);
    }
    /**
     * Select the product
     */
    async product(){
        await this.$product().scrollIntoView({block: 'center'});
        await this.$product().waitForClickable();
        await this.$product().click();
    }
    /**
     * Select the size
     */
    async clickSize(){
        await this.$sizeTshirt().click();
        await this.$sizeShorts().click();
       
    }
    /**
     * Click on addtocart
     */
    async addToCart(){
        await this.$addToCart().click();
        await this.$headerCheck().waitForDisplayed({ timeout :2000});
    }
    /**
     * To view the Cart
     */
    async viewCart(){
        await this.$viewCart().click();
        await this.$headerCheckCArt().click();

    }
}
export const addProduct=new Add();