// Function to handle the edit note action
function editNote(encodedNote) {
    try {
        const note = JSON.parse(decodeURIComponent(encodedNote));

        // Populate the edit modal with existing note data
        populateEditModal(note);

        // Set the update button's onclick event to update this specific note
        document.getElementById("updateButton").onclick = () => updateNote(note.id);

        // Show the modal
        $('#editResourceModal').modal('show');
    } catch (error) {
        console.error("Error parsing the note:", error);
    }
}

// Function to populate the modal with note data
function populateEditModal(note) {
    document.getElementById("editTitle").value = note.title;
    document.getElementById("editDescription").value = note.description;
    document.getElementById("editPriority").value = note.priority;
}

// Function to update the note
function updateNote(noteId) {
    // Get updated values from the form
    const updatedNote = getUpdatedNoteData();

    // Send a PUT request to update the note
    sendUpdateRequest(noteId, updatedNote);
}

// Function to get updated note data from the form
function getUpdatedNoteData() {
    return {
        title: document.getElementById("editTitle").value,
        description: document.getElementById("editDescription").value,
        priority: document.getElementById("editPriority").value,
    };
}

// Function to send the PUT request to update the note
function sendUpdateRequest(noteId, updatedNote) {
    const request = new XMLHttpRequest();
    request.open('PUT', `/edit-notes/${noteId}`, true);
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function () {
        if (request.status === 200 || request.status === 201) {
            // Refresh notes list and close modal
            viewNotes();
            $('#editResourceModal').modal('hide');
            console.log("Successfully Updated the Note !");
            alert("Note has been Updated!");
        } else {
            console.error("Failed to update note. Status:", request.status, "Response:", request.responseText);
        }
    };

    request.onerror = function() {
        console.error("Network error occurred while updating the note.");
    };

    request.send(JSON.stringify(updatedNote));
}
