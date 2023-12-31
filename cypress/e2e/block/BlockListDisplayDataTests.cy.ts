import BlockPage from "../../pagesobject/block/BlockPage";
const blockPage = new BlockPage();
describe("block list", () => {
    beforeEach(() => {
        blockPage
        .goToBlockPage(); 
      })
    it("Check display data of the 'block' list", () => {
        blockPage
        .verifyListBlockNoDisplay()
        .verifyListBlockHashDisplay()
        .verifyFormatBlockId()
        .verifyEpochDisplay()
    });

    it("Check display data of the 'block' list", () => {
        blockPage
        .verifyTransactionDisplay()
        .verifyFeeDisplay()
        .verifyOutputDisplay()
        .verifyQuickViewsDisplay();
    });
  });
  