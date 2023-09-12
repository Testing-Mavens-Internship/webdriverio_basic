import { launchPage } from "../pageobjects/landing-page.js";
import { elementPage } from "../pageobjects/01-element-page.js";
import { checkBox } from "../pageobjects/check-box-page.js";

let name = ["Desktop", "Documents", "Downloads", "Notes", "Commands", "WorkSpace", "Office", "Word File.doc",
    "Excel File.doc", "React", "Angular", "Veu", "Public", "Private", "Classified", "General"]
let textName = ["home", "desktop", "notes", "commands", "documents", "workspace", "react", "angular", 
"veu", "office", "public", "private", "classified", "general", "downloads", "wordFile", "excelFile"]

xdescribe('Demoqa website checkbox validation', () => {
    it('launch the url', async () => {
        await launchPage.openUrl();
        expect(await launchPage.$logo().isDisplayed()).withContext("Expect header to be displayed").toBe(true);
    });
    it('click on the element tile', async () => {
        await launchPage.clickOnTile("Elements");
        expect(await elementPage.$header().isDisplayed()).withContext("Expect the element page to load").toBe(true);

    });
    it('click on check box tile', async () => {
        await checkBox.clickOnCheckBoxTile();
        expect(await checkBox.$headerCheckBox().isDisplayed()).withContext("Expect header to be displayed").toBe(true);
    })
    it('click on toggle icon, checkbox  and validate the message', async () => {
        await checkBox.clickOnToggle();
        await checkBox.clickOnBox();
        for (let i = 0; i < name.length; i++) {
            expect(await checkBox.$subLabel(name[i]).isDisplayed()).withContext("Expect each folder to be displayed").toBe(true);
            expect(await checkBox.$check(name[i]).isDisplayed()).withContext("Expect clicked folder  to be displayed").toBe(true)
        }
        for(let j=0;j<textName.length;j++){
            expect(await checkBox.$boxText(textName[j]).isDisplayed()).withContext("Expect  message to be displayed").toBe(true)
        }

    })

})