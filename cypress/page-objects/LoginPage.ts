export class LoginPage {
  // Selectores centralizados
  private selectors = {
    emailInput: '[data-testid="email"]',
    passwordInput: '[data-testid="password"]',
    submitBtn: '[data-testid="login-submit"]',
    errorMessage: '[data-testid="error"]',
  }

  visit() {
    cy.visit('/auth/login')
    return this
  }

  fillEmail(email: string) {
    cy.get(this.selectors.emailInput).clear().type(email)
    return this
  }

  fillPassword(password: string) {
    cy.get(this.selectors.passwordInput).clear().type(password)
    return this
  }

  submit() {
    cy.get(this.selectors.submitBtn).click()
    return this
  }

  // Método de alto nivel (el más usado en los tests)
  loginWith(email: string, password: string) {
    return this.visit().fillEmail(email).fillPassword(password).submit()
  }

  assertErrorVisible() {
    cy.get(this.selectors.errorMessage).should('be.visible').should('contain.text', 'incorrecto')
    return this
  }
}