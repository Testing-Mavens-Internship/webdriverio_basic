export default class CommonPage{
    constructor(){
        this.$title = () => $(`//a[@class="navbar-brand"]`);
        this.$header = (value) => $(`//h2[contains(text(),'${value}')]`);
        this.$button = (value) => $(`//button[contains(text(),'${value}')]`);
        this.$message = (message) => $(`//h1[text()='${message}']`);
        this.$navigationBar = (item) => $(`//a[@class="nav-link"][contains(text(),'${item}')]`)
    }
    /**
     * load url of Maven Konnect
     */
    async openUrl(){
        await browser.url('https://demotmwebsite.github.io/');
        await browser.maximizeWindow();
        await this.$title().waitForDisplayed({ timeout: 2000 });
    }
}