import { loginPage } from "../page-object/login-page.js";
//import data from "../test-data/flight-details.json" assert { type: "json" };

let placeFrom="Bangalore";
let placeTo= "Cochin"

describe('Buy a flight ticket for 5 members in akbar travels page', () => {

    it('launch the url', async() => {
        await loginPage.openUrl();
        expect(await loginPage.$logo().isDisplayed()).withContext('Expect the header to be displayed').toBe(true);
        await loginPage.$radioButton("One Way").waitForDisplayed({timeout:40000});
        await loginPage.$radioButton("One Way").waitForClickable(40000);
    })

    // it('Fill the flight details', async() => {
    //     await loginPage.fillFlightDetails(placeFrom,placeTo);

    // })
})