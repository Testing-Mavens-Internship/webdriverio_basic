class CheckBox {

    constructor() {
        this.$clickElements = (elements) => $(`//ul[@class="menu-list"]//span[text()="${elements}"]`)
        this.$toggleButton = (toggleButton) => $(`//span[text()="${toggleButton}"]/../preceding-sibling::button`)
        this.$checkBoxElements = (elements) => $(`//span[text()="${elements}"]/..//span[@class="rct-title"]`)
        this.$$output = () => $$(`//div[@class="display-result mt-4"]//span`);
        this.$selectedElemts = (item) => $(`//div[@id="result"]//span[contains(text(),'${item}')]`)

    }
    async clickOnCheckBox() {
            await this.$clickElements("Check Box").scrollIntoView({ block: 'center' })
            await this.$clickElements("Check Box").click();
        }
        /**
         * click on toglle button
         */

    async clickOnToggleButton() {
            let toggle = ["Home", "Desktop", "Documents", "Downloads", "WorkSpace", "Office"];
            for (let toggleElements = 0; toggleElements < toggle.length; toggleElements++) {
                await this.$toggleButton(toggle[toggleElements]).scrollIntoView({ block: 'center' });
                await this.$toggleButton(toggle[toggleElements]).waitForClickable({ timeout: 50000 });
                await this.$toggleButton(toggle[toggleElements]).click();
            }

        }
        /**
         * click on Chec kBox Home
         */
    async clickOnCheckBoxHome() {
        await this.$checkBoxElements('Home').click()
    }


}


export const checkBoxpage = new CheckBox();