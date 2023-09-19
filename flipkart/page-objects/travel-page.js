import Common from "./common-page.js";
import testdata from "./../testdata/location.json" assert {type: "json"}

class Travel extends Common{
    constructor(){
        super()
        this.$mode = (mode)=>$(`//label[text()="${mode}"]/..//input`)
        this.$add = (choose)=>$(`(//div[text()="${choose}"]/../..//button)[2]`)
        this.$search= (search="SEARCH")=>$(`//span[text()="${search}"]`)
        this.$route = (route)=>$(`//div[@class="_3Jcym_"]//span[text()="${route}"]`)
        this.$selectField = (airport) => $(`//div[contains(text(),'${airport}')]/ancestor::div[@class="_3uA4ax"]`);
    }
    async setFrom(){
        await this.$mode("From").setValue(testdata.from)
        await this.$selectField(testdata.fromClick).click()
        await this.$mode("To").setValue(testdata.to)
        await this.$selectField(testdata.toClick).click()
        await this.$mode("Depart On").click()
        await this.$button(testdata.date).click()
        await this.$add("Adults").doubleClick()
        await this.$add("Children").doubleClick()
        await this.$button("Done").click()
        await this.$search().click()
        await this.$route("Kochi").waitForDisplayed({timeout:20000})
        await this.$route("Mumbai").waitForDisplayed({timeout:20000})
    }
}
export const travelPage = new Travel()