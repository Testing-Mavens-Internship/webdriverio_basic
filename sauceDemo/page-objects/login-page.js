import Common from "./commonFIle-page.js";

class LoginPage extends Common{
constructor(){
    super();
    this.$credentials = (credentials) => $(`//input[@id="${credentials}"]`)

}

async loginToApplication(userName,passWord){
await this.$credentials("user-name").setValue(userName)
await this.$credentials("password").setValue(passWord)
await this.$credentials("login-button").click();
await this.$header().waitForDisplayed({ timeout: 2000 });
}


}

export const loginPage = new LoginPage()

