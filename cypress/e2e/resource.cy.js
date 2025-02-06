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

  // Test for successful note update
  it('should update an existing resource', () => {
    cy.visit(baseUrl);
    // Click the edit button for editing the note
    cy.get('button.btn-warning').filter(':contains("edit")').last().click();

    // Update Note details
    cy.get('#editTitle').clear().type('Updatedd Notess', { force: true });
    cy.get('#editDescription').clear().type('Updatedd Descriptionn', { force: true });
    cy.get('#editPriority').select('High Priority', { force: true });

    // Click the update Note button
    cy.get('#updateButton').click();

    // Verify the Note is updated in the table
    cy.get('#tableContent').contains('Updatedd Notess').should('exist'); // Works
  });

  // it('should show validation errors when trying to update with empty fields', () => {
  //   cy.visit(baseUrl);
  //   cy.get('button.btn-warning').filter(':contains("edit")').last().click();
  
  //   // Simulate invalid (empty) inputs
  //   cy.get('#editTitle').clear();
  //   cy.get('#editDescription').clear();
  
  //   // Ensure there's a valid value for the priority dropdown
  //   cy.get('#editPriority').select('');  // or cy.get('#editPriority').select('High Priority');
  
  //   // Try to click the update button
  //   cy.get('#updateButton').click();
  
  //   // Check for validation error messages
  //   cy.get('.error').should('be.visible').and('contain', 'Title is required');
  //   cy.get('.error').should('be.visible').and('contain', 'Description is required');
  //   cy.get('.error').should('be.visible').and('contain', 'Priority is required');
  // });
});
