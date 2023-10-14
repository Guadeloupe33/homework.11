const express = require('express');
const router = express.Router();
const fs = require('fs');
const dbPath = './db.json';

// GET /api/notes - Retrieve all notes
router.get('/api/notes', (req, res) => {
  // Read the db.json file and return the notes as JSON
});

// POST /api/notes - Create a new note
router.post('/api/notes', (req, res) => {
  // Read the existing notes, add a new note with a unique ID, and save it back to db.json
});

// DELETE /api/notes/:id - Delete a note by ID (Bonus)
router.delete('/api/notes/:id', (req, res) => {
  // Read the existing notes, remove the note with the specified ID, and save the updated list back to db.json (Bonus)
});

module.exports = router;
