class CheckBox {
    constructor() {
        this.$header = () => $(`//div[text()="Check Box"]`);
        this.$checkBoxName = (names) => $(`//span[text()='${names}']`);
        this.$checkBox = (boxValue) => $(`//span[contains(text(),'${boxValue}')]/..`);
        this.$toggleIcon = (toggleValue) => $(`//span[text()="${toggleValue}"]/../preceding-sibling::button`);
        this.$displayedResult = (results) => $(`//span[contains(text(),'${results}')]`);
        this.$result = () => $(`//div[@id="result"]`);
    }

    /**
     * Click the check Box
     * @param {string} value 
     */
    async clickOnCheckBox(value) {
        await this.$checkBox(value).waitForClickable({ timeout: 1000 });
        await this.$checkBox(value).click();
    }

    /**
     * click the toggle icon
     * @param {string} value 
     */
    async clickOnToggleIcon(value) {
        await this.$toggleIcon(value).scrollIntoView({ block: 'center' });
        await this.$toggleIcon(value).click();
    }

    // async checkBoxIsSelected(value){

    //     return isChecked;
    // }

}

export const checkBoxPage = new CheckBox();