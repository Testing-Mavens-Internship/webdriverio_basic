class FormsPage {
    constructor() {
        this.$header = () => $("div.main-header", "Forms");
        this.$header1 = () => $("div.main-header", "Practice Form");
        this.$sideMenu = (value) => $(`//span[text()="${value}"]`);
        this.$inputs = (text) => $(`//input[@placeholder="${text}"]`);
        this.$gender = (sex) => $(`//label[text()="${sex}"]`);
        this.$subjects = (subject) => $(`//div[contains(@class,"subjects")]//div[text()="${subject}"]`);
        this.$subjectClick = () => $('//div[contains(@class,"subjects")]//input');
        this.$hobbies = (hobbie) => $(`//input/..//label[text()="${hobbie}"]`);
        this.currentAddress = () => $('//div//textarea[@placeholder="Current Address"]');
    }

    /**
     * 
     * click on Practice form*/

    async clickOnPracticeForm() {
        await this.$sideMenu("Practice Form").scrollIntoView({ block: "center" });
        await this.$sideMenu("Practice Form").waitForClickable(5000);
        await this.$sideMenu("Practice Form").click();
        await this.$header1().waitForDisplayed({ timeout: 20000 });
    }

    /**

       * Enter details

       */

    async enterDetails() {
        await this.$inputs("First Name").setValue("Tester");
        await this.$inputs("Last Name").setValue("tester2");
        await this.$inputs("name@example.com").setValue("tester@gmail.com");
        await this.$gender("Male").click();
        await this.$inputs("Mobile Number").setValue(1234567890);
        await this.$subjectClick().scrollIntoView({ block: "center" });
        await this.$subjectClick().waitForClickable(5000);
        await this.$subjectClick().click();
        await this.$subjectClick().setValue("H");
        await this.$subjects("Hindi").waitForClickable(5000);
        await this.$subjects("Hindi").click();
        await this.$hobbies("Reading").click();
        await this.currentAddress().scrollIntoView();
        await this.currentAddress().setValue("tester, kochi, kerala, 680500");
    }
}

export const formsPage = new FormsPage();