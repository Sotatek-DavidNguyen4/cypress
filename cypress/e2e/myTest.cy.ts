import LoginPage from "../pagesobject/LoginPage";

const loginPage = new LoginPage();
it("Full Checkout: Paid in advance", () => {
  loginPage
    .goToHomePage()
    .verifyPriceName()
    .clickToPriceField();
});
