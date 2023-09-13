class LinkPage {
  constructor() {
    this.$header = () => $('//div[@class = "main-header"]');
    this.$links = () => $('//span[text()="Links"]');
    this.$homeLink = () => $('//a[@id = "simpleLink"]');
  }
  /**
   * Click on the link-side nav
   */
  async clickOnLink() {
    await this.$links().scrollIntoView();
    await this.$links().click();
  }
  /**
   * Click on the home-link
   */
  async clickOnNewHome() {
    await this.$homeLink().click();
  }
}

export const link = new LinkPage();
