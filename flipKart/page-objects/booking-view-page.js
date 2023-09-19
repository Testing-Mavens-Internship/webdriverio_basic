class BookingViewPage {
  constructor() {
    this.$clickonFlightDetail = (index) =>
      $(`(//span[text()="Flight Details"])[${index}]`);
    this.$$bookButton = () => $$(`//div[@class="_-5f1wK"]`);
    this.$bookFlight = (value) =>
      $(
        `//*[text()="${value}"]/ancestor::div[@class="_2IAB80"]/following-sibling::div[text()="Book"]`
      );
    this.$outputFlightDetails = (place) =>
      $(`//span[@class="_3eJLu6" and contains(text(),"${place}")]`);
    this.$filter = (time) => $(`//div[text()="${time}"]`);
    this.$$timeVerification = () => $$(`//div/span[@class="_2l73WS _1ljBda"]`);
    this.$$priceDisplayed = () => $$(`//div[@class="_3uUoiD"]`);
    this.$priceArrow = () => $(`//*[text()="PRICE"]`);
    this.$verifyPriceArrow = () =>
      $(`//*[local-name()='svg' and @class="_2Pcql8 _1lrvYG"]`);
  }

  /**
   * Method to filter the timing of flight and validating the same
   * @param {string} time
   * @param {string} departureTimeShift
   * @param {string} arrivalTimeShift
   * @returns
   */
  async filter(time, departureTimeShift, arrivalTimeShift) {
    await this.$filter(time).click();
    let verify = [];
    verify = await this.$$timeVerification().map((item) => item.getText());
    console.log(verify);
    for (let i = 1; i <= verify.length; i++) {
      if (verify[i] > departureTimeShift && verify[i] < arrivalTimeShift)
        return true;
      else return false;
    }
  }

  /**
   * Method to find if the prices are in sorted format
   * @returns
   */
  async sortPrice() {
    await this.$priceArrow().scrollIntoView();
    await this.$priceArrow().waitForClickable({ timeout: 5000 });
    await this.$priceArrow().click();
    await this.$verifyPriceArrow().waitForDisplayed({ timeout: 2000 });
    let price = [];
    price = await this.$$priceDisplayed().map((item) => item.getText());
    console.log(price);
    let priceInInt = [];
    for (let item of price) {
      priceInInt.push(parseInt(item.replace(/[₹,]/g, "")));
    }
    console.log(priceInInt);
    for (let i = 0; i < priceInInt.length; i++) {
      if (priceInInt[i] > priceInInt[i + 1]) return true;
      else return false;
    }
  }

  /**
   * Method to count the number of avilable flights
   * @returns
   */
  async getCount() {
    let output = [];
    output = await this.$$bookButton().map((item) => item.getText());
    let count = await output.length;
    return count;
  }

  /**
   * Method to click on every Flight details
   */
  async clickOnFlightDetail() {
    let a = await bookingViewPage.getCount();
    for (let i = 1; i <= a; i++) {
      await bookingViewPage.$clickonFlightDetail(i).click();
    }
  }

  /**
   * Method to Book a flight
   * @param {string} flightNumber
   */
  async bookFlight(flightNumber) {
    await this.$bookFlight(flightNumber).scrollIntoView({ block: "center" });
    await this.$bookFlight(flightNumber).click();
  }
}

export const bookingViewPage = new BookingViewPage();
