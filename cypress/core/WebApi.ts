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
  clickToElement(locator:string) {
    cy.get(locator).click();
  }
}
