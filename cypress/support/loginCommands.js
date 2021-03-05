var loginLocator = {
    usernameField: "input#email",
    passwordField: "input#password",
    loginBtn: "//button[@type='submit']"
}


Cypress.Commands.add('launchApplication', () => {
    cy.visit('')
})

Cypress.Commands.add("login", () => {
    cy.EnterText(loginLocator.usernameField, Cypress.env('QA_Env').Username)
    cy.EnterText(loginLocator.passwordField, Cypress.env('QA_Env').Password)
    cy.Click(loginLocator.loginBtn)
});
