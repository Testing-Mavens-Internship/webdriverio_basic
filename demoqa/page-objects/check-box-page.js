
class CheckBoxPage{
    constructor(){
        this.$header = () => $('//div[text()="Check Box"]');
        this.$toggleButton = (toggleButtonName) => $(`//span[text()="${toggleButtonName}"]/../preceding-sibling::button`);
        this.$checkBoxElements = (elementName) => $(`//span[text()="${elementName}"]/..//span[@class="rct-checkbox"]`);
        this.$$result = () => $$(`//div[@class="display-result mt-4"]//span`);
        this.$output = (value) => $(`//span[text()="${value}"]`);
    }

    /**
    * click on toggle button
    */

    async clickOnToggle(){
        let toggle = ["Home","Desktop", "Documents", "Downloads", "WorkSpace", "Office"];
        for(let a=0; a<toggle.length; a++){
            await this.$toggleButton(toggle[a]).scrollIntoView({block:'center'});
            await this.$toggleButton(toggle[a]).waitForClickable();
            await this.$toggleButton(toggle[a]).click();
        }
    }

    /**
     * click on Home
     */
    async clickOnHome(){
        await this.$checkBoxElements('Home').click();
    }

    /**
     * click on Desktop
     */
    async clickOnDesktop(){
        await this.$checkBoxElements('Desktop').click();
    }

    /**
     * click on Documents
     */
    async clickOnDocuments(){
        await this.$checkBoxElements('Documents').click();
    }

    /**
     * click on Downloads
     */
    async clickOnDownloads(){
        await this.$checkBoxElements('Downloads').click();
    }
}

export const checkBoxPage = new CheckBoxPage();