import Common from "./common-page.js";
import { contactPage } from "./contact-page.js";

class CheckOut extends Common{
    constructor(){
        super()
        this.$checkOutButton= ()=>$('//input[@value="Continue to checkout"]')
    }
    /**
     * Enter card details,name, and address to checkout
     */
    async addBillingDetails(){
        await contactPage.$inputField("Clinton Madhu").setValue("Joyal Francis")
        await contactPage.$inputField("clinton@example.com").setValue("joyal@test.com")
        await contactPage.$inputField("542 W. 15th Street").setValue("25/1461 Thekkeveettil House")
        await contactPage.$inputField("New York").setValue("Kochi")
        await contactPage.$inputField("NY").setValue("Kerala")
        await contactPage.$inputField("10001").setValue("682002")
        await contactPage.$inputField("Clinton").setValue("Joyal Francis TJ")
        await contactPage.$inputField("1111-2222-3333-4444").setValue("5634219867410900")
        await contactPage.$inputField("September").setValue("December")
        await contactPage.$inputField("2022").setValue("2023")
        await contactPage.$inputField("352").setValue("707")
        await this.$checkOutButton().click()


    }
}
export const checkOutPage = new CheckOut()