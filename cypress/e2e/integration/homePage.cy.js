describe('HomePage', () => {
  it('should have a useable search bar', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="ingredientSearchInputField"]').type('Tomate');

    cy.get('[data-testid="ingredientTag"]').should('not.exist');
    cy.get('[data-testid="addIngredientButton"]').click();
    cy.get('[data-testid="ingredientTag"]').should('be.visible');

    cy.get('[data-testid="ingredientSearchInputField"]').type('Knoblauch');

    cy.get('[data-testid="excludeIngredientButton"]').click();

    cy.get('[data-testid="searchRecipeButton"]').click();

    cy.get('[data-testid="recipePreviewSpaghetti Bolognese"]').should('be.visible');
  });
});
