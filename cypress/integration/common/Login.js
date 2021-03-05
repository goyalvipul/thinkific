import { When, Then,And } from "cypress-cucumber-preprocessor/steps";

When('Application is open in the browser', () => {
    cy.launchApplication()
})
When('User will login to the application', () => {
    cy.login()
});
