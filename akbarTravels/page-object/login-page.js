import Common from "./common.js";


class LoginPage extends Common{
    constructor(){
        super();
        this.$radioButton =(value) => $(`//div[contains(text(),"${value}")]/ancestor::label//div[contains(@class,"inner")]`)
        this.$SearchFrom =(value) => $(`//input[@placeholder="${value}"]`)
        this.$location =(place) => $(`//h3[contains(text(),"${place}")]`)
    }
    /**
     * Method to click on the one way radio button
     */
    async fillFlightDetails(){
        await this.$radioButton("One Way").click();
       // await this.$SearchFrom("From").setValue(placeFrom);
        //await this.$location(placeFrom).click();
        //await this.$SearchFrom("To").setValue(placeTo)
    }

}
export const loginPage = new LoginPage()