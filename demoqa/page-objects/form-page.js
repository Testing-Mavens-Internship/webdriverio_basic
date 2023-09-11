class FormPage {

    constructor() {

        this.$header = () => $('div.main-header', 'Form');
       
        this.$sideBar2 = (sidetitle) => $(`//ul[@class="menu-list"]//span[text()="${sidetitle}"]`)

}
/** click on form tile 
 
*/
async clickOnTile(tileNameInPage) {

    //await this.$sideBar2(tileNameInPage).scrollIntoView({block: 'center'});

    await this.$sideBar2(tileNameInPage).waitForClickable(5000);

    await this.$sideBar2(tileNameInPage).click();
    

}
}


export const formPage = new FormPage();