class Billing {
    constructor() {
            this.$usereDetails = (id) => $(`//p[@id="${id}"]`)
            this.$$warnings = () => $$(`//strong[text()]`)
        }
        /**
         * enter the user detail value and verify it with warnings
         * @param {field id} id 
         * @param {value at place holder} value 
         */
    async billingValidation(id, value) {
        await this.$usereDetails(id).setValue(value)

    }
}
export const billing = new Billing();