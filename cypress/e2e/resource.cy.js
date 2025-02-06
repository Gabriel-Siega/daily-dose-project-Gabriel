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
    cy.get('#tableContent').contains('Updatedd Notess').should('exist');
});

it('should be unable to add notes - empty fields', () => {
    cy.visit(baseUrl);
    // Open the modal and fill in the form for edit-notes
    cy.get('button[data-target="#notesModal"]').click();
});
});
  
