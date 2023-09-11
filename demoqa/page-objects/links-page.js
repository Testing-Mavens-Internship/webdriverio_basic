class LinkPage {
    constructor() {
        this.$clickElements = (elements) => $(`//ul[@class="menu-list"]//span[text()="${elements}"]`)
        this.$homeLink = () => $('//a[@id="simpleLink"]')
    }

    async clickOnLink() {
            await this.$clickElements("Links").scrollIntoView({ block: 'center' })
            await this.$clickElements("Links").click();
        }
        /**
         * click on home link
         */
    async clicOnHomeLink() {
        //await this.$homeLink().scrollIntoView({ block: 'center' })
        await this.$homeLink().click()
    }

}
export const linkPage = new LinkPage();