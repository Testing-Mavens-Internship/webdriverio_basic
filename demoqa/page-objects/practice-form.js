class PracticePage {
  constructor() {
    this.$header = () => $("div.main-header", "Form");

    this.$sideBar2 = (sidetitle) =>$(`//ul[@class="menu-list"]//span[text()="${sidetitle}"]`);

    this.$inputField = (idValue) => $(`//input[@id="${idValue}"]`);

    this.$radioButtonField = (gender) => $(`//label[text()="${gender}"]`);

    this.$chooseFiles = () => $('//div[@class="form-file"]//input');
  }

  /** click on form tile 
*/
  async clickOnTile(tileNameInPage) {
    await this.$sideBar2(tileNameInPage).scrollIntoView({ block: "center" });

    await this.$sideBar2(tileNameInPage).waitForClickable(5000);

    await this.$sideBar2(tileNameInPage).click();
  }

 /** fill the form with input details */
  async fillFormData(firstName, lastName, email, gender) {
    await this.$inputField("firstName").setValue(firstName);

    await this.$inputField("lastName").setValue(lastName);

    await this.$inputField("userEmail").setValue(email);

    await this.$radioButtonField(gender).scrollIntoView({ block: "center" });

    await this.$radioButtonField(gender).waitForClickable({ timeout: 1000 });

    await this.$radioButtonField(gender).click();
  }

/**
 * Method to choose and upload a file
 */
async clickOnChooseFile(){
      await this.$chooseFiles().scrollIntoView({ block: "center" });
      await this.$chooseFiles().waitForClickable(5000);
      await this.$chooseFiles().click();
      //await browser.pause(10000);
}
}

export const practicePage = new PracticePage();
