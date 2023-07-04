export default class WebApi {
  openAnyUrl(url) {
    cy.visit(url);
  }
  getPageTitle() {
    return cy.title;
  }
  clickToElementByXpath(locator) {

    cy.xpath(locator).click();
  }
  clickToElement(locator) {
    cy.get(locator).click();
  }
}
