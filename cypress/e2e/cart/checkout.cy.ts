import { CatalogPage } from "../../page-objects/CatalogPage"

describe('Checkout flow', () => {

  const catalogPage = new CatalogPage()
  before(() => {
    cy.task('resetAllDBs')
  })

  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.loginUI(users.validUser.email, users.validUser.password)
    })
  })

  it('should add a book to the cart and proceed to checkout', () => {
    catalogPage.addFirstBookToCart()
    cy.get('[data-testid="cart-count-badge"]').should('contain', '1')
    catalogPage.addNBookToCart(2)
    catalogPage.addNBookToCart(3)
    cy.get('[data-testid="cart-count-badge"]').should('contain', '3')

    cy.get('[data-testid="cart-button"]').click()
    cy.url().should('include', '/cart')
    cy.get('[id^="cart-item-"]').should('have.length', 3)
    cy.get('[data-testid="cart-checkout"]').click()
    cy.get('[data-testid="checkout-confirm-payment"]').click()

    // verifica redirección a confirmación
    cy.url().should('include', '/payment/confirmed')
    cy.get('[data-testid="payment-confirmed-total"]').should('be.visible').and('contain', '$62,971')
  })
})
