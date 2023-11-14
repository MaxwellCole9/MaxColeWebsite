const express = require('express');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the directory where the views will be stored
app.set('views', './views');

// Static files (CSS, JavaScript, images)
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.render('index');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));