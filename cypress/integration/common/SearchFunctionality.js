import { When, Then, And } from "cypress-cucumber-preprocessor/steps";

And('User will navigate to the Instructors page', () => {
    cy.instructorPage()
})

And('User will perform search with {string} and value {string} and click Search Button', (searchType, value) => {
    cy.performSearch(value)
})

Then('Verify the count shown {string} after the search is performed', (count) => {
    cy.VerifyResultCount(count)
})

Then('Verify the page is rendered properly', () =>{
    cy.VerifyResultCount("1")
})

And('User edits the intructor name to {string}', (newname) => {
    cy.editInstructorName(newname)
})

Then('Verify no records are visible on the search page', () => {
    cy.verifySearchPageisBlank()
})

Then('Verify records are visible for this search', () => {
    cy.verifySomeRecordIsVisibleonSearchPage()
})

And('User goes back to instructors page', () => {
    cy.clickInstructorLink();
})