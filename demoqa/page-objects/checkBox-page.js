class CheckBoxPage{
    constructor(){
this.$header=()=>$('//div[@class="main-header"]')
this.$$text=()=>$$('//div[@class="display-result mt-4"]//span')
this.$homecheckBox=()=>$('//span[text()="Home"]')
this.$output=(value)=>$(`//span[text()="${value}"]`);
this.$waitText=(a)=>$(`//span[text()="Home"]/ancestor::ol//span[text()="${a}"]`)
this.$toggleHome=()=>$('//button[@class="rct-collapse rct-collapse-btn"]')
this.$$togglHomeValidation=()=>$$('//li[@class="rct-node rct-node-parent rct-node-collapsed"]/../li');
this.$subNodesOfHome=(name)=>$(`//span[text()="${name}"]`)
this.$homeOutputText=(name)=>$(`//span[text()="${name}"]`)
this.$$outputText=()=>$$('//span[text()="You have selected :"]/../span')
this.$homeSubNodesToggle=(n)=> $(`//span[text()="${n}"]/ancestor::span[@class="rct-text"]//button`)
this.$output1=(name)=>$(`//span[text()="${name}"]`)
this.$subNodesOfDesktop=(name)=>$(`//span[text()="${name}"]`)
this.$subToggleOfDocuments=(name)=>$(`//span[text()="${name}"]/../..//button`)
this.$subNodesOfWorkSpaceAndOffice=(name)=>$(`//span[text()="${name}"]`)
}
/**
 * Clicks on the check box near Home
 */
    async clickHomeCheckBox() {
        await this.$homecheckBox().scrollIntoView({block: 'center'});
       await this.$homecheckBox().click();
       await this.$waitText("Desktop").waitForDisplayed({timeout:20000});
  
    }
    /**
     * Click on the expand icon near Home
     */
    async clickOnHomeToggle(){
        await this.$toggleHome().scrollIntoView({block: 'center'});
        await this.$toggleHome().click()
        await this.$waitText("Desktop").waitForDisplayed({timeout:20000});  
       
    }
/**
 * Click on the expand icon of all sub nodes of Home
 * @param {String} name 
 */
    async clickOnSUbnodesOfHome(name){
        await this.$homeSubNodesToggle(name).scrollIntoView({block: 'center'});
        await this.$homeSubNodesToggle(name).click()
   
        
    }
    /**
     * Click on the expand icon of all sub nodes of Documents
     * @param {} name 
     */
    async subToggleOfDocuments(name){
       
        await browser.pause(2000)
        await this.$subToggleOfDocuments(name).isClickable();
        await this.$subToggleOfDocuments(name).click() 
     
    }
    /**
     * Clicks on the check box near all the subnodes of Home node
     * @param {String} name 
     */
    async clickOncheckBoxOfSubNodesOfHome(name){
        
        await browser.pause(1500);
        await this.$subNodesOfHome(name).isClickable();
        await this.$subNodesOfHome(name).click()
        await this.$waitText("React").waitForDisplayed({timeout:20000});
   
        
    }
}
module.exports=

{

    checkBoxPage :new CheckBoxPage()

}