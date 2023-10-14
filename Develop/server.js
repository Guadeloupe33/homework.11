const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Define an array to hold notes (you can replace this with your database logic)
let notes = [];

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = notes.length + 1; // Assign a unique ID (you may use a library for this)
  notes.push(newNote);
  fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(notes), 'utf8');
  res.json(newNote);
});

app.delete('/api/notes/:id', (req, res) => {
  const idToDelete = parseInt(req.params.id);
  notes = notes.filter((note) => note.id !== idToDelete);
  fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(notes), 'utf8');
  res.json({ message: 'Note deleted' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
