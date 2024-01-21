const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const fs = require('fs');

const app = express ()
const port = 5000

const data = JSON.parse(fs.readFileSync('project-data.json', 'utf-8'));

app.use(express.static('public'))
app.use('./css', express.static(__dirname + 'public/css'))
app.use('./js', express.static(__dirname + 'public/js'))

app.use(expressLayouts)
app.set('layout')
app.set('view engine', 'ejs')

app.use((req, res, next) => {
    res.locals.projects = data;  // 'projects' will be available in all EJS templates
    next();
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about',(req, res) => {
    res.render('about')
})

app.get('/contact',(req, res) => {
    res.render('contact')
})

app.get('/projects', (req, res) => {
    res.render('projects');
});

app.get('/artpage', (req, res) => {
    const artworkData = JSON.parse(fs.readFileSync('art-data.json', 'utf-8'));
    res.render('artpage', { artworks: artworkData });
});

app.get('/:page', (req, res) => {
    const pageData = data.find(d => d.url === req.params.page);
    if (pageData) {
        res.render('template', pageData);
    } else {
        res.status(404).send('Page not found');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});