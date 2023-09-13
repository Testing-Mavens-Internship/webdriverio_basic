import { landingPage } from "../page-objects/landing-page.js";
import { formPage } from "../page-objects/form-page.js";
import { practicePage } from "../page-objects/practice-form.js";
xdescribe("Demo QA Application Form page automation", () => {
  it("load the demo qa url", async () => {
    await landingPage.openUrl();
    expect(await landingPage.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });
  it("Click on the Form tile and verify the navigation", async () => {
    await landingPage.clickOnTile("Forms");
    expect(await formPage.$header("Forms").isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("Click on the  Practice form sidebar and verify the navigation", async () => {
    await formPage.clickOnTile("Practice Form");
    expect(await formPage.$header("Practice Form").isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("Enter input fields", async () => {
    let firstName = "Devika";
    let lastName = "ss";
    let email = "devika@example.com";
    let gender = "Male";
    await practicePage.fillFormData(firstName, lastName, email, gender);

    expect(await practicePage.$inputField("firstName").getValue())
      .withContext("Expect first name to be displayed")
      .toBe(firstName);
    expect(await practicePage.$inputField("lastName").getValue())
      .withContext("Expect Last name to be displayed")
      .toBe(lastName);
    expect(await practicePage.$inputField("userEmail").getValue())
      .withContext("Expect email to be displayed")
      .toBe(email);
    expect(await practicePage.$radioButtonField("Male").isDisplayed())
      .withContext("Expect radio to be clicked")
      .toBe(true);
  });
});
