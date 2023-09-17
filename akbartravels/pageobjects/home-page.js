import Common from "./common.js";
class HomePage extends Common {
  constructor() {
    super();
    this.$selectFrom = () => $(`//h6[contains(text(),"Ahmedabad")]`);
    this.$validateFrom=()=>$(`//h6[contains(text(),"Mumbai")]`)
    this.$validateTo = ()=>$(`//h6[contains(text(),"Bangalore")]`)
    this.$selectFromAirport = ()=>$(`//strong[text()="BOM"]`)
    this.$selectTo = () =>$(`//h6[contains(text(),"Bangalore")]`)
    this.$selectToAirport = ()=>$(`//strong[text()="BLR"]`)

  }
  async bookFlightTickets(){
    await this.$selectFrom().waitForDisplayed({timeout:7000});
    await this.$selectFrom().click();
    await this.$selectFromAirport().waitForDisplayed({timeout:7000});
    await this.$selectFromAirport().click();
    await this.$selectTo().waitForDisplayed({timeout:7000});
    await this.$selectTo().click();
    await this.$selectToAirport().waitForDisplayed({timeout:7000});
    await this.$selectToAirport().scrollIntoView({block:'center'})
    await this.$selectToAirport().waitForClickable()
    await this.$selectToAirport().click();
  }
}
export const homePage = new HomePage();