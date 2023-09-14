export default class Common{

constructor(){

this.$header=()=>$('//img[@class="img-responsive"]')
}

async loadPage(){
    await browser.url('https://edelivery.zoproduct.com/')
    await browser.maximizeWindow();
    await this.$header().waitForDisplayed({timeout:4000})

}

}