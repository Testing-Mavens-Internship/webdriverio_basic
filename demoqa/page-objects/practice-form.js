class PracticePage {

    constructor() {

        this.$header = () => $('div.main-header', 'Form');
       
        this.$sideBar2 = (sidetitle) => $(`//ul[@class="menu-list"]//span[text()="${sidetitle}"]`)
       
        this.$inputField = (idValue) => $(`//input[@id="${idValue}"]`);

        // this.$checkBoxField = (checkValue) => $(`//label[text()="${checkValue}"]/..`);

        this.$radioButtonField = (gender) => $(`//label[text()="${gender}"]`);

        // this.$textAreaField = () => $(`//label[text()="Current Address"]/../following-sibling::div/textarea`);
}
/** click on form tile 
 
*/
async clickOnTile(tileNameInPage) {

    await this.$sideBar2(tileNameInPage).scrollIntoView({block: 'center'});

    await this.$sideBar2(tileNameInPage).waitForClickable(5000);

    await this.$sideBar2(tileNameInPage).click();
    

}

async fillFormData(firstName, lastName,email,gender)

    {

        await this.$inputField('firstName').setValue(firstName);

        await this.$inputField('lastName').setValue(lastName);

        await this.$inputField('userEmail').setValue(email);

        await this.$radioButtonField(gender).scrollIntoView({ block : 'center'});

        await this.$radioButtonField(gender).waitForClickable({ timeout: 1000 });

        await this.$radioButtonField(gender).click();
        
}
}

export const practicePage = new PracticePage();