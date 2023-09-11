class LinkPage{
    constructor(){
this.$header=()=>$('//div[@class="main-header"]')
this.$link=()=>$('//a[@id="simpleLink"]')
this.$linkValidation=()=>$('//h5[text()="Elements"]')
    }
   async clickOnLink(){
    //await this.$link().scrollIntoView({block: 'center'});
    await browser.pause(2000)
    await this.$link().isClickable();
    await this.$link().click();
    let a= await browser.getWindowHandles()
    await browser.switchToWindow(a[1])
   // await browser.pause(2000)
   }
}

module.exports =
{
 linkPageObject : new  LinkPage 
}