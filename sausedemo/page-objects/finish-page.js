import CommonPage from "./common-page.js";

class FinishPage extends CommonPage{
    constructor(){
        super();
        this.$thankYouMessage = () => $('//h2[text()="Thank you for your order!"]');
    }
}
export const finishPage = new FinishPage()