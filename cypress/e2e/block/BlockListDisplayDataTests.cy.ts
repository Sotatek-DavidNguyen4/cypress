import BlockPage from "../../pagesobject/block/BlockPage";
const blockPage = new BlockPage();
describe("block list", () => {
    it("Check display data of the 'block' list", () => {
        blockPage
        .goToBlockPage()
        .verifyListBlockNoDisplay()
        .verifyListBlockHashDisplay()
        .verifyFormatBlockId()
        .verifyEpochDisplay()
        .verifyTransactionDisplay()
        .verifyFeeDisplay()
        .verifyOutputDisplay()
        .verifyQuickViewsDisplay();
    });
  });
  