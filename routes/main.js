const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/index', { title: 'Home', allProjects: res.locals.projects });
});

router.get('/about', (req, res) => res.render('pages/about', { title: 'About' }));
router.get('/resume', (req, res) => res.render('pages/resume', { title: 'Resume' }));
router.get('/contact', (req, res) => res.render('pages/contact', { title: 'Contact' }));
router.get('/portfolio', (req, res) => res.render('pages/portfolio', { title: 'Portfolio', allProjects: res.locals.projects }));
router.get('/ai', (req, res) => res.render('pages/ai', { title: 'AI', allProjects: res.locals.projects }));
router.get('/artpage', (req, res) => res.render('pages/artpage', { title: 'Art Page' }));
router.get('/against', (req, res) => res.render('pages/against', { title: 'Against' }));
router.get('/freelance', (req, res) => res.render('pages/freelance', { title: 'Freelance' }));
router.get('/projects', (req, res) => res.render('pages/projects', { title: 'Projects' }));

module.exports = router;