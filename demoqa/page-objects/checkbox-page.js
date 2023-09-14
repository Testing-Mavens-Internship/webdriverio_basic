class CheckBoxPage{
    constructor(){
        this.$header = (header) => $(`//div[text()="${header}"]`);
        this.$homecheckBox=()=>$('//span[text()="Home"]')
        this.$output=(value)=>$(`//span[text()="${value}"]`);
        this.$$result=()=>$$('//div[@class="display-result mt-4"]//span')
        this.$waitText=()=>$('//span[text()="You have selected :"]')
        this.$toggleHome=()=>$('//button[@class="rct-collapse rct-collapse-btn"]')
        this.$$togglHomeValidation=()=>$$('//li[@class="rct-node rct-node-parent rct-node-collapsed"]/../..//li');
        this.$subNodesOfHome=(name)=>$(`//li[@class="rct-node rct-node-parent rct-node-collapsed"]/ancestor::ol//span[text()="${name}"]`)
        this.$homeSubNodesToggle=(n)=> $(`//span[text()="${n}"]/ancestor::span[@class="rct-text"]//button`)
        this.$subNodesOfDesktop=(name)=>$(`//span[text()="${name}"]`)
        this.$subToggleOfDocuments=(name)=>$(`//span[text()="${name}"]/../..//button`)
        this.$subNodesOfWorkSpaceAndOffice=(name)=>$(`//span[text()="${name}"]`)
    }
    async clickHomeCheckBox() {
        await this.$homecheckBox().scrollIntoView({block: 'center'});
        await this.$homecheckBox().click();
        await browser.pause(2000)
    }

    async clickOnHomeToggle(){
        await this.$toggleHome().scrollIntoView({block: 'center'});
        await this.$toggleHome().click()
        await browser.pause(1500);      
    }

    
    

    async clickOnSUbnodesOfHome(option1,option2){
    await this.$homeSubNodesToggle(option1).scrollIntoView({block: 'center'});
    await this.$homeSubNodesToggle(option1).click()
    await this.$subToggleOfDocuments(option2).click()
    await this.$subNodesOfWorkSpaceAndOffice(option2).click()

     
        await browser.pause(1500);
    }
}
export const checkPage = new CheckBoxPage() 