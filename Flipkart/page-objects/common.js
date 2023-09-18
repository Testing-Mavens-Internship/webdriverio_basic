export default class Common{
    constructor(){
        this.$mainHeader=()=>$(`//a[@href="/"]`) //Flipkart logo
}
async launchUrl(){
    await browser.url("https://www.flipkart.com/")
        await browser.maximizeWindow();
        
        
}
}