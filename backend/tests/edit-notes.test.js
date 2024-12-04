const request = require('supertest');
const express = require('express');
const { editNotes } = require('../../utils/editNotes'); // Adjust path as necessary
const fs = require('fs');

const app = express();
app.use(express.json());
app.put('/notes/:id', editNotes); // Assuming this route setup

describe('PUT /notes/:id', () => {
    it('should update a note successfully', async () => { //This test checks whether the API correctly updates an existing note when valid data is provided.

        const response = await request(app).put('/notes/1731063467903805').send({ // Use the correct ID
            title: 'Updated Title',
            description: 'Updated Description',
            priority: 'high'
        });

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('Note Updated successfully!');
    });

    it('should return 404 if note does not exist', async () => { //This test ensures that when the ID of a non-existent note is passed, the API responds with a 404 status and the appropriate message.

        const response = await request(app).put('/notes/9999999999999999').send({ // Use a non-existing ID
            title: 'Non-existing Title',
            description: 'Non-existing Description',
            priority: 'low'
        });

        expect(response.status).toBe(404);
        expect(response.body.message).toBe('Note not found!');
    });

    it('should return 500 on server error', async () => { //This test simulates a server error during the note update process (e.g., a file write failure). It checks whether the API returns a 500 error in such cases.

        jest.spyOn(fs.promises, 'writeFile').mockImplementationOnce(() => { //simulate file system errors during test
            throw new Error('File write error');
        });

        const response = await request(app).put('/notes/1731063467903805').send({ // Use an existing ID
            title: 'Updated Title',
            description: 'Updated Description',
            priority: 'high'
        });

        expect(response.status).toBe(500);
        expect(response.body.message).toBe('File write error');
    });
});