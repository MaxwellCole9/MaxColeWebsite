const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fs = require('fs');
const path = require('path');
require('dotenv').config(); // Optional: for environment vars like PORT

const app = express();

// Load JSON data
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/project-data.json'), 'utf-8'));
const artworkData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/art-data.json'), 'utf-8'));

// Middleware for static assets
app.use(express.static(path.join(__dirname, 'public')));

// EJS + Layouts
app.use(expressLayouts);
app.set('layout', 'layouts/main'); // views/layouts/main.ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Make data available in all views
app.use((req, res, next) => {
<<<<<<< HEAD
  res.locals.currentPath = req.path;
  next();
=======
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
>>>>>>> parent of 7c3abd7 (changed styles)
});

// Routes
const mainRoutes = require('./routes/main');
app.use('/', mainRoutes);

// Dynamic project pages (based on project-data.json `url` field)
app.get('/:page', (req, res) => {
  const pageData = data.find(d => d.url === req.params.page);

  if (pageData) {
    const allProjects = data.map(d => d.url);

    let files = [];
    if (pageData.filesSrc) {
      const filesPath = path.join(__dirname, 'public', pageData.filesSrc);
      try {
        files = fs.readdirSync(filesPath);
      } catch (err) {
        console.error(`Error reading files from ${filesPath}:`, err);
      }
    }

    res.render('pages/template', { ...pageData, allProjects, files });
  } else {
    res.status(404).render('pages/404', { title: "Page Not Found" });
  }
});

// 404 Fallback
app.use((req, res) => {
  res.status(404).render('pages/404', { title: "Page Not Found" });
});

// Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
