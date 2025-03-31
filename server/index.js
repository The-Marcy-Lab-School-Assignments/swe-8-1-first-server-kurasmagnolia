/** @format */

// importing express
const express = require('express');

// invoking express to create our app
const app = express();

// controllers

// endpoints
app.get('/api/picture', servePicture);
app.get('/api/joke', serveJoke);
app.get('api/rollDie', serveDie);

// declared PORT i'll be using
const PORT = 8080;

// invoked .listen on app to listen to my PORT i declared
app.listen(PORT, () => {
  console.log(`listening at this PORT: ${PORT}`);
});
