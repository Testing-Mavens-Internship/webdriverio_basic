import Common from "./common-page.js";
class CheckOut extends Common{
    constructor(){
        super();
        this.$checkOutHeader = () =>$('//span[@class ="title"]');
        this.$inputInformation = (information) =>$(`//input[@id = "${information}"]`);
        this.$overViewHeader = () =>$('//span[@class ="title"]');
        this.$itemName = () =>$('//div[@class="inventory_item_name"]');
        this.$itemPrice = () =>$('//div[@class = "inventory_item_price"]');
    }

    /**
     * Enterig the first name, last name and postal code and clicking continue
     */
    async inputInformation(){
        await this.$inputInformation('first-name').setValue('Sreerag');
        await this.$inputInformation('last-name').setValue('K');
        await this.$inputInformation('postal-code').setValue('682030');
        await this.$inputInformation('continue').click();
        await this.$overViewHeader();
    }
    /**
     * 
     * @returns {String}
     */
    async viewItem(){
    let itemName =  await this.$itemName().getText();
    return itemName;
    }

    async viewPrice(){
        let itemPrice = await this.$itemPrice().getText();
        return itemPrice;
    }
}
export const checkOut = new CheckOut();