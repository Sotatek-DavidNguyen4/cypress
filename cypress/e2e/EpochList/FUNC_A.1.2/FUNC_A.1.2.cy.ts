import EpochPanel from "../../../pagesobject/EpochPanel";

const epochPanel = new EpochPanel();
it.only("Check initalizing successfully when gridview have data: System display",{"retries": 0}, () => {
        // Set the viewport to match the screen size
    cy.viewport(1920,1080);

    epochPanel.goToHomePage();

    epochPanel.clickOnBlockChainDropDownList()
              .clickOnEpochPanel()
              .verifyEpochListDisplayed()
            
});