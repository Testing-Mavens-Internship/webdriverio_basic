import Common from "./common-page.js";

class BillingDetailsPage extends Common {
  constructor() {
    super();

    this.$placeOrderButton = () => $('//button[text()="Place order"]');
    this.$secondaryHeader = () => $('//h3[text()="Billing Details"]');
    this.$$errorMessages = () => $$('//div[@class="box-content"]//li');
    this.$errorMessage = (name) =>
      $(
        `//li[text()= "The Phone Number should contain only 10 digits."or(text()=" is a required field." and strong["${name}"] )]`
      );
    this.$errorMessageNew = (name) => $(`//li//strong[text()="${name}"]`);
    this.$errorMessagePhone = (name) => $(`//li[text()="${name}"]`);
    this.$fillForm = (field) =>
      $(
        `//div[@class="woocommerce-billing-fields__field-wrapper"]//input[@id="${field}"]`
      );

    this.$stateField = (state) =>
      $(`//span//select[@id="billing_state"]/option[@value="${state}"]`);
    this.$dropDown = () => $('//select[@id="billing_state"]/..');
  }
  /**
   * Method to click on Place Order button without giving any input
   */
  async clickOnPaceOrder() {
    await this.$placeOrderButton().scrollIntoView();
    await this.$placeOrderButton().waitForClickable({ timeout: 2000 });
    await this.$placeOrderButton().click();
  }
  /**
   * Method click on Place Order button after filling one mandatory at a time
   * @param {string} field
   * @param {String} fname
   */
  async clickOnPlaceorderWithoutFIllingOneMandatoryFIeldEach(field, fname) {
    await this.$fillForm(field).setValue(fname);
    await this.$placeOrderButton().scrollIntoView();
    await this.$placeOrderButton().waitForClickable({ timeout: 20000 });
    await this.$placeOrderButton().click();
  }
  /**
   * Method to click on Place Order button after filling all the mandatory fields
   * @param {String} fname
   * @param {String} lname
   * @param {String} StreetAaddress1
   * @param {String} StreetAaddress2
   * @param {String townCity
   * @param {String} state
   * @param {String} pinCode
   * @param {String} phone
   * @param {String} email
   */
  async fillForm(
    fname,
    lname,
    StreetAaddress1,
    StreetAaddress2,
    townCity,
    state,
    pinCode,
    phone,
    email
  ) {
    await this.$fillForm("billing_first_name").setValue(fname);
    await this.$fillForm("billing_last_name").setValue(lname);
    await this.$fillForm("billing_address_1").scrollIntoView();
    await this.$fillForm("billing_address_1").waitForClickable({
      timeout: 2000,
    });
    await this.$fillForm("billing_address_1").setValue(StreetAaddress1);
    await this.$fillForm("billing_address_2").scrollIntoView();
    await this.$fillForm("billing_address_2").setValue(StreetAaddress2);
    await this.$fillForm("billing_city").scrollIntoView();
    await this.$fillForm("billing_city").waitForClickable({ timeout: 2000 });
    await this.$fillForm("billing_city").setValue(townCity);

    await this.$fillForm("billing_postcode").scrollIntoView();
    await this.$fillForm("billing_postcode").waitForClickable({
      timeout: 2000,
    });

    await this.$fillForm("billing_postcode").setValue(pinCode);
    await this.$fillForm("billing_phone").setValue(phone);
    await this.$fillForm("billing_email").setValue(email);
    await this.$dropDown().scrollIntoView();
    await this.$dropDown().waitForClickable({ timeout: 2000 });

    await this.$dropDown().click();
    await this.$stateField(state).scrollIntoView();
    await this.$stateField(state).click();
    await this.$placeOrderButton().scrollIntoView();
    await this.$placeOrderButton().waitForClickable({ timeout: 20000 });
    await this.$placeOrderButton().click();
  }
  /**
   * Method to verify the error messages after clicking on Place Order button after filling only state field
   * @param {String} state
   */
  async stateValidation(state) {
    await this.$dropDown().click();
    await this.$stateField(state).scrollIntoView();
    await this.$stateField(state).click();
    await this.$placeOrderButton().scrollIntoView();
    await this.$placeOrderButton().waitForClickable({ timeout: 20000 });
    await this.$placeOrderButton().click();
  }
}

export const billingDetailsPage = new BillingDetailsPage();
