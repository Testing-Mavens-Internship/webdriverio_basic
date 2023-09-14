
export default class Common{
    constructor(){
        this.$header = ()=>$(`//span[contains(text(),'MavenKonnect')]`)
    }
    
    /**
     * Function to load the website
     */
    async openUrl() {
        await browser.url('https://demotmwebsite.github.io/');
        await browser.maximizeWindow();
    }
}