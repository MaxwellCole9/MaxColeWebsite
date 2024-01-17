const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const fs = require('fs');

const app = express ()
const port = 5000

app.use(express.static('public'))
app.use('./css', express.static(__dirname + 'public/css'))
app.use('./js', express.static(__dirname + 'public/js'))

app.use(expressLayouts)
app.set('layout')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
    res.render('index', { projects: data });
});

app.get('/bio',(req, res) => {
    res.render('bio')
})

app.get('/resume',(req, res) => {
    res.render('resume')
})

app.get('/contact',(req, res) => {
    res.render('contact')
})

app.get('/:page', (req, res) => {
    const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
    const pageData = data.find(d => d.url === req.params.page);
    if (pageData) {
        res.render('template', pageData);
    } else {
        res.status(404).send('Page not found');
    }
});

app.get('/artpage',(req, res) => {
    res.render('artpage')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});