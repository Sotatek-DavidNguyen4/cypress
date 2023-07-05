export default class WebApi {
  openAnyUrl(url) {
    cy.visit(url);
  }
  openPageTitle() {
    return cy.title;
  }
  clickToElementByXpath(locator) {

    cy.xpath(locator).click();
  }
  clickToElement(locator) {
    cy.get(locator).click();
  }

  verifyElementAttribute(locator:string,attributeName:string){
    cy.get(locator).should('have.attr',attributeName);
  }

  verifyElementAttributeValue(locator:string,attributeName:string,attributeValue:string){
    cy.get(locator)
      .invoke('attr', attributeName)
      .should('eq', attributeValue);
  }

  verifyListElementAttribute(locatorOfListElement:string,attributeName:string){
    cy.get(locatorOfListElement).each(($element) => {
      // Perform assertions on each element
      cy.wrap($element).should('have.attr', attributeName);
    });
  }

  verifyNumberOfListElement(locatorOfListElement:string,numberOfElement:number){
    cy.get(locatorOfListElement).each(($element) => {
      cy.wrap($element).should('have.length', numberOfElement);
    });
  }
}
