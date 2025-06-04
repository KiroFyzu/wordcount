const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const app = express();
const PORT = 3000;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = 'uploads/';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/upload', upload.single('textfile'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    const filePath = path.join(__dirname, 'uploads', req.file.filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    const words = fileContent.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    const charCount = words.join('').length;
    const lineCount = fileContent.split('\n').filter(line => line.trim().length > 0).length;

    res.json({
        filename: req.file.filename,
        wordCount,
        characterCount: charCount,
        lineCount
    });
});

app.get('/wordcount/:filename', (req, res) => {
    try {
        const filePath = path.join(__dirname, 'uploads', req.params.filename);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        
        const words = fileContent.split(/\s+/).filter(word => word.length > 0);
        const wordCount = words.length;
        const charCount = words.join('').length;
        const lineCount = fileContent.split('\n').filter(line => line.trim().length > 0).length;

        res.json({
            filename: req.params.filename,
            wordCount,
            characterCount: charCount,
            lineCount
        });
    } catch (error) {
        res.status(500).json({ error: 'Error reading the file', details: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
