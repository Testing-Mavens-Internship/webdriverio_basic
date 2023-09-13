class Billing {
    constructor() {
        this.$usereDetails = (id) => $(`//p[@id="${id}"]`)
        this.$$warnings = () => $$(`//strong[text()]`)
    }
    async billingValidation(id, value) {
        await this.$usereDetails(id).setValue(value)

    }
}
export const billing = new Billing();