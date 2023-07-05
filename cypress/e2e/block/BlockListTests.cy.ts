import BlockPage from "../../pagesobject/block/BlockPage";

const blockPage = new BlockPage();
describe("block list", () => {
  it("Full Checkout: Paid in advance", () => {
    blockPage
      .goToHomePage()
      .clickToBlockChainField()
      .clickToBlocksField()
      .verifyColumnName()
      .verifySortBtnEnable()
      .verifyDesiredPageNumberMatchWithDataInList();
  });
});
