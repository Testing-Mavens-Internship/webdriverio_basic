import Common from "./common-page.js";

class ProductPage extends Common{
    constructor(){
        super()
        this.$productName = ()=>$('//h1[text()="Gojo Co-Ords Set for Men"]')
        this.$selectProduct = (select)=>$(`//span[text()="${select}"]`)
        this.$addToCartButton = ()=>$('//button[text()=" Add to cart "]')
        this.$cart = (product)=>$(`//a[text()="${product}"]`)
    }
    /**
     * Used to select sizes and add product to cart
     */
    async addToCart(){
        await this.$selectProduct("M").waitForClickable({timeout: 20000});
        await this.$selectProduct("M").click()
        await this.$selectProduct("30").waitForClickable({timeout: 20000});
        await this.$selectProduct("30").click()
        await this.$addToCartButton().scrollIntoView({block:'center'})
        await this.$addToCartButton().waitForClickable({timeout: 20000});
        await this.$addToCartButton().click()
        await this.$cart("View cart").scrollIntoView({block:'center'})
        await this.$cart("View cart").waitForClickable({timeout: 20000});
        await this.$cart("View cart").click()
        await browser.pause(5000)
    }
}

export const productPage = new ProductPage()