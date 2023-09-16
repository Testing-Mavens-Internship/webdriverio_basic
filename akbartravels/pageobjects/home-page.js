import Common from "./common.js";

class HomePage extends Common{
    constructor(){
        /**elements */
        super();
        this.$typeOfFlightRadioButton = (value)=> $ ( `//div[contains(text(),"${value}")]`);
        this.$destination = (value)=> $ (`//label[contains(text(),"To ")]//following-sibling::h6`)
    }
    /**method to select the type of flight */
    async typeOfFlight(){
        await this.$typeOfFlightRadioButton().click();
    }
    /**method to set the from and to destination */
    async setDestination(){
        await this.$destination("FROM").click();
        await this.$destination("FROM").setValue("Ahm")
        await this.$destination("To").click()
        await this.$destination("To").setValue("Del")

    }
}
export const homePage = new HomePage();