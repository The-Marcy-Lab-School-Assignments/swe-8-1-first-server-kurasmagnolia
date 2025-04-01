/** @format */

// importing express
const express = require('express');

// invoking express to create our app
const app = express();

// controllers
const servePicture = (req, res, next) => {
  const picture = {
    src: 'https://static.wikia.nocookie.net/teenwolf/images/c/c4/Teen_Wolf_Season_4_EDIT_Cast_Shot_Photo_Credit_Jaimie_Trueblood_and_MTV.png/revision/latest/scale-to-width-down/1200?cb=20140616224451',
  };
  return res.send(picture);
};

const serveJoke = (req, res, next) => {
  const joke = {
    setup: 'What do you call an angry carrot?',
    punchline: 'A steamed veggie.',
  };
  return res.send(joke);
};

const serveDie = (req, res, next) => {
  let { quantity } = req.query;
  quantity = Number(quantity);

  if (!quantity || typeof quantity !== 'number') {
    console.log(typeof quantity);
    const roll = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    return res.send({ rolls: [roll] });
  } else {
    const rollsArr = [];
    console.log(quantity);
    for (let i = 0; i < Number(quantity); i++) {
      const roll = Math.floor(Math.random() * (6 - 1 + 1) + 1);
      rollsArr.push(roll);
    }
    return res.send({ rolls: rollsArr });
  }
};

// endpoints
app.get('/api/picture', servePicture);
app.get('/api/joke', serveJoke);
app.get('/api/rollDie', serveDie);

// declared PORT i'll be using
const PORT = 8080;

// invoked .listen on app to listen to my PORT i declared
app.listen(PORT, () => {
  console.log(`listening at this PORT: http://localhost:${PORT}`);
});
