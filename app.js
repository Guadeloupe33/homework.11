const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


app.get('/notes', (req, res) => {
    res.sendFile(__dirname + '/views/notes.html');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});