export default class Common {
    constructor() {
            this.$header = () => $(`//div[@class="container-fluid"]`)
            this.$contactUsHeader = () => $(`(//a[contains(text(),"Contact Us")])`)
            this.$thankyouHeader = () => $('//h1[contains(text(),"THANK")]')

        }
        /**Load MavenKonnect URL */
    async loadUrl() {
        await browser.url('https://demotmwebsite.github.io/')
        await browser.maximizeWindow();
    }
}