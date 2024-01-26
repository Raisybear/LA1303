const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const upload = multer({ dest: 'public/uploads/' });

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    const audioPath = path.join('public', 'music', file.originalname);
    fs.renameSync(file.path, audioPath);
    res.send('File uploaded successfully.');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000.');
});