import Common from "./common.js";

class Login extends Common {
    constructor() {
        super();
        this.$text = (value) => $(`//input[@id="${value}"]`);
    }

    /**
     * To log into the saucedemo page
     * @param {string} userName 
     * @param {string} password 
     */
    async ClickField(userName, password){
        await this.$text('user-name').setValue(userName);
        await this.$text('password').setValue(password);
        await this.$text('login-button').click();
    }
}

export const login = new Login()