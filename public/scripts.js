document.addEventListener("DOMContentLoaded", () => {
    const notesList = document.getElementById("notes-list");
    const noteForm = document.getElementById("note-form");
    const noteTitle = document.getElementById("note-title");
    const noteText = document.getElementById("note-text");
    const saveNote = document.getElementById("save-note");
    const clearForm = document.getElementById("clear-form");

    noteForm.addEventListener("submit", (e) => {
        e.preventDefault();