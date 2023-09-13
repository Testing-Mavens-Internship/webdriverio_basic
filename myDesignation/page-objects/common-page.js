export default class CommonPage{
    constructor(){
        this.$logo = () => $(`//a[@class="logo"]`);
        this.$navbarElements =(elements) => $(`//ul[@id="menu-mobile-menu"][contains(.,'${elements}')]`);
        this.$selectItem = (item) => $(`//h3//a[contains(text(),'${item}')]/ancestor::div[@class="owl-item cloned"]`);
        this.$itemName = (item) => $(`//h1[contains(text(),'${item}')]`);
        this.$button = (value)  => $(`//button[text()='${value}']`);
        this.$cartIcon = () => $(`//li[@class="menu-item menu-item-cart"]//a`);

    }
    /**
     * load url of My Designation
     */
    async openUrl(){
        await browser.url('https://www.mydesignation.com/');
        await browser.maximizeWindow();
        await this.$logo().waitForDisplayed({ timeout: 2000 });

    }
}