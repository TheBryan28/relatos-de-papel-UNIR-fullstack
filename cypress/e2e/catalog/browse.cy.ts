import { CatalogPage } from '../../page-objects/CatalogPage'

describe('Catalog', () => {
  const catalogPage = new CatalogPage()

  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.loginUI(users.validUser.email, users.validUser.password)
    })
  })

  it('should display books on load', () => {
    catalogPage.assertBooksVisible()
  })

  it('should filter books by search term', function () {
    cy.fixture('books').then((books) => {
      catalogPage
        .searchFor(books.existing.title)
        .assertBooksVisible(1)
    })
  })

  it('should add a book to the cart', () => {
    catalogPage.addFirstBookToCart()
    // verifica badge del carrito
    cy.get('[data-testid="cart-count-badge"]').should('contain', '1')
  })
})