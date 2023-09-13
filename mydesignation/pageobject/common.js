class LoginPage{
    constructor(){
        this.$headerTitle=()=>$(`//div/header[@class="site-header"]`);
        this.$orderName=()=>$(`//h1[text()="Gojo Co-Ords Set for Men"]`);
    }
    /**
     * To load the url
     */
    async openUrl(){
        await browser.url('https://www.mydesignation.com/');
        await browser.maximizeWindow();
    }
}
export const landingPage=new LoginPage();