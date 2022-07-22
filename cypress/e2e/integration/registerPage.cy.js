describe('RegisterPage', () => {
  it('should display a useable register page', () => {
    cy.visit('http://localhost:3000/register');

    cy.get('[data-testid="inputusername"]').type('TestUsername');

    cy.get('[data-testid="inputemail"]').type('test@user.de');

    cy.get('[data-testid="inputpassword"]').type('safePassword123');

    cy.get('[data-testid="registerSubmitButton"]').click();
  });
});
