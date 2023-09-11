class CommonPage {
    constructor() {
        this.$clickElements = (elements) => $(`//ul[@class="menu-list"]//span[text()="${elements}"]`)
        this.$headerText = (text) => $(`//div[text() = '${text}']`);
        this.$$firstColumn = () => $$('//div[@role="gridcell"][1]');
    }
}