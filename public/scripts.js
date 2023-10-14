document.addEventListener("DOMContentLoaded", () => {
    const notesList = document.getElementById("notes-list");
    const noteForm = document.getElementById("note-form");
    const noteTitle = document.getElementById("note-title");
    const noteText = document.getElementById("note-text");
    const saveNote = document.getElementById("save-note");
    const clearForm = document.getElementById("clear-form");

    noteForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = noteTitle.value;
        const text = noteText.value;

        if (title && text) {
            addNoteToList(title, text);
            clearNoteForm();
        }
    });

    notesList.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
            displayNoteDetails(e.target);
        }
    });
    clearForm.addEventListener("click", () => {
        clearNoteForm();
    });

    function addNoteToList(title, text) {
        const li = document.createElement("li");
        li.textContent = title;
        notesList.appendChild(li);

        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.push({ title, text });
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    function displayNoteDetails(noteElement) {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        const index = Array.from(notesList.children).indexOf(noteElement);
        const note = notes[index];

        if (note) {
            noteTitle.value = note.title;
            noteText.value = note.text;
        }
    }
    function clearNoteForm() {
        noteTitle.value = "";
        noteText.value = "";
    }

    // Load existing notes from local storage
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes.forEach((note) => {
        addNoteToList(note.title, note.text);
    });
});
