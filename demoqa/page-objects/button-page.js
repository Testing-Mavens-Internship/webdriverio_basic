class Button {
    constructor() {
        this.$header = () => $(`//div[text()="Buttons"]`);
        this.$button = (type) => $(`//button[text()='${type}']`);
        this.$buttonDisplay = (result) => $(`//p[contains(text(),'${result}')]`);
    }

    /**
     * Double Click On button
     */
    async doubleClickOnButton() {
        await this.$button('Double Click Me').scrollIntoView();
        await this.$button('Double Click Me').doubleClick();
        await this.$buttonDisplay('double click').waitForDisplayed({ timeout: 10000 });
    }
    /**
     * Right Click On Button
     */
    async rightClickOnButton() {
        await this.$button('Right Click Me').click({ button: 'right' });
        await this.$buttonDisplay('right click').waitForDisplayed({ timeout: 10000 });
    }

    async dynamiClickOnButton() {
        await this.$button('Click Me').click();
        await this.$buttonDisplay('dynamic click').waitForDisplayed({ timeout: 10000 });
    }


}

export const buttonPage = new Button();