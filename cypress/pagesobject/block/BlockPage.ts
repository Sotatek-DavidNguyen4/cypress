import WebApi from "../../core/WebApi";
import {BlockConstants} from "../../fixtures/constants/BlockConstants"
//locators
const blockChainLocator = "//img[@alt='Blockchain']//parent::div";
const blocksLocator = "//a[contains(@href,'/blocks')]";
const txtColumnName = "//th[contains(text(),'%s')]";
const transactionBtn = "//th[contains(text(),'Transactions')]//button";
const createdAtBtn = "//th[contains(text(),'Created At')]//button";
const listBlock = '//div[@data-testid="blocks-card"]//tbody//tr';
const numberBlockPerPage =
  '//span[contains(text(),"Per page")]//preceding-sibling::div/div';
export default class LoginPage extends WebApi {
  goToHomePage() {
    this.openAnyUrl("/");
    return this;
  }
  clickToBlockChainField() {
    this.clickToElementByXpath(blockChainLocator);
    return this;
  }

  clickToBlocksField() {
    this.clickToElementByXpath(blocksLocator);
    return this;
  }
  verifyColumnName() {
    this.isElementVisibleByXpath(txtColumnName, BlockConstants.COLUMN_NAME[0]);
    this.isElementVisibleByXpath(txtColumnName, BlockConstants.COLUMN_NAME[1]);
    this.isElementVisibleByXpath(txtColumnName, BlockConstants.COLUMN_NAME[2]);
    this.isElementVisibleByXpath(txtColumnName, BlockConstants.COLUMN_NAME[3]);
    this.isElementVisibleByXpath(txtColumnName, BlockConstants.COLUMN_NAME[4]);
    this.isElementVisibleByXpath(txtColumnName, BlockConstants.COLUMN_NAME[5]);
    this.isElementVisibleByXpath(txtColumnName, BlockConstants.COLUMN_NAME[6]);
    return this;
  }
  verifySortBtnEnable() {
    this.isControlEnabledByXpath(transactionBtn);
    this.isControlEnabledByXpath(createdAtBtn);
    return this;
  }
  verifyDesiredPageNumberMatchWithDataInList() {
    cy.xpath(numberBlockPerPage)
      .invoke("text")
      .then((text) => {
        cy.xpath(listBlock).should("have.length", text);
      });
    return this;
  }
}
