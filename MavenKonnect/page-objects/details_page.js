class Details {
    constructor() {
            this.$userDetails = (details) => $(`//input[@placeholder="${details}"]`)
            this.$send = () => $('//button[contains(text(),"SEND")]')
        }
        /**
         * Entering the User Details
         */
    async enterUserDetails() {
        await this.$userDetails("Full Name ").setValue('Tester1');
        await this.$userDetails('Email').setValue('tester@sample.com');
        await this.$userDetails('Phone number').setValue('1234567891');
        await this.$userDetails('Message').setValue('message hai')
        await this.$send().click();
    }
}
export const details_page = new Details();