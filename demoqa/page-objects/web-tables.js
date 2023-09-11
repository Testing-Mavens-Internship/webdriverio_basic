class WebTablesPage {
    constructor() {
      this.$header = () => $('//div[@class ="main-header"]');
      this.$webTables = () => $('//span[text()="Web Tables"]');
      this.$Button = (name) => $(`//button[text()="${name}"]`);
      this.$registerationForm = () => $('//div[@id = "registration-form-modal"]');
      this.$input1 = (field) => $(`//input[@id="${field}"]`);
      this.$output = (value) => $(`//div[text()="${value}"]`);
      this.$editButton = () => $('//span[@id= "edit-record-4"]');
      this.$deleteButton = () => $('//span[@id= "delete-record-4"]');
      //this.$$cards = (cardName) => $$(`//span[contains(.,"${cardName}")]/..//ul//li[@class="btn btn-light "]//span`);
    }
  
    async clickOnWebTables() {
      await this.$webTables().click();
      await this.$webTables().waitForDisplayed({ timeout: 2000 });
    }
  
    async clickOnAdd() {
      await this.$Button("Add").click();
    }
  
    async fillForm(firstName, lastName, userEmail, age, salary, department) {
      await this.$input1(firstName).setValue("Hello");
      await this.$input1(lastName).setValue("World");
      await this.$input1(userEmail).setValue("tester@gmail.com");
      await this.$input1(age).setValue(22);
      await this.$input1(salary).setValue("1234");
      await this.$input1(department).setValue("tester");
    }
  
    async clickSubmit() {
      await this.$Button("Submit").click();
    }
  
    async clickEditIcon() {
      await this.$editButton().click();
    }
    async editForm(firstName, lastName, userEmail, age, salary, department) {
      await this.$input1(firstName).setValue("Hey");
      await this.$input1(lastName).setValue("Javascript");
      await this.$input1(userEmail).setValue("athira@gmail.com");
      await this.$input1(age).setValue(30);
      await this.$input1(salary).setValue("2452");
      await this.$input1(department).setValue("automation");
      await this.$Button("Submit").click();
    }
  
    async clickDeleteIcon() {
      await this.$deleteButton().click();
    }
  }
  
  module.exports = {
    webTablesPage: new WebTablesPage()
  }