/// <reference types="cypress" />
describe('Test in website', () => {

  beforeEach(() => {
    cy.visit("/")
  })

  it('test post', () => {
    cy.get('#cy_post-click-open').click()
    cy.get('div').first().should("contain", 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    cy.get('div').first().should("contain", "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto")
    cy.get('div').first().should("contain", 'Comentários...')
    cy.get('#cy_post-click-close').click()
  })

  it('test user', () => {
    cy.get('#cy_user-click-open').click()
    cy.get('div').first().should("contain", 'Leanne Graham')
    cy.get('div').first().should("contain", "Email: Sincere@april.biz")
    cy.get('div').first().should("contain", "Número: 1-770-736-8031 x56442")
    cy.get('#cy_user-click-close').click()
  })
})
