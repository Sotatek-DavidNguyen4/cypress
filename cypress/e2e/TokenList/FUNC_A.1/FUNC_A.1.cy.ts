import TokenListPage from "../../../pagesobject/TokenListPage";

const tokenListPage = new TokenListPage();
it("Full Checkout: Paid in advance", () => {
  tokenListPage.goToHomePage();

  
  tokenListPage.verifyButtonNextPage()
              .verifyButtonSortTotalTransaction()
              .verifyButtonSortTotalSuplly()
              .verifyButtonSortCreated();
});