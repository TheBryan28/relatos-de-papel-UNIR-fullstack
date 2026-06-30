import { LoginPage } from '../../page-objects/LoginPage'

describe('Login', () => {
  const loginPage = new LoginPage()
  before(() => {
    cy.task('resetAllDBs')
  })

  beforeEach(() => {
    cy.fixture('users').as('users')
  })

  it('should login successfully with valid credentials', function () {
    loginPage.loginWith(this.users.validUser.email, this.users.validUser.password)
    cy.url().should('include', '/catalog')
  })

  it('should show error with invalid credentials', function () {
    loginPage
      .loginWith(this.users.invalidUser.email, this.users.invalidUser.password)
      .assertErrorVisible()
    cy.url().should('include', '/auth/login')
  })

  it('should redirect to login when accessing protected route unauthenticated', () => {
    cy.visit('/profile')
    cy.url().should('include', '/auth/login')
  })
})