const { describe, it, before, after } = require('mocha');
const { expect } = require('chai');
const { app, server } = require('../index'); // Ensure this is importing the app and server correctly
const chai = require('chai');
const chaiHttp = require('chai-http');
const fs = require('fs');
const sinon = require('sinon');
const express = require('express'); // <-- Add this line to import express
const { editNotes } = require('../utils/editNotes');
chai.use(chaiHttp);

let baseUrl;

describe('Resource API', () => {
    before(async () => {
        // Ensure you start the server and get the address and port dynamically
        const { address, port } = await server.address();
        baseUrl = `http://${address === '::' ? 'localhost' : address}:${port}`;
    });

    after(() => {
        return new Promise((resolve) => {
            server.close(() => {
                resolve();
            });
        });
    });

    app.use(express.json());
    app.put('/notes/:id', editNotes); // Use the imported editNotes function

    describe('PUT /notes/:id', () => {
        it('should update a note successfully', async () => {
            const response = await chai.request(app).put('/notes/1731063467903805').send({
                title: 'Updated Title',
                description: 'Updated Description',
                priority: 'high'
            });

            expect(response.status).to.equal(201);
            expect(response.body.message).to.equal('Note Updated successfully!');
        });

        it('should return 404 if note does not exist', async () => {
            const response = await chai.request(app).put('/notes/9999999999999999').send({
                title: 'Non-existing Title',
                description: 'Non-existing Description',
                priority: 'low'
            });

            expect(response.status).to.equal(404);
            expect(response.body.message).to.equal('Note not found!');
        });

        it('should return 500 on server error', async () => {
            // Use Sinon to spy on fs.promises.writeFile
            const writeFileStub = sinon.stub(fs.promises, 'writeFile').rejects(new Error('File write error'));

            const response = await chai.request(app).put('/notes/1731063467903805').send({
                title: 'Updated Title',
                description: 'Updated Description',
                priority: 'high'
            });

            expect(response.status).to.equal(500);
            expect(response.body.message).to.equal('File write error');

            // Restore the stub after the test
            writeFileStub.restore();
        });
    });
});
