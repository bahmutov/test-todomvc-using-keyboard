// load intelligent code completion for Cypress and the plugin
/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

import 'cypress-real-events/support'

Cypress.Commands.overwrite('click', () => {
  throw new Error('Cannot use click command during keyboard-only test')
})

const noLog = { log: false }

it('works using the keyboard only', () => {
  cy.visit('/')
  cy.contains('What needs to be done?')
    .should('be.visible')
    // for the purpose of the blog post
    // slow down the commands by inserting waits
    .wait(1000, noLog)

  // the first tab should bring us to the input element
  // but first we must be in the application's iframe
  cy.get('body').realClick().realPress('Tab')
  cy.focused().should('have.id', 'new-todo')

  // confirm the label is visible
  cy.wait(1000, noLog)
  cy.contains('label[for=new-todo]', 'What needs to be done?').should(
    'be.visible',
  )

  cy.focused().type('code app{enter}').type('ensure a11y{enter}')
  cy.get('#todo-list li').should('have.length', 2)
  cy.wait(1000, noLog)

  cy.log('**complete the first item**')
  cy.realPress('Tab')
  // confirm we are at "complete all" element
  cy.focused().should('have.id', 'toggle-all').wait(1000, noLog)
  cy.realPress('Tab')
  // confirm we are at the "complete first todo" element
  cy.focused()
    .should('have.attr', 'aria-labelledby', 'todo-0')
    .wait(1000, noLog)
    .realPress('Space')
  // confirm the todo was completed
  cy.focused()
    .should('be.checked')
    .and('have.attr', 'aria-checked', 'true')
    .wait(1000, noLog)
  // marks the item as completed
  cy.get('#todo-list li')
    .first()
    .should('have.class', 'completed')
    .wait(1000, noLog)

  cy.log('**delete the first item**')
  cy.realPress('Tab') // first goes to the item text field
    .wait(1000, noLog)
    .realPress('Tab') // then to the delete button
    .wait(1000, noLog)
  // we should be on the delete button
  cy.focused().should('have.attr', 'aria-label', 'Delete')
  cy.focused().should('have.attr', 'aria-describedby', 'todo-0')
  cy.focused().realPress('Space').wait(1000, noLog)
  // one item should be gone
  cy.get('#todo-list li').should('have.length', 1).wait(1000, noLog)

  cy.log('**edit an item**')
  // the focus goes to the next "delete" button
  cy.focused()
    .should('have.attr', 'aria-label', 'Delete')
    .wait(1000, noLog)
    // now do the tab in the reverse order to get to the edit field
    .realPress(['Shift', 'Tab'])
    .wait(1000, noLog)
  cy.focused()
    .should('have.attr', 'aria-describedby', 'clicktoedit')
    .realPress('Enter')
    .wait(1000, noLog)
  // retry the focused element until the app
  // starts editing the item
  cy.focused()
    .should('have.class', 'edit')
    .and('be.visible')
    // if we use cy.clear() the element is deleted by the application
    // .clear()
    // thus we clear it differently
    .type('{selectall}{backspace}')
    .wait(1000, noLog)
    .type('confirm by testing{enter}')

  cy.get('#todo-list li').should('have.length', 1)
  cy.contains('li', 'confirm by testing').should('be.visible').wait(1000, noLog)

  cy.log('**tab through filters**')
  cy.realPress('Tab') // at the delete button
    .wait(1000, noLog)
    .realPress('Tab') // at the "All" filter link
    .wait(1000, noLog)
    .realPress('Tab') // at the "Active" filter link
    .wait(1000, noLog)
    .realPress('Tab') // at the "Completed" filter link
  cy.focused().should('have.prop', 'nodeName', 'A')
  cy.focused()
    .should('have.text', 'Completed')
    .wait(1000, noLog)
    .realPress('Enter')

  // confirm the "Completed" view shows
  cy.log('**completed items view**')
  cy.hash().should('equal', '#/completed')
  cy.get('#todo-list li').should('have.length', 0)
  cy.contains('#todo-count', '1 item left')
  cy.focused().should('have.text', 'All').wait(1000, noLog)

  cy.log('**active items view**')
  cy.realPress('Tab')
  cy.focused()
    .should('have.text', 'Active')
    .wait(1000, noLog)
    .realPress('Enter')
  cy.hash().should('equal', '#/active')
  cy.get('#todo-list li').should('have.length', 1)
  // note: after clicking, the filter is highlighted
  // but the focus is still on the "All" link
  cy.focused().should('have.text', 'All')
  cy.contains('li[role=presentation] a', 'Active')
    .should('have.class', 'selected')
    .and('have.attr', 'aria-checked', 'true')
    .wait(1000, noLog)
})

it('cancels edit on escape', () => {
  cy.visit('/')
  cy.contains('What needs to be done?')
    .should('be.visible')
    // for the purpose of the blog post
    // slow down the commands by inserting waits
    .wait(1000, noLog)

  // the first tab should bring us to the input element
  // but first we must be in the application's iframe
  cy.get('body').realClick().realPress('Tab')
  cy.focused()
    .should('have.id', 'new-todo')
    .type('first{enter}')
    .wait(1000, noLog)
  cy.realPress('Tab')
    .wait(1000, noLog)
    .realPress('Tab')
    .wait(1000, noLog)
    .realPress('Tab')
    .wait(1000, noLog)
    // let's start editing
    .realPress('Enter')
    .wait(1000, noLog)
  cy.focused().should('have.value', 'first').type(' todo')
  cy.focused().should('have.value', 'first todo').wait(1000, noLog)
  // now Escape, use cy.type because cypress-real-events does not implement Escape yet
  cy.focused().type('{esc}')

  // the todo item is reverted to its original text
  // which we check using the regular expression
  cy.contains('#todo-list li .todoitem', /^first$/)
    .should('be.visible')
    .wait(1000, noLog)
})
