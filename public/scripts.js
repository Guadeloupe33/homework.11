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