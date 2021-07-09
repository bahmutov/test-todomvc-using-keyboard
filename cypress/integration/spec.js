/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

import 'cypress-real-events/support'

it('works using the keyboard only', () => {
  cy.visit('/')
  cy.contains('What needs to be done?').should('be.visible')

  // the first tab should bring us to the input element
  // but first we must be in the application's iframe
  cy.get('body').realClick().realPress('Tab')
  cy.focused()
    .should('have.id', 'new-todo')
    .type('code app{enter}')
    .type('ensure a11y{enter}')
  cy.get('#todo-list li').should('have.length', 2)

  cy.log('**complete the first item**')
  cy.realPress('Tab')
  cy.focused().should('have.id', 'toggle-all')
  cy.realPress('Tab')
  cy.focused().should('have.attr', 'aria-labelledby', 'todo-0').click()
  cy.focused().should('be.checked').and('have.attr', 'aria-checked', 'true')
  // marks the item as completed
  cy.get('#todo-list li').first().should('have.class', 'completed')

  cy.log('**delete the first item**')
  cy.realPress('Tab').realPress('Tab')
  // we should be on the delete button
  cy.focused().should('have.attr', 'aria-label', 'Delete')
  cy.focused().should('have.attr', 'aria-describedby', 'todo-0')
  cy.focused().click()

  cy.get('#todo-list li').should('have.length', 1)

  // the focus goes to the next "delete" button
  cy.focused()
    .should('have.attr', 'aria-label', 'Delete')
    // now do the tab in the reverse order to get to the edit field
    .realPress(['Shift', 'Tab'])
  cy.focused().should('have.attr', 'aria-describedby', 'clicktoedit').click()
  // retry the focused element until the app
  // starts editing the item
  cy.focused()
    .should('have.class', 'edit')
    .and('be.visible')
    // if we use cy.clear() the element is deleted by the application
    // .clear()
    // thus we clear it differently
    .type('{selectall}{backspace}')
    .type('confirm by testing{enter}')

  cy.get('#todo-list li').should('have.length', 1)
  cy.contains('li', 'confirm by testing').should('be.visible')

  cy.log('**tab through filters**')
  cy.realPress('Tab').realPress('Tab').realPress('Tab').realPress('Tab')
  cy.focused().should('have.prop', 'nodeName', 'A')
  cy.focused().should('have.text', 'Completed').click()

  // confirm the "Completed" view shows
  cy.log('**completed items view**')
  cy.hash().should('equal', '#/completed')
  cy.get('#todo-list li').should('have.length', 0)
  cy.contains('#todo-count', '1 item left')
  cy.focused().should('have.text', 'All')

  cy.log('**active items view**')
  cy.realPress('Tab')
  cy.focused().should('have.text', 'Active').click()
  cy.hash().should('equal', '#/active')
  cy.get('#todo-list li').should('have.length', 1)
  // note: after clicking, the filter is highlighted
  // but the focus is still on the "All" link
  cy.focused().should('have.text', 'All')
  cy.contains('li[role=presentation] a', 'Active')
    .should('have.class', 'selected')
    .and('have.attr', 'aria-checked', 'true')
})
