describe('Daily Dose Frontend', () => {
  let baseUrl;

  before(() => {
    cy.task('startServer').then((url) => {
      baseUrl = url; // Store the base URL
      cy.visit(baseUrl);
    });
  });

  after(() => {
    return cy.task('stopServer'); // Stop the server after the report is done
  });

  it('should edit an existing resource', () => {
    // Click the edit button for the resource
    cy.get('button.btn-warning').filter(':contains("editNote")').last().click();
  
    // Update resource details
    cy.get('#editName').clear().type('Updated Title', { force: true });
    cy.get('#editLocation').clear().type('Updated Location', { force: true });
    cy.get('#editDescription').clear().type('Updated Description', { force: true });
    cy.get('#editOwner').clear().type('updated@example.com', { force: true });
  
    // Click the update resource button
    cy.get('#updateButton').click();
  
    // Verify the resource is updated in the table
    cy.get('#tableContent').contains('Updated Title').should('exist');
    cy.get('#tableContent').contains('Updated Description').should('exist');
    cy.get('#tableContent').contains('Updated Location').should('exist');
    cy.get('#tableContent').contains('updated@example.com').should('exist');
  
    // Verify the old resource no longer exists
    cy.get('#tableContent').contains('Test Resource').should('not.exist');
  });
  
});  