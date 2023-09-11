import { landingPage } from "../page-objects/landing-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { webTablepage } from "../page-objects/web-tables-page.js";
let firstName = "tester1"
let lastName = "tester2"
let email = "tester@mail.com"
let age = '23'
let salary = '200000'
let department = "automation"




xdescribe("Demo QA Application Web Table automation", () => {
    it("load the demo qa url", async() => {
        await landingPage.openUrl();
        expect(await landingPage.$header().isDisplayed())
            .withContext("Expect header to be displayed")
            .toBe(true);

    });

    it("Click on the elements tile and verify the navigation", async() => {
        await landingPage.clickOnTile("Elements");
        expect(await elementsPage.$header())
            .withContext("Expect header to be displayed")
            .toBeDisplayed();

    });

    it("Click on Webtable", async() => {
            await webTablepage.clickOnWebtable();
            expect(await webTablepage.$webTable())
                .withContext("Expect WebTable  Page to be redirected")
                .toBeDisplayed();
        })
        /**
         * Click on add button
         */
    it("Click On Add", async() => {
        await webTablepage.clickOnAdd();
        expect(await webTablepage.$addButton())
            .withContext("Expect Add button to be clicked")
            .toBeDisplayed();
    });
    /**
     * filling the field values in the registration form
     */
    it("Fill the Fileds In the registration form", async() => {
        await webTablepage.fillRegistrationForm(firstName, lastName, email, age, salary, department);
        expect(await webTablepage.$validate(firstName).isDisplayed()).toBe(true)
        expect(await webTablepage.$validate(lastName).isDisplayed()).toBe(true)
        expect(await webTablepage.$validate(email).isDisplayed()).toBe(true)
        expect(await webTablepage.$validate(age).isDisplayed()).toBe(true)
        expect(await webTablepage.$validate(salary).isDisplayed()).toBe(true)
        expect(await webTablepage.$validate(department).isDisplayed()).toBe(true)


    })

    it('Editing the details and verifying', async() => {
        await webTablepage.edit('tester3', 'tester4', 'ww.@gamail.com', '33', '12342', 'manual');
        expect(await webTablepage.$validate('tester3').isDisplayed()).toBe(true)
        expect(await webTablepage.$validate('tester4').isDisplayed()).toBe(true)
        expect(await webTablepage.$validate('ww.@gamail.com').isDisplayed()).toBe(true)
        expect(await webTablepage.$validate('33').isDisplayed()).toBe(true)
        expect(await webTablepage.$validate('12342').isDisplayed()).toBe(true)
        expect(await webTablepage.$validate('manual').isDisplayed()).toBe(true)

    })
    it("Clicking on delete button", async() => {
        await webTablepage.delete();
        expect(await webTablepage.$deleteButton().waitForDisplayed({ timeout: 5000, reverse: true }))

    })

});