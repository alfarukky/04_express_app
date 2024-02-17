const express = require('express');
const authorRoute = require('./author.route');
const authenticate = require('./logger');
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(authenticate);
app.use('/api/authors', authorRoute);
app.all('*', (req, res) => {
  res.status(404).send('Bad request');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
