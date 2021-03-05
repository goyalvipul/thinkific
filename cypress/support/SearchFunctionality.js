var locators = {

    searchField: "#instructor-search>div>input#q",
    searchButton: "a#btn-search",
    clearSearchButton: "a#btn-clear-search",

    firstNameColumn: "//tbody/tr/td[1]",
    editButtonSearchPage: "//a[contains(text(),'EDIT')]",

    editNameField: "input#instructor_first_name",
    saveButtonEditPage: "(//h1[contains(text(), 'Edit instructor')])[2]/following-sibling::div/button",
    instructorLink: "//h6//a[@href='/manage/instructors' and contains(text(),'Instructors')]",
}


Cypress.Commands.add('instructorPage', () => {
    cy.wait(2000)
    cy.visit('https://vipul-s-school-6359.thinkific.com/manage' + '/instructors')
})

Cypress.Commands.add('enterTextInSearchField', (value) =>{
    cy.EnterText(locators.searchField, value)
})

Cypress.Commands.add('editInstructorName', (updatedName) => {
    cy.Click(locators.editButtonSearchPage)
    cy.wait(1000)
    cy.EnterText(locators.editNameField, updatedName)
    cy.Click(locators.saveButtonEditPage)
})

Cypress.Commands.add('clickInstructorLink', () => {
    cy.Click(locators.instructorLink)
    cy.wait(1000)
})

Cypress.Commands.add('clickSearchButton', () =>{
    cy.Click(locators.searchButton)
})


Cypress.Commands.add('verifySearchPageisBlank', () => {
    cy.CheckElementInList(locators.firstNameColumn, "You do not currently have any instructors").should('be.true')
})

Cypress.Commands.add('verifySomeRecordIsVisibleonSearchPage', () => {
    cy.CheckElementInList(locators.firstNameColumn, "You do not currently have any instructors").should('be.false')
})

Cypress.Commands.add('performSearch', (value) => {
    cy.EnterText(locators.searchField, value)
    cy.wait(2000)
    cy.Click(locators.searchButton)
    cy.wait(2000)
})

/**
 * Verify the result count shown post a search is performed
 * 
 * @param count result count shown
 */
Cypress.Commands.add('VerifyResultCount', (count) => {
    cy.wait(2000)
    if (locators.firstNameColumn.includes('//')) {
        cy.xpath(locators.firstNameColumn, { timeout: 20000 }).should('have.length', count)
    } else {
        cy.get(locators.firstNameColumn, { timeout: 20000 }).should('have.length', count)
    }
})
