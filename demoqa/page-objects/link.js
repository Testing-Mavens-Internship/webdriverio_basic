
class Link{

    constructor() {

        this.$header = (header) => $(`//div[text()="${header}"]`);
        this.$home = ()=> $('//a[@id = "simpleLink"]')
    }
 async homepage(){
    await this.$home().scrollIntoView({block: 'center'});
    await this.$home().click();
    
 }

}


export const link = new Link();