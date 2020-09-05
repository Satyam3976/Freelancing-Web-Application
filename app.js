const path = require('path');
const cors = require('cors');
const express = require('express');
// const bodyParser=require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(cors());

const authRoutes = require('./routes/auth');
const gigRoutes = require('./routes/gigs');

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
  })
);


app.use('/auth', authRoutes);
app.use('/gigs', gigRoutes);


app.get('/', (req, res) => {
  res.send('Welcome')
})

const db = require("./keys").db;
mongoose.connect(
  db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
)
  .then(result => {
    console.log("Successfully connected");
    app.listen(3000);
  })
  .catch(err => {
    console.log("could not listen to 3000");
  });
