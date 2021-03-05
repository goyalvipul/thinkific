
export {};
/**
* enter value in given text field/ textarea, located by given locator followed
* by given key
* 
* @param element
* @param value
*/


Cypress.Commands.add('EnterText', (element, value) => {
	if (element.includes('//')) {
		cy.log("Entering Text in Element-" + element + " and value-" + value)
		cy.xpath(element, {timeout: 20000}).then($element => {
			$element.css('border', '3px solid red')
		}).clear({force: true}).type(value).should('have.value', value);
	} else {
		cy.log("Entering Text in Element-" + element + " and value-" + value)
		cy.get(element, {timeout: 20000}).should('exist').should('be.visible').then($element => {
			$element.css('border', '3px solid red')
		}).clear({force: true
		}).focus().type(value).should('have.value', value)
	}

});


/**
* find and click on element in a list
* 
* @param element
* @param value
*/

Cypress.Commands.add('CheckElementInList', (element, value) => {
	var flag = false;
	if (element.includes('//')) {
		//cy.wait(1000)
		cy.xpath(element).then($element => {
			console.log($element)
			if ($element.text().includes(value)) {
				$element.css('border', '3px solid red')
				flag = true;
				return cy.wrap(flag)
			} else {
				return cy.wrap(flag);
			}

		});
	} else {
		//cy.wait(1000)
		cy.get(element).then($element => {
			console.log($element)
			if ($element.text().includes(value)) {
				$element.css('border', '3px solid red')
				flag = true;
				return cy.wrap(flag);
			} else {
				return cy.wrap(flag);
			}
		});
	}
})


/**
 * clicks on specified field (button,
 * link, menu etc.), identified by
 * locator
 * 
 * @param element
 */
Cypress.Commands.add('Click', (element) => {
	if (element.includes('//')) {
		cy.log("Clicking on  Element-"+element)
		cy.xpath(element,{timeout : 60000}).should('exist').should('be.visible').then($element => {
			$element.css('border', '3px solid red')

		}).click({ force: true })
	} else {
		cy.log("Clicking on  Element-"+element)
		cy.get(element,{timeout : 60000}).should('exist').should('be.visible').then($element => {
			$element.css('border', '3px solid red')

		}).click({ force: true })
	}
	Cypress.on('error,fail', (err, runnable) => {
		console.log("err :" + err)
		console.log("runnable :" + runnable)
		throw new Error("Failed to click with locator : \"" + element + "\"")
	});
});
