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
