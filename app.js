const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const fs = require('fs');
const path = require('path');

const app = express ()

const data = JSON.parse(fs.readFileSync('project-data.json', 'utf-8'));
const artworkData = JSON.parse(fs.readFileSync('art-data.json', 'utf-8'));

app.use(express.static('public'))
app.use('./css', express.static(__dirname + 'public/css'))
app.use('./js', express.static(__dirname + 'public/js'))

app.use(expressLayouts)
app.set('layout')
app.set('view engine', 'ejs')

app.use((req, res, next) => {
    res.locals.projects = data;
    res.locals.artworks = artworkData;
    next();
});

app.get('/', (req, res) => {
    res.render('index', { allProjects: data });
});

app.get('/about',(req, res) => {
    res.render('about')
})

app.get('/resume',(req, res) => {
    res.render('resume')
})

app.get('/contact',(req, res) => {
    res.render('contact')
})

app.get('/portfolio', (req, res) => {
    res.render('portfolio', { allProjects: data });
});

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/artpage', (req, res) => {
    res.render('artpage');
});

app.get('/against', (req, res) => {
    res.render('against');
});

app.get('/freelance', (req, res) => {
    res.render('freelance');
});

app.get('/projects', (req, res) => {
    res.render('projects');
});


app.get('/:page', (req, res) => {
    const pageData = data.find(d => d.url === req.params.page);

    if (pageData) {
        const allProjects = data.map(d => d.url);

        // Retrieve files if filesSrc exists
        let files = [];
        if (pageData.filesSrc) {
            const filesPath = path.join(__dirname, 'public', pageData.filesSrc);
            try {
                files = fs.readdirSync(filesPath); // Read all files in the directory
            } catch (err) {
                console.error(`Error reading files from ${filesPath}:`, err);
            }
        }

        // Pass the data to the EJS template
        res.render('template', { ...pageData, allProjects, files });
    } else {
        res.status(404).send('Page not found');
    }
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});