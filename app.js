const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express ()
const port = 5000

app.use(express.static('public'))
app.use('./css', express.static(__dirname + 'public/css'))
app.use('./js', express.static(__dirname + 'public/js'))

app.use(expressLayouts)
app.set('layout')
app.set('view engine', 'ejs')

app.get('',(req, res) => {
    res.render('index')
})

app.get('/bio',(req, res) => {
    res.render('bio')
})

app.get('/resume',(req, res) => {
    res.render('resume')
})

app.get('/contact',(req, res) => {
    res.render('contact')
})

app.get('/a-life',(req, res) => {
    res.render('a-life')
})

app.get('/smallsh',(req, res) => {
    res.render('smallsh')
})

app.get('/recipes',(req, res) => {
    res.render('recipes')
})

app.get('/masm',(req, res) => {
    res.render('masm')
})

app.get('/artpage',(req, res) => {
    res.render('artpage')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});