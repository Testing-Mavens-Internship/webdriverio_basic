import { home } from "../page-object/home.js";
describe("Automation the sauce demo website", () => {
  it("load the saucedemo qa url", async () => {
    await home.openUrl();
    expect(await home.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });
});
