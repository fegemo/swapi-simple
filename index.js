
const films = require('./data/films.json');
const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.get('/', function(req, res){
  res.send(`Fegemo's Star Wars API`);
});

app.get('/films', function(req, res){
  console.log(typeof films);
  res.json(films);
});

app.get('/films/:id', function(req, res){
  console.log('id = ', req.params.id)
  const requestedMovie = films.find(m => m.episode_id == req.params.id);
  console.log('req movie = ', requestedMovie)
  if (requestedMovie !== null) {
    res.json(requestedMovie);
  } else {
    res.send(`404 film with episode_id = ${req.params.id} not found`)
  }
});

app.listen(process.env.PORT || 3000);
