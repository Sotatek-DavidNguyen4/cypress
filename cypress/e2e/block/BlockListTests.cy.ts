import BlockPage from "../../pagesobject/block/BlockPage";
const { viewportWidth, viewportHeight } = Cypress.config()
const blockPage = new BlockPage();
describe("block list", () => {
  it("Full Checkout: Paid in advance", () => {

    cy.log('Actual', viewportWidth, viewportHeight)
    blockPage
      .goToHomePage()
      .clickToBlockChainField()
      .clickToBlocksField()
      .verifyColumnName()
      .verifySortBtnEnable()
      .verifyDesiredPageNumberMatchWithDataInList();
  });
});
