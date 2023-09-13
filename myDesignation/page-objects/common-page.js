export default class Common{
    constructor(){
this.$header=()=>$('//a[text()="MYDESIGNATION"]')
    }
    /**
     * loads the url 
     */
    async openUrl() {
        await browser.url('https://www.mydesignation.com/');
        await browser.maximizeWindow();
        //browser.pause(2000)
        await this.$header().waitForDisplayed({ timeout: 2000 });
    }

}