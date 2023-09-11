class CheckBoxPage{
    constructor(){
this.$header=()=>$('//div[@class="main-header"]')
this.$$text=()=>$$('//div[@class="display-result mt-4"]//span')
this.$homecheckBox=()=>$('//span[text()="Home"]')
this.$output=(value)=>$(`//span[text()="${value}"]`);
this.$waitText=()=>$('//span[text()="You have selected :"]')
this.$toggleHome=()=>$('//button[@class="rct-collapse rct-collapse-btn"]')
this.$$togglHomeValidation=()=>$$('//li[@class="rct-node rct-node-parent rct-node-collapsed"]/../..//li');
this.$subNodesOfHome=(name)=>$(`//li[@class="rct-node rct-node-parent rct-node-collapsed"]/ancestor::ol//span[text()="${name}"]`)
//this.$Desktop=()=>('//li[@class="rct-node rct-node-parent rct-node-collapsed"]/ancestor::ol//span[text()="Desktop"]')
this.$homeSubNodesToggle=(n)=> $(`//span[text()="${n}"]/ancestor::span[@class="rct-text"]//button`)
//this.$$desktopText=()=>$$('')
this.$subNodesOfDesktop=(name)=>$(`//span[text()="${name}"]`)
this.$subToggleOfDocuments=(name)=>$(`//span[text()="${name}"]/../..//button`)
this.$subNodesOfWorkSpaceAndOffice=(name)=>$(`//span[text()="${name}"]`)
    }
    async clickHomeCheckBox() {
        await this.$homecheckBox().scrollIntoView({block: 'center'});
       await this.$homecheckBox().click();
       await this.$waitText().waitForDisplayed({timeout:20000});
  
    }
    async clickOnHomeToggle(){
        await this.$toggleHome().scrollIntoView({block: 'center'});
        await this.$toggleHome().click()
        await browser.pause(1500);   
       
    }
    async unclickOnSUbnodesOfHome(a,b,c){
        await this.$subNodesOfHome(a).scrollIntoView({block: 'center'});
        await this.$subNodesOfHome(a).click()
        await this.$subNodesOfHome(b).scrollIntoView({block: 'center'});
        await this.$subNodesOfHome(b).click()
        await this.$subNodesOfHome(c).scrollIntoView({block: 'center'});
        await this.$subNodesOfHome(c).click()
        await browser.pause(1500);
    }
    async clickOnSUbnodesOfHome(name){
        await this.$homeSubNodesToggle(name).scrollIntoView({block: 'center'});
        await this.$homeSubNodesToggle(name).click()
   
        await browser.pause(1500);
    }
    async subToggleOfDocuments(name){
        //await this.$subToggleOfDocuments(name).scrollIntoView({block: 'center'});
        await browser.pause(2000)
        await this.$subToggleOfDocuments(name).isClickable();
        await this.$subToggleOfDocuments(name).click()   
    }
}
module.exports=

{

    checkBoxPage :new CheckBoxPage()

}