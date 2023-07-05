import WebApi from "../core/WebApi"

const blockchainDropdownList = "//span[text()='Blockchain']/..";
const epochPanel = "//span[text()='Epochs']/..";
const epochNumber = "tr[class] > td>a";
const dataInEpochTable = "tr[class]";
const pagingNavigator = "nav[aria-label]";
const textboxInputPage = "nav[aria-label] input";
const latestEpochNumber = "div[class='MuiBox-root css-h1m9wf']";
export default class EpochPanel extends WebApi{
  
  constructor(){
    super();
  }

  goToHomePage() {
    this.openAnyUrl("/")
    return this;
  }

  clickOnBlockChainDropDownList() {
    this.clickToElementByXpath(blockchainDropdownList);
    return this;
  }

  clickOnEpochPanel() {
    this.clickToElementByXpath(epochPanel);
    return this;
  }

  verifyEpochListDisplayed(){
    //verify epoch number is hyperlink
    this.verifyListElementAttribute(epochNumber,'href');

    //verrify block,Transaction Count,Rewards Distributed,Total Output,Start Timestamp,End Timestamp is text lable
    for (let i = 0; i < 49; i++) {
      cy.get(dataInEpochTable)
        .eq(i)
        .find('td>span')
        .each(($element) => {
          cy.wrap($element).should(($el) => {
            expect($el.text().trim()).not.to.be.empty;
          });
        });
    }

    //verify default input page is 1
    this.verifyElementAttributeValue(textboxInputPage,'value','1')
  
    //verify paging navigator
    let totalRecord :number;
    cy.scrollTo('bottom');
    cy.get(latestEpochNumber)
      .invoke('text')
      .then((text) => {
        totalRecord = parseInt(text) +1; 
        if(totalRecord>10){
          cy.verifyElementDisplayed(pagingNavigator);
        }else{
          cy.verifyElementNotDisplayed(pagingNavigator);
        }
       });

  return this;
  }
}
