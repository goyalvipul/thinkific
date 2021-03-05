@thinkific
Feature: Search Functionality

    @positive
    Scenario: Customer should be able to search using First Name from Search Page both Exact and Similar matches
        Given Application is open in the browser
        When User will login to the application
        And User will navigate to the Instructors page
        And User will perform search with "First Name" and value "Matthew" and click Search Button
        Then Verify the count shown "2" after the search is performed
        And User will perform search with "First Name" and value "Mat" and click Search Button
        Then Verify the count shown "3" after the search is performed
        
        
    @positive
    Scenario: Customer should be able to search using Last Name from Search Page both Exact and Similar matches
        Given Application is open in the browser
        When User will login to the application
        And User will navigate to the Instructors page
        And User will perform search with "Last Name" and value "son" and click Search Button
        Then Verify the count shown "3" after the search is performed
        And User will perform search with "Last Name" and value "Anderson" and click Search Button
        Then Verify the count shown "1" after the search is performed


    @positive
    Scenario: Customer should be able to search using Title from Search Page both Exact and Similar matches
        Given Application is open in the browser
        When User will login to the application
        And User will navigate to the Instructors page
        And User will perform search with "Title" and value "Instructor" and click Search Button
        Then Verify the count shown "3" after the search is performed
        And User will perform search with "Title" and value "Senior Instructor" and click Search Button
        Then Verify the count shown "2" after the search is performed


    @negetive
    Scenario: Page should render properly without any error, if Customer puts in any incorrect value or symbol
        Given Application is open in the browser
        When User will login to the application
        And User will navigate to the Instructors page
        And User will perform search with "First Name" and value "*" and click Search Button
        Then Verify the page is rendered properly
        And User will perform search with "Last Name" and value "&" and click Search Button
        Then Verify the page is rendered properly
        And User will perform search with "First Name" and value "&nbsp" and click Search Button
        Then Verify the page is rendered properly
        And User will perform search with "Title" and value " Anderson" and click Search Button
        Then Verify the page is rendered properly
        

    @positive
    Scenario: Data Modification: Modified/Updated data should be indexed in the search properly
        Given Application is open in the browser
        When User will login to the application
        And User will navigate to the Instructors page
        And User will perform search with "First Name" and value "Mattew_Updated" and click Search Button
        Then Verify no records are visible on the search page
        And User will perform search with "First Name" and value "Mattew" and click Search Button
        Then Verify records are visible for this search
        And User edits the intructor name to "Mattew_Updated"
        And User goes back to instructors page
        And User will perform search with "First Name" and value "Mattew_Updated" and click Search Button
        Then Verify records are visible for this search
        And User edits the intructor name to "Mattew"
        And User goes back to instructors page
