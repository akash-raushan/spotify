const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sspn',
});


// Connect to the database
db.connect((err) => {
  if (err) {
    throw err;
  }
  // console.log('Connected to the database');
});

db.query('create database if not exists music_user')
db.query('use music_user')
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS user (
      id INT PRIMARY KEY AUTO_INCREMENT,
      user VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL
    )
  `;
db.query(createTableQuery,(err,res)=>{
  if(err){
    console.error("Error creating table ",err)
  }else{
    // console.log("TABLE CREATED")
  }
})


// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// LOGIN
app.post('/login', (req, res) => {
  const { user_name, user_password } = req.body;

  if (!user_name || !user_password) {
    return res.status(400).send('Invalid input data');
  }

  const query = 'SELECT * FROM user WHERE user = ? AND password = ? LIMIT 1';
  db.query(query, [user_name, user_password], (err, result) => {
    if (err) {
      return res.status(500).send('Internal Server Error');
    }

    if (result.length === 1) {
      res.redirect('/welcome.html'); // Redirect to welcome page
    } else {
      res.status(401).send('Incorrect username or password');
    }
  });
});



// SIGNUP
app.post('/signup', (req, res) => {
  const { user_name, user_email, user_password, user_re_password } = req.body;

  if (!user_name || !user_email || !user_password || !user_re_password) {
    return res.status(400).send('Invalid input data');
  }

  if (user_password !== user_re_password) {
    return res.status(400).send('Password and Re-Password do not match');
  }

  const query = 'INSERT INTO user (user, email, password) VALUES (?, ?, ?)';
  db.query(query, [user_name, user_email, user_password], (err, result) => {
    if (err) {
      return res.status(500).send('Internal Server Error');
    }
    res.redirect('./'); // Redirect to login page
  });
});

// Serve static files (like your HTML, CSS, and images)
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
