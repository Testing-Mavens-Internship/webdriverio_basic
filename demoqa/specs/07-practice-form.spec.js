import { openingPage } from "../page-objects/opening-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { practiceFormPage } from "../page-objects/practice-form-page.js";

let firstName = "Fathima";
let lastName = "Hanan";
let email = "hanan@gmail.com";
let gender = "Female";
let mobile = 9188826401;
let dob = "28 Jul 2000";
let subject = "Computer Science";
let hobby = "Music";
let address = "Mariam Veettil, Koyilandy, Kozhikode";
let city = "Kozhikode";
let state = "Kerala";

xdescribe("Demo QA Application Practice Form automation", () => {
    it("load the demo qa url", async () => {
        await openingPage.openUrl();
        expect(await openingPage.$header().isDisplayed())
            .withContext("Expect header to be displayed")
            .toBe(true);
    });

    it("Click on the elements tile and verify the navigation", async () => {
        await openingPage.clickOnTile("Elements");
        expect(await elementsPage.$header())
            .withContext("Expect header to be displayed")
            .toBeDisplayed();
    });

    it("Click on the elements drop down list", async () => {
        await elementsPage.clickOnList("Forms");
        expect(await elementsPage.$collapsedList().isDisplayed())
            .withContext("Expect list of Forms to be displayed")
            .toBe(true);
    });

    it("Click on the Practice Form  and verify the navigation", async () => {
        await elementsPage.clickOnSubList("Practice Form");
        expect(await practiceFormPage.$header())
            .withContext("Expect practice Form header to be displayed")
            .toBeDisplayed();
    });

    it("Fill up Form datas", async () => {
        await practiceFormPage.fillFormData(
            firstName, lastName,
            email, gender, mobile, dob,
            subject, hobby,
            address, city, state);
    })

})