import Common from "./common.js";

class TravelPage extends Common{
    constructor(){
        super();
        this.$from = () => $(`//input[@class="_1w3ZZo _1YBGQV _2EjOJB lZd1T6 _2vegSu _2mFmU7"]`);
        this.$fromOption = (place) => $(`//div[@class="_3uA4ax"]//span[text()="${place}"]`);
        this.$to = () => $(`//input[@class="_1w3ZZo _1YBGQV _2EjOJB lZd1T6 _2dqBfU _2mFmU7"]`);
        this.$date = (month, day) => $(`//div[contains(text(),"${month}")]/ancestor::thead/following-sibling::tbody//button[contains(text(),"${day}")]`);
        this.$travellers = (value) => $(`//div[@class="_1Di8FC"]//div[@class="_2zLOdI"][text()="${value}"]/../following-sibling::div//button[@class="_2KpZ6l _34K0qG _37Ieie"]`);
        this.$class = () => $(`//div[@class="_2jIO64 _1NhOqr"]//div[text()="Premium Economy"]`);
        this.$done = () => $(`//button[text()="Done"]`);
        this.$search = () => $(`//button[@class="_2KpZ6l _1QYQF8 _3dESVI"]`);
        this.$validate = (time,place) => $(`//div[text()="${time}"]/..//div[@class="_1OSdiW"]//input[contains(@value,"${place}")]`);
        this.$flightTime = (item) => $(`//div[text()="${item}"]`);
        this.$price = () => $(`//span[text()="PRICE"]`);
        this.$$place = () => $$(`//div[@class="_3qBKP_ _1Jqgld"]//input`);
        }
        /**
         * Method to enter from, to, date, class, and number of travellers
         * @param {string} place1 
         * @param {string} place2 
         * @param {string} month 
         * @param {string} date 
         */
    async enterLoaction(place1, place2, month, date) {
        await this.$from().setValue(place1);
        await this.$fromOption(place1).click();
        await this.$to().setValue(place2);
        await this.$fromOption(place2).click();
        await this.$date(month, date).click();
        await this.$travellers("Adults").doubleClick();
        await this.$travellers("Children").doubleClick();
        await this.$class().click();
        await this.$done().click();
        await this.$search().click();
    }
    async clickOnFlightTime() {
        await this.$flightTime("Morning").click();
        await this.$price().click();
    }
    async validate(){
        let a = await this.$$place().map(item=>item.getValue());
        console.log(a);
        for(item of a) {
            a=item.slice(1,2);
            console.log(a);

        }
    }
}
export const travelPage = new TravelPage()