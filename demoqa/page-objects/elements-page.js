 class ElementsPage {
    constructor() {
        this.$header = () => $('div.main-header', 'Elements');
        this.$option = (option) => $(`//span[text()="${option}"]`);
    }

    async clickOnTextBox(){
        await this.$option('Text Box').click();
    }

    // async clickOnRadioButton(){
    //     await this.$option('Radio Button').click();
    // }
}
export const elementsPage = new ElementsPage()
