class Button{

    constructor() {
        this.$header = (header) => $(`//div[text()="${header}"]`);
        this.$clickMe = (value) => $(`//div//button[text()="${value}"]`);
        this.$text =(note) => $(`//div//p[contains(text(),"${note}")]`);

    }

/**click on button tile */

    async clickOnButtonTile(){
        //await this.$header("Buttons").scrollIntoView({block:'center'});
        await this.$header("Buttons").waitForClickable();
        await this.$header("Buttons").click();
    }
    /**
     * 

 * click on buttons

 */

    async clickButtons(){

        await this.$clickMe("Double Click Me").waitForClickable({ timeout : 1000});
        await this.$clickMe("Double Click Me").doubleClick();

        await this.$clickMe("Click Me").waitForClickable();
        await this.$clickMe("Click Me").click();
        
        await this.$clickMe("Right Click Me").waitForClickable();
        await this.$clickMe("Right Click Me").click({button:"right"});


    }


}

 

export const buttonPage = new Button();

