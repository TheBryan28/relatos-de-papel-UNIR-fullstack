export class CatalogPage {
  private selectors = {
    searchInput: '[data-testid="global-search"]',
    bookCard: '[data-testid^="book-card"]',
    addToCartBtn: '[data-testid^="add-to-cart"]',
    priceFilter: '[data-testid="price-range"]',
  }

  visit() {
    cy.visit('/catalog')
    return this
  }

  searchFor(term: string) {
    cy.get(this.selectors.searchInput).clear().type(term)
    return this
  }

  getBookCards() {
    return cy.get(this.selectors.bookCard)
  }

  addFirstBookToCart() {
    cy.get(this.selectors.addToCartBtn).first().click()
    return this
  }

  addNBookToCart(n: number) {
    cy.get(this.selectors.addToCartBtn).eq(n - 1).click()
    return this
  }

  assertBooksVisible(count?: number) {
    const cards = cy.get(this.selectors.bookCard).should('be.visible')
    if (count) cards.should('have.length', count)
    return this
  }
}