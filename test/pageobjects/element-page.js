<<<<<<< HEAD
import { webTable } from "../pageobjects/web-table-page.js";

import Common from "./common.js";
class ElementPage extends Common{
    constructor() {
        super()
        this.$header = () => $('//div[@class="pattern-backgound playgound-header"]//div');
        this.$textBox = () => $('//div[@class="element-group"]//span[text()="Text Box"]');
        this.$headerTextBox = () => $('//div[@class="pattern-backgound playgound-header"]//div[text()="Text Box"]')
        this.$elementsTile = () => $('//div//h5[text()="Elements"]/ancestor::div[@class="card mt-4 top-card"]')
        
    }

    /**
     * click on the text box
     */
    async clickOnTextBox(){
        await this.$textBox().click();
        await this.$headerTextBox().waitForDisplayed({timeout:20000})
        
    }
    /**
     * click on web table
     */
    async clickOnWebTable(){
        await this.$tabButton("Web Tables").scrollIntoView();
        await this.$tabButton("Web Tables").waitForClickable({timeout:4000});
        await this.$tabButton("Web Tables").click();
        await webTable.$headerWebTable().waitForDisplayed({timeout:10000});

    }
    /**
     * click on radio button
     */
    async clickOnRadioButton(){
        await this.$tabButton("Radio Button").click();

    }
}


export const elementPage = new ElementPage();
=======

class ElementsPage{
    constructor()
    {
        this.$header = () => $('div.main-header', 'Elements');
        this.$textBoxTitle=()=>$(`//div[@class="main-header"][text()="Text Box"]`)
        this.$textBoxName=(title)=>$(`//ul[@class="menu-list"]//span[text()="${title}"]`);
        this.$setFullName=()=>$(`//input[@class=" mr-sm-2 form-control"]`)
        this.$setEmail=()=>$(`//input[@id="userEmail"]`)
        this.$setPermenantAddress=()=>$(`//textarea[@id="permanentAddress"]`)
        this.$setCurrentAddress=()=>$(`//textarea[@id="currentAddress"]`)
        this.$submitButton=()=>$(`//button[@id="submit"]`)
        this.$resultName=()=>$(`//p[text()="Adhithya Somaraj"]`)
        this.$resultEmail=()=>$(`//p[text()="adhithyasomaraj@gmail.com"]`)
        this.$resultCurrentAddress=()=>$(`//div[@class="border col-md-12 col-sm-12"]//p[text()="Adivakkal House Kanjiram p.o Kottayam"]`)
        this.$resultPermenantAddress=()=>$(`//p[text()="Adivakkal House Kanjiram p.o Kottayam"]`)
        

    }
    /**
     * 
     * @param {string} checkBoxTitle 
     */
    async clickOnTextBox(checkBoxTitle){
        await this.$textBoxName(checkBoxTitle).click();
        await this.$textBoxTitle().waitForDisplayed({setTimeout:30000})
        //await browser.pause(3000);
     
     }
     async setOnTextBoxField(){
        await this.$setFullName().setValue("Adhithya Somaraj");
        await this.$setEmail().setValue("adhithyasomaraj@gmail.com")
        await this.$setCurrentAddress().setValue("Adivakkal House Kanjiram p.o Kottayam")
        await this.$setPermenantAddress().setValue("Adivakkal House Kanjiram p.o Kottayam")
        await this.$textBoxName('Text Box').waitForDisplayed({setTimeout:20000})
       // await browser.pause(3000);
     }

     async submitTextBox(){
        await this.$submitButton().scrollIntoView({block: 'center'});
        await this.$submitButton().click()
        await this.$submitButton().waitForDisplayed({setTimeout:20000})
       // await browser.pause(3000);
     }

}
export const elementsPage = new ElementsPage()



//export default new LoginPage();
>>>>>>> 97b12fda27cce15c469fc3d81102a29a78d02333
