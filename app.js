const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express ()
const port = 5000

app.use(express.static('public'))
app.use('./css', express.static(__dirname + 'public/css'))
app.use('./js', express.static(__dirname + 'public/js'))

app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')

app.get('',(req, res) => {
    res.render('index')
})

app.get('/bio',(req, res) => {
    res.render('bio')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});