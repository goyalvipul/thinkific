# Cypress.Thinkific.SearchFunctionality.CucumbrTests

Setup Steps:

      1. Setup    
          
          npm install - As it includes the package.json which will install the initials to the machine on which it needs to be executed.
      
     2. All Done! Start Executing the testcase
     
          ./node_modules/.bin/cypress open
          Click on the module on the window which opens to run the tests.
          
# Test Cases Path:
thinkific/cypress/integration/SampleTest/CustomerUsingSearch.feature

# Framework Tech Stack
- Cypress - UI Automation
- BDD - Cucumber
- Language - JavaScript

# Why Cucumber: {Value Addition to the framework}
1. Used cucumber in the project, so as to make it better to understand what is been automated.
2. It helps to maps the Manual Test cases with Automation cases.
3. It also helps to understand important business level use cases, by the ones who are managerial stakeholders.


# Directory Structure
1. integration/common -
    1. contains all the common functions which can be used as per the page.
    2. Followed POM Methodology to structure the code for better understanding.

2. SampleTest/CustomerUsingSearch.feature
    1. Feature file which contains all the test cases which are automated.
    2. Gherkins is used to write the functional flows.

3. integration/support -
    1. Contains all the common interactions that can be done on the pages.
    2. Created Custom Methods, which are used to do the respective DOM interactions.
    3. Created type, click functions as a common place, to have better logging structure.

4. plugins -
    1. contains the cucumber plugin which helps to compile the gherkins code



# Tags usage
@positive, @negative
This can be executed using tags as well, forming groups of test cases.

# Parralel Execution
1. Tried coming up with parrallel execution process using cypress, but is not completely functional.
2. Added the required command and some dependencies, which can be modified when required.

