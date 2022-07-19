describe('HomePage', () => {
  it('should have a useable search bar', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="ingredientSearchInputField"]').type('Tomate');
  });
});
