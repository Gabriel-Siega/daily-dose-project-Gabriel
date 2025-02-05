const { app, server } = require('../index'); // Ensure this is importing the app and server correctly
const chai = require('chai');
const chaiHttp = require('chai-http');
const fs = require('fs');
const sinon = require('sinon');
const express = require('express');
const { editNotes } = require('../utils/editNotes');
chai.use(chaiHttp);

let baseUrl;

// Setup the server before running tests
beforeAll(async () => {
  const { address, port } = await server.address();
  baseUrl = `http://${address === '::' ? 'localhost' : address}:${port}`;
});

// Close the server after tests
afterAll(() => {
  return new Promise((resolve) => {
    server.close(() => {
      resolve();
    });
  });
});

app.use(express.json());
app.put('/notes/:id', editNotes); // Use the imported editNotes function

describe('Resource API', () => {
  it('should update a note successfully', async () => {
    const response = await chai.request(app).put('/notes/1731063467903805').send({
      title: 'Updated Title',
      description: 'Updated Description',
      priority: 'high'
    });

    expect(response.status).toBe(201); // Changed to Jest's `toBe`
    expect(response.body.message).toBe('Note Updated successfully!'); // Changed to Jest's `toBe`
  });

  it('should return 404 if note does not exist', async () => {
    const response = await chai.request(app).put('/notes/9999999999999999').send({
      title: 'Non-existing Title',
      description: 'Non-existing Description',
      priority: 'low'
    });

    expect(response.status).toBe(404); // Changed to Jest's `toBe`
    expect(response.body.message).toBe('Note not found!'); // Changed to Jest's `toBe`
  });

  it('should return 500 on server error', async () => {
    // Use Sinon to spy on fs.promises.writeFile
    const writeFileStub = sinon.stub(fs.promises, 'writeFile').rejects(new Error('File write error'));

    const response = await chai.request(app).put('/notes/1731063467903805').send({
      title: 'Updated Title',
      description: 'Updated Description',
      priority: 'high'
    });

    expect(response.status).toBe(500); // Changed to Jest's `toBe`
    expect(response.body.message).toBe('File write error'); // Changed to Jest's `toBe`

    // Restore the stub after the test
    writeFileStub.restore();
  });
});
