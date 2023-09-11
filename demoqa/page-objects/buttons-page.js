class ButtonPage{
    constructor(){
        this.$header= () => $('//div[@class = "main-header"]');
        this.$buttons = () =>$('//span[text()="Buttons"]');
        this.$buttonClick = (buttonName) =>$(`//button[text()="${buttonName}"]`);
        this.$displayMessage = (displayedMessage) => $(`//p[@id ="${displayedMessage}"]`) 
        
    }
    async clickOnButtonPage(){
        await this.$buttons().scrollIntoView();
        await this.$buttons().click();
    }
    async clickOnDoubleClick(){
        await browser.pause(2000);
        await this.$buttonClick("Double Click Me").doubleClick();
        await this.$displayMessage("You have done a double click").isDisplayed();
    }
    async clickOnRightClick(){
        await this.$buttonClick("Right Click Me").click({ button: 'right' });
        await this.$displayMessage("You have done a right click").isDisplayed();
        await browser.pause(2000);
    }
    async simpleClick(){
        await browser.pause(2000);
        await this.$buttonClick("Click Me").click();
        await this.$displayMessage("You have done a dynamic click").isDisplayed();
    }
}
export const buttonPage =new ButtonPage()
