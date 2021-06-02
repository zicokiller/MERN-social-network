const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
require('dotenv').config({path: './config/.env'});
require('./config/db');
const {checkUser, requireAuth} = require('./middleware/auth.middleware');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  'allowedHeaders': ['sessionId', 'Content-Type', "Authorization"],
  'exposedHeaders': ['sessionId'],
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// jwt
app.use(checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
  res.status(200).send(req.userId)
});

// routes
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);

// server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
})