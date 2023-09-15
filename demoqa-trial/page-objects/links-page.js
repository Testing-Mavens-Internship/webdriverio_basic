class Link {
    constructor() {
        this.$header = () => $(`//div[text()="Links"]`);
        this.$homeLink = () => $(`//a[@id ="simpleLink"]`);
    }

    /**
     * Click the link
     */
    async clickOnLink() {
        await this.$homeLink().click();
    }
}

export const linkPage = new Link();