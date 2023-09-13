export default class Common {
  constructor() {
    // this.$$header=()=>$$(`//nav[@id="site-navigation"]//a[@href="#"]`) // header(Men,Women,Kids,Accessories)
    //  this.$$header1=(id)=>$(`//ul[@id="menu-mobile-menu"]//li[@id="menu-item-'${id}'"]/a`)

    this.$header = () =>
      $(
        `//img[@src="https://www.mydesignation.com/wp-content/uploads/2023/08/logo-new.png"]/..`
      ); // Application Logo
    // this.$clickToProceedButton=()=>$(`//div[@class="wc-proceed-to-checkout"]//a`)// click to proceed button ()
  }

  //function for launching the url
  async launchUrl(id) {
    //let idArray=[336215,336219,336225,428630,336231,349595,349823,426162,426328]
    await browser.url("https://www.mydesignation.com/");
    await browser.maximizeWindow();
    // for(let i=0;i<=idArray.length;i++)
    // {
    //     id=idArray[i]
    //     await this.$$header1(id)
    // }
  }
}
