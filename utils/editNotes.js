const { Notes } = require('../models/notes.js');
const { readJSON } = require('./NotesUtils.js');
const fs = require('fs').promises; //Mocking File System Operations (fs)


// Edit notes
async function editNotes(req, res) {
    try {
        const id = req.params.id;
        const title = req.body.title;
        const description = req.body.description;
        const priority = req.body.priority;

        const allNotes = await readJSON('utils/notes.json');
        let modified = false;

        for (let i = 0; i < allNotes.length; i++) {
            const currentResource = allNotes[i];
            if (currentResource.id == id) {
                allNotes[i].title = title;
                allNotes[i].description = description;
                allNotes[i].priority = priority;
                modified = true;
                break;
            }
        }

        if (modified) {
            await fs.writeFile('utils/notes.json', JSON.stringify(allNotes), 'utf8');
            return res.status(201).json({ message: 'Note Updated successfully!' });
        } else {
            // Change to 404 Not Found
            return res.status(404).json({ message: 'Note not found!' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    editNotes
};