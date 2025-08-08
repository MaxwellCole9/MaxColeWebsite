const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/index', { title: 'Home', pageStyles: ['/css/page-css/index.css'] });
});

router.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About', pageStyles: ['/css/page-css/about.css'] });
});

router.get('/services', (req, res) => {
  res.render('pages/services', { title: 'Services', pageStyles: ['/css/page-css/services.css'] });
});

router.get('/clients', (req, res) => {
  res.render('pages/clients', { title: 'Clients', pageStyles: ['/css/page-css/clients.css'] });
});

router.get('/contact', (req, res) => {
  res.render('pages/contact', { title: 'Contact', pageStyles: ['/css/page-css/contact.css'] });
});

module.exports = router;
